import { Auth } from 'aws-amplify';
import axios from 'axios';

/**
 * headersにトークンをデフォルトで付ける
 */
export const initAxios = async () => {
  const session = await Auth.currentSession()
  return axios.create({
    headers: {
      Authorization: `${session.getIdToken().getJwtToken()}`
    }
  });
}
