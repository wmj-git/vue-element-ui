<template>
  <div class="table_box">
    <div class="btn" style="text-align: left;">
      <el-button type="primary" @click="addItem">新增</el-button>
    </div>
    <el-table :data="list" border :summary-method="getSummaries" show-summary style="width: 100%;" stripe height="260">
      <el-table-column label="序号" width="80px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.$index +1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="最喜欢吃" align="center">
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{ ['橙子','橘子','榴莲'][scope.row.fruitSort-1] }}</span>
          <el-select v-if="scope.row.isEgdit" v-model="scope.row.fruitSort" placeholder="请选择">
            <el-option v-for="(item, index) in ['橙子','橘子','榴莲']" :key="index+1" :label="item" :value="index+1" />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="firstNum" label="第一周吃的数量" align="center">
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{ scope.row.firstNum }}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.firstNum" />
        </template>
      </el-table-column>
      <el-table-column prop="secondNum" label="第二周吃的数量" align="center">
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{ scope.row.secondNum }}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.secondNum" />
        </template>
      </el-table-column>
      <el-table-column prop="thirdNum" label="第三周吃的数量" align="center">
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{ scope.row.thirdNum }}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.thirdNum" />
        </template>
      </el-table-column>
      <el-table-column prop="fourthNum" label="第四周吃的数量" align="center">
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{ scope.row.fourthNum }}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.fourthNum" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button v-if="!scope.row.isEgdit" type="primary" size="small" icon="el-icon-edit" circle @click="edit(scope.$index,scope.row)" />
          <el-button v-if="scope.row.isEgdit" type="success" size="small" icon="el-icon-check" circle @click="editSuccess(scope.$index,scope.row)" />
          <el-button type="danger" size="small" icon="el-icon-delete" circle @click.native.prevent="deleteItem(scope.$index, list)" />
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 30px;">
      <el-button type="primary" @click="goNextPage">跳转页面</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        id: 1,
        fruitSort: 1,
        firstNum: 10,
        secondNum: 3,
        thirdNum: 4,
        fourthNum: 6
      },
      {
        id: 2,
        fruitSort: 2,
        firstNum: 7,
        secondNum: 6,
        thirdNum: 8,
        fourthNum: 2
      }, {
        id: 3,
        fruitSort: 3,
        firstNum: 5,
        secondNum: 6,
        thirdNum: 8,
        fourthNum: 9
      }, {
        id: 4,
        fruitSort: 3,
        firstNum: 10,
        secondNum: 3,
        thirdNum: 4,
        fourthNum: 6
      }]
    }
  },
  methods: {
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总数量'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += '(个)'
        } else {
          sums[index] = ''
        }
      })
      return sums
    },
    addItem() {
      const item = {
        id: null,
        fruitSort: null,
        firstNum: null,
        secondNum: null,
        thirdNum: null,
        fourthNum: null,
        isEgdit: true
      }
      this.list.push(item)
    },
    deleteItem(index, list) {
      list.splice(index, 1)
    },
    edit(index, row) {
      this.$set(row, 'isEgdit', true)
    },
    editSuccess(index, row) {
      this.$set(row, 'isEgdit', false)
    },
    goNextPage() {
      this.$router.push({ name: 'echartTest' })
    }
  }
}

</script>
