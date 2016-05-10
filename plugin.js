import {
  StaticHtmlCompiler,
} from 'meteor/static-html-compiler';

Plugin.registerCompiler({
  extensions: ['html'],
  archMatching: 'web',
  isTemplate: true
}, () => new StaticHtmlCompiler());
