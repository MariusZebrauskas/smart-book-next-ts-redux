import axios from 'axios';

import { HTTP } from '../config';

export const tokenValidation = (token: string | null, email: string) => {
  axios
    .post(`${HTTP()}/api/tokenverifyclient`, { token: token, email: email })
    .then((response) => {
      if (response.data.aaccess) return;
      if (!response.data.aaccess) {
        sessionStorage.removeItem('token');
        return ;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
