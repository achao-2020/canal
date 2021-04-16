<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" placeholder="字段名称" style="width: 200px;" class="filter-item" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" plain @click="">查询</el-button>
      &nbsp;&nbsp;
      <el-button class="filter-item" type="primary" @click="">新建字段映射</el-button>
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
      <el-table-column label="源表字段" min-width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.src }}
        </template>
      </el-table-column>
      <el-table-column label="类型" min-width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.host }}
        </template>
      </el-table-column>
      <el-table-column label="目标表字段" min-width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.target }}
        </template>
      </el-table-column>
      <el-table-column label="类型" min-width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.updateTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" min-width="150">
        <template slot-scope="scope">
          <el-dropdown trigger="click">
            <el-button type="primary" size="mini">
              保存<i class="el-icon-arrow-down el-icon--right" />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="">保存</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
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
        {src: 'name',
          host: 'varchar(128)',
          target: 'car_name',
          status: 'varchar(128)',
          updateTime: 'varchar(128)'
        },
        {src: 'type',
          host: 'varchar(16)',
          target: 'car_type',
          status: '1',
          updateTime: 'varchar(16)'
        },
        {src: 'code',
          host: 'varchar(16)',
          target: 'car_code',
          status: '1',
          updateTime: 'varchar(16)'
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
    }
  }
}
</script>
