<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="table 名称" style="width: 200px;" class="filter-item" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" plain @click="">查询</el-button>
      &nbsp;&nbsp;
      <el-button class="filter-item" type="primary" @click="addTable()">新建同步表</el-button>
      <el-button class="filter-item" type="info" @click="">刷新列表</el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="源主机名称" min-width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.srcHost }}
        </template>
      </el-table-column>
      <el-table-column label="源库表名称" min-width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.srcTable }}
        </template>
      </el-table-column>
      <el-table-column label="目标主机" min-width="150" align="center">
        <template slot-scope="scope">
            {{ scope.row.targetHost }}
        </template>
      </el-table-column>
      <el-table-column label="目标库表名称" min-width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.targetTable }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" min-width="150" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status | statusLabel }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="group" min-width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.group }}
        </template>
      </el-table-column>
      <el-table-column label="Topic" min-width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.topic }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" min-width="150">
        <template slot-scope="scope">
          <el-dropdown trigger="click">
            <el-button type="primary" size="mini">
              操作<i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="handleUpdate()">字段映射（添加/修改）</el-dropdown-item>
              <el-dropdown-item @click.native="">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="count>0" :total="count" :page.sync="listQuery.page" :limit.sync="listQuery.size" @pagination="" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { adapterRefTables } from '@/api/canalAdapter'

export default {
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        '1': 'success',
        '0': 'gray'
      }
      return statusMap[status]
    },
    statusLabel(status) {
      const statusMap = {
        '1': '启动',
        '0': '停止'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [],
      listLoading: false,
      dialogFormVisible: false,
      nodeServices: [],
      count: 0,
      options: [],
      listQuery: {
        adapterId: '',
        srcHost: '',
        srcTable: '',
        targetHost: '',
        targetTable: '',
        group: '',
        topic: '',
        page: 1,
        size: 20
      },
      currentId: null,
      rules: {
        id: [{ required: true, message: '请选择运行Server', trigger: 'change' }]
      }
    }
  },
  created() {
    console.log(this.$route.query.id)
    this.listQuery.adapterId = this.$route.query.id
    adapterRefTables(this.listQuery).then((res) => {
      this.list = res.data.items
    })
  },
  methods: {
    handleUpdate: function () {
      this.$router.push("/canalAdapter/table/config")
    },
    addTable: function () {
      this.$router.push("/canalAdapter/table/add")
    }
  }
}
</script>
