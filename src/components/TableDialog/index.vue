<template>
  <div class="tableDialog" />
</template>
<script>
export default {
  name: 'TableDialog',
  data() {
    return {
      dialogFormVisible: false,
      dataForm: {
        name: '',
        address: '',
        age: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogStatus: '',
      formLabelWidth: '120px',
      textMap: {
        update: '修改',
        create: '添加'
      }
    }
  },
  methods: {/* parentHandleclick(row) {
      this.dialogFormVisible = !this.dialogFormVisible
    },*/
  }
}
</script>
