# Ember Paper Cuts
*It'll hurt when you have to upgrade, but it won't kill you*

## About
This project aims to make [Material Design](https://www.google.com/design/spec/material-design/introduction.html) components available that have not been officially implemented by [Ember Paper](https://github.com/miguelcobain/ember-paper). The goal is to build temporary components that closely follow Ember Paper and Angular Material conventions. This will help the transition to officially supported components, but there are no guarantees!

## Installation

This project depends on [Ember Paper](https://github.com/miguelcobain/ember-paper) and [Ember-cli](https://github.com/ember-cli/ember-cli)

Add the following to your `package.json` file's `devDependencies`:

`"ember-paper-cuts": "git://github.com/CoachLogix/ember-paper-cuts.git"`

## Component Examples

### Data tables

```hbs
{{#paper-table}}
  <thead>
    <tr>
      <th class="icon-column"></th>
      <th>>Name</th>
      <th>Age</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    {{#each models as |item|}}
      {{#paper-row}}
        {{#paper-column icon="true"}}
          {{some-avatar src=item.image}}
        {{/paper-column}}
        {{#paper-column}}{{item.name}}{{/paper-column}}
        {{#paper-column}}{{item.age}}{{/paper-column}}
        {{#paper-column}}{{item.location}}{{/paper-column}}
      {{/paper-row}}
    {{/each}}
  </tbody>
{{/paper-table}}
```

### Dropdown menu items
Styled for used in a menu-bar-style menu, with optional  checkmark or other icon and command key shortcut.

```hbs
{{#paper-menu position="target bottom" width=2 dense=true as |menu|}}
  {{#paper-button target=menu action="toggleMenu" icon-button=true}}
    {{paper-icon "create" class="md-menu-origin"}}
  {{/paper-button}}
{{else}}
  {{#paper-dropdown-menu-item
        action=(action "toggleDone")
        checked=isDone
        disabled=isntSelected
        shortcut="Ctrl+Alt+V"}}
    Mark as done
  {{/paper-dropdown-menu-item}}
  {{#paper-dropdown-menu-item
        action=(action "togglePageBreak")
        checked=isPageBreak
        disabled=isntSelected
        shortcut="Ctrl+Alt+P"}}
    Start new page
  {{/paper-dropdown-menu-item}}
{{/paper-menu}}
```

## Disclaimer

Use this extension at your own risk.
