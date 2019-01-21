# Simple Accordion

Easy to use accordion

## Live Demo

One demo worths a thousand words:
https://aleixcam.github.io/simple-accordion/

## Usage

Download the [js](https://raw.githubusercontent.com/aleixcam/simple-accordion/master/build/accordion.min.js) and, if you want the default styles, the [css](https://raw.githubusercontent.com/aleixcam/simple-accordion/master/build/accordion.min.css) files and include them in your html.

```html
<script type="text/javascript" src="route/to/file/accordion.min.js"></script>
<link rel="stylesheet" href="route/to/file/accordion.min.css">
```

## Syntax

```javascript
new Accordion(id[, options])
```

### Arguments

* **id:** Id to reference the object in the DOM.
* **options:** Optional. Object of options that will receive the accordion. The available options are:
    * className: If you want a custom class for the accordion.
    * data: Parsed JSON that will be rendered in the accordion. Useful to print AJAX requests.

## Examples

```html
<dl id="accordion">
    <dt>Section 1</dt>
    <dd>
        <p>Section 1 Content...</p>
    </dd>
    <dt>Section 2</dt>
    <dd>
        <p>Section 2 Content...</p>
    </dd>
    <dt>Section 3</dt>
    <dd>
        <p>Section 3 Content...</p>
    </dd>
</dl>
```

```javascript
const simpleAccordion = new Accordion('accordion')

const customClass = new Accordion('accordion_custom_class', {
    className: 'custom-class'
})

const withData = new Accordion('accordion_ajax', {
    data: dataFromSomewhere
})
```
