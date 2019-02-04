const helpers = require('./helpers');
const { warn } = require('@vue/cli-shared-utils');

warn(
  'Nuxt 2.4.0 added native TypeScript support. Consider using that version rather than this plugin.'
);

module.exports = (api, options, rootOptions) => {
  if (!api.hasPlugin('typescript')) {
    let fileList = helpers.fileList();

    api.extendPackage({
      devDependencies: {
        'ts-loader': '^5.3.1',
        typescript: '~3.1.1',
      },
      dependencies: {
        nuxt: '^2.0.0',
      },
    });

    if (options.nuxtDecorators) {
      api.extendPackage({
        dependencies: {
          'nuxt-property-decorator': '^1.2.0',
        },
      });
    }

    api.extendPackage({
      scripts: {
        dev: 'nuxt',
        build: 'nuxt build',
        start: 'nuxt start',
        generate: 'nuxt generate',
        serve:
          'echo "\'serve\' will not work as expected. Use dev/build/start/generate instead." && exit 1',
      },
    });

    if (api.hasPlugin('eslint')) {
      require('@vue/cli-plugin-eslint/generator').applyTS(api);
      api.extendPackage({
        devDependencies: {
          'eslint-loader': '^2.0.0',
          'typescript-eslint-parser': '^21.0.1',
        },
      });
      options.hasESLint = true;

    if (api.hasPlugin('babel')) {
      api.extendPackage({
        devDependencies: {
          '@babel/plugin-transform-runtime': '^7.2.0',
        },
      });
      options.hasBabel = true;
    }

    api.render('./template/default');

    const nuxtConfig = api.resolve('./nuxt.config.js');
    if (!helpers.isFile(nuxtConfig)) {
      api.render(
        { 'nuxt.config.js': './template/additions/nuxt.config.js' },
        options
      );

      fileList = fileList.concat(
        helpers.fileList(['additions', 'nuxt.config.js'])
      );
    }

    api.postProcessFiles(files => {
      let nuxtConfig = files['nuxt.config.js'];

      if (nuxtConfig) {
        let buffer = nuxtConfig.split(/\r?\n/);
        let modulesIdx = buffer.findIndex(line =>
          line.match(/\s*modules:\s*\[/)
        );

        if (modulesIdx > 0) {
          buffer.splice(modulesIdx + 1, 0, "    '~/modules/typescript.js',");
        }

        /** Modify ESLint webpack config if present */
        let testRE = /(\s*test: \/[\\]*.\(js\|vue)(.*)(\)\$\/,)/;
        let testIdx = buffer.findIndex(line => line.match(testRE));

        if (testIdx > 0) {
          buffer[testIdx] = buffer[testIdx].replace(
            testRE,
            (m, p1, p2, p3) => `${p1}|tsx?${p3}`
          );
        }

        files['nuxt.config.js'] = buffer.join('\n');
      }

      if (options.moveToSrc) {
        const filePaths = Object.keys(files);
        /** Move old files in src/ to legacy/src/ */
        let oldFiles = filePaths.filter(
          file => /^src\//.test(file) && !fileList.includes(file)
        );
        for (file of oldFiles) {
          let newFile = file.replace(/^src\//, 'legacy/src/');
          files[newFile] = files[file];
          delete files[file];
        }

        /** Move files in subfolders to src/ */
        let moveFiles = filePaths.filter(file => /^(?!src\/).*\//.test(file));
        for (file of moveFiles) {
          files[`src/${file}`] = files[file];
          delete files[file];
        }
      } else {
        /** Keep folders in root folder (Nuxt default) */
        let srcRE = /^(src\/)+/;
        for (file in files) {
          if (fileList.includes(file) && srcRE.test(file)) {
            let newFile = file.replace(srcRE, '');
            files[newFile] = files[file];
            delete files[file];
          }
        }
      }
    });
  }
};
