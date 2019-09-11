# parcel-plugin-zengine-html-migrator

Parcel plugin that interpolates v1 plugin HTML into v2 HTML body

## Installation

`npm i -d parcel-plugin-zengine-html-migrator`

_Attention: parcel-bundler has to be installed_

## Usage
 
Add `%PLUGIN_HTML%` to the wrapper's index.html between the body tags.

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
