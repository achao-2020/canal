<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="" min-width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.datebase }}
        </template>
      </el-table-column>
      <el-table-column label="主机地址" min-width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.src }}
        </template>
      </el-table-column>
      <el-table-column label="账号" min-width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.host }}
        </template>
      </el-table-column>
      <el-table-column label="密码" min-width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.target }}
        </template>
      </el-table-column>
      <el-table-column label="库名" min-width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.updateTime }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="标识" min-width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>
      <el-table-column label="Topic" min-width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.topic }}
        </template>
      </el-table-column>
      <el-table-column label="批量提交大小" min-width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.commitBatch }}
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" plain>保存</el-button>
    <pagination v-show="count>0" :total="count" :page.sync="listQuery.page" :limit.sync="listQuery.size" @pagination="" />
  </div>
</template>

<script>
import { getCanalInstances, deleteCanalInstance, instanceStatus } from '@/api/canalInstance'
import Pagination from '@/components/Pagination'
import { getClustersAndServers } from '@/api/canalCluster'

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
      list: [
        {datebase: '源数据库',
          src: '127.0.0.1:3306',
          host: 'root',
          target: '123456',
          status: 'date_base',
          updateTime: 'canal-instance1',
          topic: "MQMessage",
          commitBatch: '3000'
        },
        {datebase: '目标数据库',
          src: '127.0.0.1:3308',
          host: 'xiaopeng',
          target: 'xiaopeng',
          status: 'xp_date_base',
          updateTime: 'canal-instance1',
          topic: "MQMessage",
          commitBatch: '3000'
        }
      ],
      listLoading: false,
      dialogFormVisible: false,
      nodeServices: [],
      count: 0,
      options: [],
      listQuery: {
        name: '',
        clusterServerId: '',
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
