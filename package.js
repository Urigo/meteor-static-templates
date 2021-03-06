Package.describe({
  name: 'urigo:static-templates',
  version: '1.1.4',
  summary: 'Meteor plugin for importing static HTML templates'
});

Package.registerBuildPlugin({
  name: 'compileStaticTemplate',
  sources: [
    'plugin.js'
  ],
  use: [
    'urigo:static-html-compiler@1.1.4',
    'ecmascript@0.12.0'
  ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.8');

  api.use('isobuild:compiler-plugin@1.0.0');
});
