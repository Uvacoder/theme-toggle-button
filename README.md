# theme-toggle-button Lit Web Component

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/vite-1heqg6?file=index.html)

## [Watch the YouTube Tutorial](https://youtu.be/dL9KlnnWOhI)

## Run the Demo

1. `npm i`
2. `npm start`

## Attributes

- `remember-setting` - This will use localStorage to remember what the user set as their preference. If this isn't set on the component it will default back to automatic CSS theme preference detection.

## How to use the web component 

### CSS Setup

Below is an example of what your CSS variables and media query *could* look like. The colors are entirely up to you but the schemes `light` and `dark` are required. The CSS variable `--theme-offset-bg` is the only other requirment. This is the color of the shadow of the button while hovered over.

```css
:root {
  color-scheme: light;
  --theme-bg: #fafafa;
  --theme-on-bg: #000000;
  --theme-offset-bg: #bebebe;
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --theme-bg: #000000;
    --theme-on-bg: #fafafa;
    --theme-offset-bg: #7a7a7a;
  }
}

[color-scheme="light"] {
  color-scheme: light;
  --theme-bg: #fafafa;
  --theme-on-bg: #000000;
  --theme-offset-bg: #bebebe;
}

[color-scheme="dark"] {
  color-scheme: dark;
  --theme-bg: #000000;
  --theme-on-bg: #fafafa;
  --theme-offset-bg: #7a7a7a;
}

/* Important! Be sure to use the variables on your body tag */
body {
  background-color: var(--theme-bg);
  color: var(--theme-on-bg);
}
```

### NPM Package Usage

To install the web component on your website you also have choices. If you have NPM in your website environment you can use the NPM package

#### Install the NPM Package

`npm i @jaydanurwin/theme-toggle-button`

#### Import the package

```js
import '@jaydanurwin/theme-toggle-button';
```

#### Place the button on page

```html
<theme-toggle-button></theme-toggle-button>
```

**OR**

### CDN Usage

If you don't have NPM on your site enviroment or you simply prefer a CDN you can add one of the following scripts as high up in the `<head>` tag of your website as possible.

#### Script Tag

```html
<script type="module">
  import 'https://cdn.skypack.dev/@jaydanurwin/theme-toggle-button'
</script>
```

#### Place the button on page

```html
<theme-toggle-button></theme-toggle-button>
```

## How to build a bundled package file

1. `npm i`
2. `npm run build`
