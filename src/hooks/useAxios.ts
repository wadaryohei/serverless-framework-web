import { Auth } from 'aws-amplify';
import axios, { AxiosInstance } from 'axios';

//------------------------------
// Type
//------------------------------
export type useAxiosType = {
  initAxios: () => AxiosInstance
}

//------------------------------
// Hooks
//------------------------------
export const useAxios = () => {

  /**
   * headersにトークンをデフォルトで付ける
   */
  const initAxios = async (): Promise<AxiosInstance> => {
    const session = await Auth.currentSession()
    return axios.create({
      headers: {
        Authorization: `${session.getIdToken().getJwtToken()}`
      }
    });
  }

  return {
    initAxios
  }
}