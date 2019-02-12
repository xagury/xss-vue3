
import http from '../utils/http'
import config from '../config'


export const getBannerData = () => {
    return new Promise(async ( resolve ) => {
        let data = await http.get( config.homebanner)
        resolve(data)
    }) 
}
