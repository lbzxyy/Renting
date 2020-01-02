import request from '../../utils/http';
const _request = new request;

// 获取首页推荐列表数据
export function getRecommendList(data) {
   return  _request.getRequest('/rent/search/recommendList',data)
}
