<template>
  <div class="container">
    <mt-button type="primary" @click="handleClick">primary</mt-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { Button, Toast } from 'mint-ui'
export default {
  name: 'Test',
  mixins: [],
  components: {
    Button,
    Toast
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    handleClick: function () {
      this.$toast('Hello world!')
    }
  },
  filters: {},
  mounted () { },
  created () { }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
