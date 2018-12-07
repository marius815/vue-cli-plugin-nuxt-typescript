<template>
  <div>
    <TheHeader />
    <main class="content"><nuxt /></main>
  </div>
</template>

<script lang="ts">
<%_ if (options.nuxtDecorators) { _%>
import { Component, Vue } from 'nuxt-property-decorator';
import TheHeader from '~/components/TheHeader/TheHeader.vue';
@Component({
  components: {
    TheHeader,
  },
})
export default class extends Vue {}
<%_ } else { _%>
import Vue from 'vue';
import TheHeader from '~/components/TheHeader/TheHeader.vue';

export default Vue.extend({
  components: {
    TheHeader,
  },
});
<%_ } _%>
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.content {
  margin: 4rem;
}
</style>
