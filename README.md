# Introduction

This package is used to custom ```<head>``` in each Vue's components and was inspired by <a style="color:lightblue;" href="https://www.npmjs.com/package/react-helmet">react-helmet</a>. Of course you can use it as a plugin or a component.

### **Usage:**
- **As a Component (Local Component)**
```vue
<script>
import VueHelmet from '@toni/vue-helmet';
export default {
  name: 'ExampleComponent',
  components: {
    VueHelmet
  }
}
</script>

<template>
  <VueHelmet>
    <title>Example Title</title>
    <meta name="description" content="Hallo, Ich bin Toni">
  </VueHelmet>

  <p>Hello World</p>
</template>
```

- **As a Plugin (Global Environment)**
```vue
/** In file main.js (version 3) */
import { VueProvider } from '@toni/vue-helmet'
import { createApp } from 'vue'

let app = createApp()
app.use(VueProvider)
app.mount("#app")

//===================================================

/** In file main.js (version 2) */
import { VueProvider } from '@toni/vue-helmet'
import Vue from 'vue'

Vue.use(VueProvider)
let app = new Vue()
app.mount("#app")
```


***Hope you like this package and i'm very happy when this package can help you.***