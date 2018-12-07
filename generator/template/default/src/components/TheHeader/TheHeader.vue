<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul>
        <nuxt-link to="/" tag="li"
          ><a>Nuxt + {{ message }} = ❤️</a></nuxt-link
        >
        <li><a class="github" href="https://github.com/marius815/vue-cli-plugin-nuxt-typescript"></a></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
<%_ if (options.nuxtDecorators) { _%>
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class extends Vue {
  @Prop({ default: 'TypeScript' })
  message!: string;
}
<%_ } else { _%>
import Vue from 'vue';
export default Vue.extend({
  name: 'TheHeader',
  props: {
    message: {
      type: String,
      default: 'TypeScript',
    },
  },
});
<%_ } _%>

</script>

<style scoped>
.main-header {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #3b8070;
  height: 5rem;
  width: 100%;
}

.main-nav {
  height: 100%;
}

ul {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
}

li {
  flex: 0 0 auto;
  padding: 0 1rem;
}

.github {
  width: 32px;
  height: 32px;
  background: no-repeat center
  url('~assets/images/GitHub-Mark-Light-32px.png');
}

a {
  display: block;
  color: white;
  text-decoration: none;
}

a:hover,
a:focus,
.nuxt-link-exact-active > a {
  color: white;
}
</style>
