# parcel-plugin-zengine-html-migrator

Parcel plugin that interpolates v1 plugin HTML into v2 HTML body

Also see:
[parcel-plugin-zengine-js-migrator](https://github.com/tehpsalmist/parcel-plugin-zengine-js-migrator)
[parcel-plugin-zengine-css-migrator](https://github.com/tehpsalmist/parcel-plugin-zengine-css-migrator)

## Installation

`npm i -d parcel-plugin-zengine-html-migrator`

_Attention: parcel-bundler has to be installed_

## Usage
 
1. Add `%PLUGIN_HTML%` to the wrapper's index.html between the body tags.
2. Ensure your ng-templates all live in `plugin/plugin.html`
3. Run parcel normally

### Example

_**index.html**_

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Cool Plugin</title>
  </head>
  <body>
    %PLUGIN_HTML%
  </body>
</html>
```

_**run it**_  
`parcel index.html`

_**output**_

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Cool Plugin</title>
  </head>
  <body>
    <script type="text/ng-template" id="my-cool-plugin">
      <!-- etc -->
    </script>
  </body>
</html>
```
