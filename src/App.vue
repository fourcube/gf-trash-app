<template>
  <div id="app" class="pure-g">
    <div id="header" class="pure-u-1 pure-u-md-1-1 pure-u-lg-1-1">
      <h1>GutefrageTrash<small>die wirklich doofsten Fragen</small></h1>
    </div>
    <div id="content" style="width: 100%;">
      <div class="pure-u-1-24 pure-u-lg-1-8">&nbsp;</div>
      <div class="pure-u-22-24 pure-u-lg-3-4">
        <question :model="model"></question>
      </div>
      <div class="pure-u-1-24 pure-u-lg-1-8">&nbsp;</div>
    </div>
    <div id="footer" class="pure-u-1 pure-u-md-1-1 pure-u-lg-1-1"></div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Question from './components/Question'

export default {
  components: {
    Hello,
    Question
  },
  props: ['model']
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

#app {
  flex-direction: r;
  margin: 0 auto;
  max-width: 768px;
}

#header {
  flex: 0 0 auto;
  text-align: center;
}

h1 > small {
  font-size: 60%;
  color: #c4c9d6;
  display: block;
}
</style>
