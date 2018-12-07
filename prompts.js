const defaults = require('./defaults');

module.exports = [
  {
    name: 'nuxtDecorators',
    type: 'confirm',
    message: 'Use nuxt-property-decorators?',
    default: defaults.nuxtDecorators,
  },
  {
    name: 'moveToSrc',
    type: 'confirm',
    message: 'Move source files to src/ folder?',
    default: defaults.moveToSrc,
  },
];
