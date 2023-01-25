import { useEffect, useState } from "react";

export const useGetData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const url = "https://reqres.in/api/products";

    (async () => {
      try {
        let responseData = await fetch(url).then((res) => res);

        responseData.json().then((data) => setData(data));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return data;
};
