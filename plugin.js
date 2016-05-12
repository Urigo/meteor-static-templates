import {
  StaticHtmlCompiler,
} from 'meteor/urigo:static-html-compiler';

Plugin.registerCompiler({
  extensions: ['html'],
  archMatching: 'web',
  isTemplate: true
}, () => new StaticHtmlCompiler());
