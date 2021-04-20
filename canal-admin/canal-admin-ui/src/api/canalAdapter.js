import request from '@/utils/request'

export function getAdapterConfig(params) {
  return request({
    url: '/canalAdapter',
    method: 'get',
    params: params
  })
}

export function getTemplateAdapter() {
  return request({
    url: "/adapter/template",
    method: 'get'
  })
}

export function addCanalAdapter(data) {
  return request({
    url: '/addCanalAdapter',
    method: 'post',
    data
  })
}

export function canalAdapterDetail(id) {
  return request({
    url: 'canalAdapterDetail/' + id,
    method: 'get'
  })
}

export function deleteAdapter(id) {
  return request({
    url: 'deleteAdapter/' + id,
    method: 'get'
  })
}

export function updateCanalAdapter(data) {
  return request({
    url: 'updateCanalAdapter/',
    method: 'post',
    data
  })
}

export function adapterStatus(id, option) {
  return request({
    url: 'adapterStatus/' + id + '?option=' + option,
    method: 'put'
  })
}

export function adapterRefTables(params) {
  return request({
    url: 'adapterRefTables/',
    method: "get",
    params: params
  })
}
