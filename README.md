# vue-cli-plugin-nuxt-typescript

Nuxt.js with TypeScript support

## Usage

### Prerequisite

* [vue-cli](https://github.com/vuejs/vue-cli) >= 3

### Installation

Create a new Vue.js project with vue-cli:

```shell
vue create my-app
cd my-app
```

Use vue-cli to add this plugin

```shell
vue add nuxt-typescript
```

### Prompts

#### Use nuxt-property-decorators? (Y/n)

Whether or not to use [nuxt-property-decorators](https://github.com/nuxt-community/nuxt-property-decorator), where the default answer is Yes. The provided examples will respect this choice.

#### Move source files to src/ folder? (Y/n)

When creating a Nuxt.js app the default configuration is to not use the src/ folder, however TypeScript and Vue.js prefers using it.

If this option is enabled, any existing files in src/ will be moved to legacy/ instead.

### Linting

If you have ESLint enabled in your initial Vue project, the plugin respects that and modifies the configuration files accordingly. So far, I have not used TSLint myself, so I haven't included that option yet.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/marius815/vue-cli-plugin-nuxt-typescript/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
