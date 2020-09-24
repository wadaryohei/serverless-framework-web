import { endPoints } from '../constants/';
import { useAxios } from './useAxios';

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

  const apiaxios = useAxios()

  /**
   * functionsのhelloをfetch
   */
  const fetchHello = async (): Promise<any> => {
    const axios = await apiaxios.initAxios()
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
