<template>
  <div>
    <div class="align-left">
      <div class="content-box">
        <p>
          <h3>{{title}}</h3>
        </p>
        <p class="overflow">
          {{text}}
        </p>
      </div>
      <div id="interactions" class="center pure-u-1-1 interactions">
        <a class="pure-button pure-button-primary" href="#"
          @click="voteStupid"
          :class="{'pure-button-disabled': buttonsDisabled }">Dumm!</a>
        <a class="pure-button pure-button-primary" href="#"
          @click="nextQuestion"
          :class="{'pure-button-disabled': buttonsDisabled }">Weiter!</a>
      </div>
    </div>

  <div>
</template>

<script>
import Store from '../Store'

export default {
  props: ['model'],
  computed: {
    buttonsDisabled () {
      return this.model.updatePending
    },
    title () {
      return this.model.question.title
    },
    text () {
      return this.model.question.text
    }
  },
  data () {
    return {

    }
  },
  methods: {
    nextQuestion () {
      Store.nextQuestion()
    },
    voteStupid () {
      Store.voteStupid(this.model.question)
    }
  }
}
</script>

<style lang="less">
  .align-left {
    text-align: left;
  }
  .center {
    text-align: center;
  }

  .center > .pure-button {
    line-height: 50px;
    height: 60px;
    width: 48%;
  }

  .fix-bottom {
    position: absolute;
    bottom: 5px;
    left: 0px;
  }

  .content-box {
    flex: 0 2 auto;
    position: absolute;
    overflow-y: scroll;
    //overflox-x: hidden;
    bottom: 80px;
    top: 80px;
    max-height: 80%;
  }

  .interactions {

  }

  @media only screen and (min-width: 768px) and (max-width:1024px){
    #interactions{
      .fix-bottom()
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px){
    #interactions{
      .fix-bottom()
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 479px){
    #interactions{
      .fix-bottom()
    }
  }

</style>
