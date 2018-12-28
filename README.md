# Simple Accordion

Easy to use accordion

## Live Demo

One demo worths a thousand words:
https://aleixcam.github.io/schibsted-accordion/

## Usage

Download the [js](https://raw.githubusercontent.com/aleixcam/schibsted-accordion/master/build/accordion.min.js) and [css](https://raw.githubusercontent.com/aleixcam/schibsted-accordion/master/build/accordion.min.css) files and include them in your html.

```javascript
const accordion = new Accordion('accordion')
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

```javascript
const simpleAccordion = new Accordion('accordion')

const customClass = new Accordion('accordion_custom_class', {
    className: 'custom-class'
})

const withData = new Accordion('accordion_ajax', {
    data: dataFromSomewhere
})
```

# Original Statement

## Frontend Exercise

With the next markup, you must create an accordion (JS / CSS) show only the contents of a section at a time.
Sure to follow the [SUIT](https://suitcss.github.io/) convention when working with CSS.


```html
<dl>
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

### Conditions
* Use Sass for generate CSS
* Use ES6
* Use only Vanilla JS, without any JS framework
* Generate gh-page for publish


### Bonus
* Add new section with Ajax content
