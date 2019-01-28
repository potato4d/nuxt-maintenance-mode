# Maintenance mode module for Nuxt.js

A module for displaying the view for maintenance as fallback while maintaining the path.

<a href="https://patreon.com/potato4d">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" height="50">
</a>

[![Image from Gyazo](https://i.gyazo.com/96e9a69d2e6449d774c304f827468430.gif)](https://gyazo.com/96e9a69d2e6449d774c304f827468430)

## About this module

A module for displaying the view for maintenance as fallback while maintaining the path.

Instead of accessed routing, render the contents of the routing specified for maintenance and return status code 503 to the client.

This is the easiest and most effective way to put an application in maintenance state without compromising the SEO and the user's access experience.

### Caution

This project is under development.

We welcome aggressive pull requests such as when there is a better implementation.

## Installation

At first, install package from NPM

```bash
$ yarn add nuxt-maintenance-mode # or npm i -S
```

Next, Add 'nuxt-maintenance-mode' value to modules property in nuxt.config.js

```js
module.exports = {
  // ...
  modules: ['nuxt-maintenance-mode']
  // ...
}
```

Last, Add maintenance mode options to nuxt.config.js

```js
module.exports = {
  // ...
  modules: [
    'nuxt-maintenance-mode'
  ],
  maintenance: {
    enabled: !!(process.env.MAINTENANCE_MODE), // If given truthy value, activation maintenance mode on startup your nuxt application.
    path: '/maintenance' // maintenance fallback content routing.
    matcher: /^\/admin/ // Path to be in maintenance mode (regex).
  },
  // ...
}
```

## Options

### enabled?: boolean

- default: false
- required: false

If given truthy value, activation maintenance mode on startup your nuxt application.

We recommend specifying the value of the environment variable.

### path: string

- default: undefined
- required: true

maintenance fallback content routing.

The path you set for this property must have a valid routing.

For example, if you specify `/maintenance`, create `pages/maintenance.vue`.

### matcher?: string

- default: undefined
- required: false

Path to be in maintenance mode (regex).

## LICENSE

MIT (c) HANATANI Takuma(@potato4d)
