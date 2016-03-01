# Ember-paper-ext

This project aims to make [Material Design](https://www.google.com/design/spec/material-design/introduction.html) components available that have not been officially implemented by [Ember Paper](https://github.com/miguelcobain/ember-paper). The goal is to build temporary components that closely follow Ember Paper and Angular Material conventions. This will ease a transition to officially supported components.

## Installation

This project depends on [Ember Paper](https://github.com/miguelcobain/ember-paper) and [Ember-cli](https://github.com/ember-cli/ember-cli)

Add the following to your `package.json` file's `devDependencies`:

`"ember-paper-ext": "git://github.com/CoachLogix/ember-paper-ext.git"`

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
