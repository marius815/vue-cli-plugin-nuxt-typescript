export default function() {
  this.nuxt.options.extensions.push('ts', 'tsx');

  this.extendBuild(config => {
    const loader = {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
        transpileOnly: true,
      },
    };
    config.module.rules.push(
      Object.assign(
        {
          test: /((client|server)\.js)|(\.tsx?)$/,
        },
        loader
      )
    );

    if (!config.resolve.extensions.includes('.ts')) {
      config.resolve.extensions.push('.ts');
    }

    if (!config.resolve.extensions.includes('.tsx')) {
      config.resolve.extensions.push('.tsx');
    }
  });
}
