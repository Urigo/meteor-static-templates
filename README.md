# meteor-static-templates

Meteor plugin for importing static HTML templates

## Installation

```bash
meteor add urigo:static-templates
```

## Usage

```js
import example from './example.html';

console.log('example.html as string:', example);
```

### importing from node_modules
```js
import template from 'angular-utils-pagination/dirPagination.tpl.html';
```

## Known issues

- TypeScript warnings about missing module [[#9](https://github.com/Urigo/meteor-static-templates/issues/9)]
