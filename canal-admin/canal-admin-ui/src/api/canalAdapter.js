import request from '@/utils/request'
import id from "element-ui/src/locale/lang/id";

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
