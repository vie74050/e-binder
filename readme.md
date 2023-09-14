# About

Request from SME Sept 8 2023: Ebinder layout and styles not functioning as expected after SME updated the HTML file.

* LTC: Paul Krampitz, cc Jason Chien, Vienna Ly
* SME: Angela Lam
* Updated by Vienna Ly from unknown source  
  * fix tab-text missing issue, and tab readability
* [Learning Hub Template Page](https://learn.bcit.ca/d2l/le/content/510302/Home)
  * all scripts and resources are in the `ebinder` folder in the Course Files

## Diagnosis: The issue

Based on an older version from a previous course, the HTML seems to be missing `tab-text` element.
When saving a page edited using D2L web editor, if it has dynamically generated HTML from external code, D2L is now saving the generated HTML instead of the original HTML.

e.g. the original HTML would have been something like

```original HTML
<div class="tab-content">
  <div class="tab-text">Tab 6</div>
  <h2 class="tab-title">Title 6</h2>
  <ul>
    <li>Link 1</li>
    <li>Link 2</li>
    <li>Link 3</li>
    <li>Link 4</li>
    <li>Link 5</li>
  </ul>
</div>
```

And the ebinder code would take the tab-text and make the tab elements.

```generated HTML
<aside class="binder-sidenav">
  <div class="side-tabs">
    <div class="tab-button tab-button-active">
      <p>Surrey Memorial Hospital Orientation Guide</p>
    </div>
    <div class="tab-button tab-button-active">
<aside class="binder-sidenav">
  <div class="side-tabs">
    <div class="tab-button tab-button-active">
      <p>Surrey Memorial Hospital Orientation Guide</p>
    </div>
    <div class="tab-button tab-button-active">
```

## How to reporduce the issue

If SME edits the original HTML using the WYSIWYG editor (“EditHTML”) and saves, then what gets saved is the generated HTML, which then messes up the code since “tab-text” is no longer available.

## Resolution

* External `ebinder.js` is moved from loading in the `<head>` to end of `<body>` as a hotfix for D2L saving issue.
* Updated the HTML and js so that it no longer requires `tab-text`.
* Layout and positioning of tabs were based on a series of background images, now updated to be css driven so it is more responsive.
* Added icons and `title` to PDF and docx links so user knows the type of resources and alert them that link will be downloaded or external to page.
