<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        {{ pkg.name || 'nuxtts' }}
      </h1>
      <h2 class="subtitle">
        {{ pkg.description || 'Welcome to your new TypeScript powered Nuxt project!' }}
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Nuxt Documentation</a>
        |
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">Nuxt @ GitHub</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import pkg from '~~/package'
<%_ if (options.nuxtDecorators) { _%>
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {
    Logo
  },
  data() {
    return {
      pkg: pkg
    }
  }
})
export default class extends Vue {}
<%_ } else { _%>
import Vue from 'vue';

export default Vue.extend({
  components: {
    Logo
  },
  data() {
    return {
      pkg: pkg
    }
  }
})
<%_ } _%>
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
