import { initAxios } from '../mixin/axios';
import { endPoints } from '../constants/';

//------------------------------
// Type
//------------------------------
export type useAPIType = {
  fetchHello: () => Promise<any>
}

//------------------------------
// Hooks
//------------------------------
export const useAPI = (): useAPIType => {

  /**
   * functionsのhelloをfetch
   */
  const fetchHello = async (): Promise<any> => {
    const axios = await initAxios()
    if (endPoints.hello) {
      const res = await axios.get(endPoints.hello)
      const data = JSON.parse(res.data.body)
      return {
        data: data
      }
    }
  }

  return { fetchHello }
}
