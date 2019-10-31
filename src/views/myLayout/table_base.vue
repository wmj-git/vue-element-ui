
<template>
  <div>
    <input v-model="str" type="text">
    <children sendchild="父亲给儿子的" @dad="receiveChild" />
  </div>
</template>

<script>
import Children from '@/components/TableDialog/child'
export default {
  name: 'ParentPage',
  components: {
    Children
  },
  data() {
    return {
      str: ''
    }
  },
  methods: {
    receiveChild(e) {
      this.str = e
    }
  }
}
</script>

<style></style>
