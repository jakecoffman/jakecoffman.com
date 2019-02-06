<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/">Intro</router-link>
      </li>
      <li>
        <router-link to="/projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/qa">Q&A</router-link>
      </li>
      <li v-if="!mini">
        <a href="https://twitter.com/nill">@nill on Twitter</a>
      </li>
      <li v-if="!mini">
        <a href="https://github.com/jakecoffman">jakecoffman on Github</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['mini']
  }
</script>
<style lang="scss" scoped>

</style>
