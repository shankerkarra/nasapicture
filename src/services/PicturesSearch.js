import { AppState } from '../AppState'
import { api } from './AxiosService'

class PicturesService {

  async getPicture(query = Date()) {
    try {
      console.log(query)
      console.log('&date=' + query)
      const res = await api.get('apod?api_key=7e9kV2zqQmZXQUnao2mE34GrN9xUIrIhKPtyEvUe&date=' + query)
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const picturesService = new PicturesService()
