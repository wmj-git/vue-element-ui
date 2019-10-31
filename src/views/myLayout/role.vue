<template>
  <div class="app-container">
    <div class="table-operate">
      <el-input v-model="inputFilter" placeholder="输入用户名查询" />
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" size="mini" icon="el-icon-plus" @click="handleCreate">
        添加
      </el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      @select="onTableSelect"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="index"
        width="50"
      />
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        v-for="info in tableHeader"
        :key="info.key"
        :label="info.label"
      >
        <template slot-scope="scope">
          <span>{{ scope.row[info.key] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index,scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="temp">
        <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="住址" prop="address" :label-width="formLabelWidth">
          <el-select v-model="temp.address" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="年龄" prop="age" :label-width="formLabelWidth">
          <el-input v-model="temp.age" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  data() {
    return {
      tableDataBegin: [{
        name: '王小',
        address: '上海市普陀区金沙',
        age: 25
      }, {
        name: '张虎',
        address: '上海市普陀区金沙江路 1518 弄',
        age: 24
      }, {
        name: '王小虎',
        address: '上海市普陀区',
        age: 28
      }, {
        name: '王小虎',
        address: '上海市普陀区金沙江路',
        age: 30
      }],
      dialogFormVisible: false,
      tableHeader: [
        {
          label: '姓名',
          key: 'name'
        },
        {
          label: '住址',
          key: 'address'
        },
        {
          label: '年龄',
          key: 'age'
        }
      ],
      temp: {
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
      },
      statusOptions: [
        '重庆', '上海', '云南', '江苏'
      ],
      checkedRows: [],
      multipleSelection: [],
      inputFilter: ''
    }
  },
  computed: {
    tableData() {
      const inputFilter = this.inputFilter
      if (inputFilter) {
        return this.tableDataBegin.filter(data => {
          return Object.keys(data).some(key => {
            return String(data[key]).toLowerCase().indexOf(inputFilter) > -1
          })
        })
      }
      return this.tableDataBegin
    }
  },
  methods: {
    resetTemp() {
      this.temp = {}
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex
    },
    onTableSelect(rows, row) {
      const selected = rows.length && rows.indexOf(row) !== -1
      console.log(selected)
    },
    createData() {
      this.dialogFormVisible = false
      this.tableData.push({
        name: this.temp.name,
        address: this.temp.address,
        age: this.temp.age
      })
    },
    updateData() {
      this.dialogFormVisible = false
      const tempData = Object.assign({}, this.temp)
      console.log(tempData)
      for (const v of this.tableData) {
        if (v.index === this.temp.index) {
          const index = this.tableData.indexOf(v)
          console.log(index)
          this.tableData.splice(index, 1, this.temp)
        }
      }
    },
    handleDelete(index, row) {
      this.$alert('此操作将删除记录且无法恢复，确定删除？', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'warning',
            message: `action: ${action}`
          })
          this.tableData.splice(index, 1)
        }
      })
    },
    handleEdit(row) {
      this.dialogFormVisible = true
      this.dialogStatus = 'update'
      this.temp = Object.assign({}, row)
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleCreate() {
      this.resetTemp()
      this.dialogFormVisible = true
      this.dialogStatus = 'create'
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-container {
    & .table-operate {
      .el-input {
        width: 30%;
      }
    }
  }
</style>
