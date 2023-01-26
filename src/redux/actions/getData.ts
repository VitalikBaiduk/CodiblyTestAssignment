import { DataTypes } from "../../types/types";

export type getDataType = ReturnType<typeof getData>;

export const getData = (data: DataTypes) => {
  return {
    type: "GET_DATA",
    payload: data,
  } as const;
};
