import { endPoints } from '../constants/';
import { useAxios } from './useAxios';
import { API, graphqlOperation } from "aws-amplify";
import { queries } from '../services/graphql';
import { useSelector } from './useSelector';

//------------------------------
// Type
//------------------------------
export type useAPIType = {
  fetchHello: () => Promise<any>
  fetchUser: () => Promise<void>
}

//------------------------------
// Hooks
//------------------------------
export const useAPI = (): useAPIType => {

  const apiaxios = useAxios()
  const selector = useSelector()

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

  const fetchUser = async (): Promise<void> => {
    const res = await API.graphql(graphqlOperation(queries.getUser, { userId: selector.userState().username }))
    console.log(res)
  }

  return { fetchHello, fetchUser }
}
