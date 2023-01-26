import axios from "axios";
import { Dispatch } from "redux";
import { getData, getDataType } from "../actions/getData";
import { setError, setErrorType } from "../actions/setError";

export const fetchData = (page: number, id: string) => {
  return function (dispatch: Dispatch<getDataType | setErrorType>) {
    const url = `https://reqres.in/api/products/?page=${page}&per_page=5&id=${id}`;
    (async () => {
      try {
        let { data } = await axios.get(url);
        id
          ? dispatch(getData({ ...data, data: [data.data] }))
          : dispatch(getData(data));
      } catch (error: any) {
        dispatch(
          setError(error.message ? error.message : "Something went wrong!")
        );
      }
    })();
  };
};
