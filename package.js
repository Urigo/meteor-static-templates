Package.describe({
  name: 'static-templates',
  version: '0.0.1'
});

Package.registerBuildPlugin({
  name: 'compileStaticTemplate',
  sources: [
    'plugin.js'
  ],
  use: [
    'static-html-compiler',
    'ecmascript'
  ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');

  api.use('isobuild:compiler-plugin');
});
