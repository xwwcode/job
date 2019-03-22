<template>
    <mt-header :title = 'titles'>
        <router-link to='' slot="left" v-show = 'listenRoute'> 
          <mt-button icon="back" @click.native="goBack">返回</mt-button>
        </router-link>
        <router-link :to="url" slot="right">
          <mt-button icon="more">
          </mt-button>
        </router-link>
    </mt-header>
</template>
<script>
  import { Header } from 'mint-ui'
  export default{
    props: ['titles', 'url'],
    data() {
      return {
        falg: false
      }
    },
    methods: {
      goBack() {
        this.$router.goBack()
      }
    },
    computed: {
      listenRoute() {
          console.log(this.$store.state.isRoute)
          if (this.$store.state.isRoute == '/' || this.$store.state.isRoute == undefined) {
            this.falg = false
          } else {
            this.falg = true
          }
        return this.falg
      }
    },
  }
</script>

<style scoped>

</style>