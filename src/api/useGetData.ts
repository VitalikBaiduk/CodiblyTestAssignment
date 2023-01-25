import { useEffect, useState } from "react";
import { DataTypes } from "../types/types";
import axios from "axios";

export const useGetData = (
  page: number,
  id: string,
  setError: React.Dispatch<React.SetStateAction<string>>
): DataTypes => {
  const [data, setData] = useState<DataTypes>();

  useEffect(() => {
    const url = `https://reqres.in/api/products/?page=${page}&per_page=5&id=${id}`;

    (async () => {
      try {
        let { data } = await axios.get(url);
        id ? setData({ ...data, data: [data.data] }) : setData(data);
      } catch (error: any) {
        setError(error.message ? error.message : "Something went wrong!");
      }
    })();
  }, [page, id]);

  return data as unknown as DataTypes;
};
