Package.describe({
  name: 'urigo:static-templates',
  version: '0.0.3',
  summary: 'Meteor plugin for importing static HTML templates'
});

Package.registerBuildPlugin({
  name: 'compileStaticTemplate',
  sources: [
    'plugin.js'
  ],
  use: [
    'urigo:static-html-compiler@0.0.3',
    'ecmascript@0.2.0'
  ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use('isobuild:compiler-plugin@1.0.0');
});
