# Maintenance mode module for Nuxt.js

<a href="https://patreon.com/potato4d">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" height="50">
</a>

## About this module

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
    enabled: true, // If given true, activation maintenance mode on startup your nuxt application
    path: '/maintenance' // maintenance fallback content routing
    matcher: /^\/admin/ // Path to be in maintenance mode (regex)
  },
  // ...
}
```

## Options

### enabled?: boolean

### path?: string

### matcher?: string

## LICENSE

MIT (c) HANATANI Takuma(@potato4d)
