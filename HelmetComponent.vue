<script>
import { isVue2 } from 'vue-demi';

export default {
  name: 'HelmetComponent',
  mounted() {
    this.head = document.head;
    this.html = document.getElementsByTagName('html')[0];
    if (this.head && this.head.children.length === 0) {
      this.html.appendChild(this.$refs.child);
    } else {
      this.html.prepend(this.$refs.child);
      this.html.removeChild(this.head);
    }
  },
  [isVue2 ? 'beforeDestroy' : 'beforeUnmount']() {
    this.html.removeChild(document.head); // FIRST HEAD TAG
    this.html.prepend(this.head);
  },
}
</script>

<template>
  <head ref="child">
    <slot></slot>
  </head>
</template>