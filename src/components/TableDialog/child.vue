
<template>
  <div>
    <div type="text">这个是子组件，{{ sendchild }}</div>
    <button @click="handleClick">点击传给父组件</button>
  </div>
</template>

<script>
export default {
  name: 'Children',
  props: {
    sendchild: String
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    handleClick() {
      console.log(123)
      this.$emit('dad', '这个是儿子给你的')
    }
  }
}
</script>

<style scoped></style>
