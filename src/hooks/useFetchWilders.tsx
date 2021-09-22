/* eslint-disable no-console */
import { Dispatch, useEffect } from 'react';
import axios from 'axios';
import SERVER_URL from '../utils/getUrl';
import { Action } from '../reducer/appReducer';


const useFetchWilders = async (dispatch:Dispatch<Action>): Promise<void> => {
  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const { data } = await axios.get(`${SERVER_URL  }s`);
        dispatch({
          type: 'WILDERS_FETCH_SUCCESS',
          wilders: data.result,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchWilders();
  }, [dispatch]);

  // return fetchWilders;
};

export default useFetchWilders;
