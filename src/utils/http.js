// import axios from 'axios'

// const http = (url, ...args) => {
//   return axios({
//       ...args,
//       url
//   }).then(res => {
//       // switch (res.data.code) {
//       //     case 200: toast('成功'); return res.data.data;
//       //     // case 404: // .....
//       // }
//       return res.data.data
//   }).catch(err => {
//       // ....
//   })
// }

// export default http

import axios from 'axios'

export default {
    install (Vue) {
    //    install方法，向Vue实例中添加一个$http方法
        Vue.prototype.$http = axios
        Vue.$http = axios
    },
    $http: axios
}

export const Http = axios