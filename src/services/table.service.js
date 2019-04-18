// import {get} from '@/bases/http.base'
import axios from 'axios'
/**
 *
 * 获取商品列表
 * @export
 * @param {number} params.page 当前显示多页 [必填]
 * @param {number} params.limit 当前显示多条 [必填]
 * @param {string} params.id 商品编号
 * @param {string} params.status 商品状态
 * @param {string} params.下单时间  yyyy-MM-dd
 * @returns Promise
 */
export function getList (params) {
  return axios.get('/mock/table/list', {params})
}
