import {
  StaticHtmlCompiler,
} from 'meteor/static-html-compiler';

Plugin.registerCompiler({
  extensions: ['html']
}, () => new StaticHtmlCompiler());
