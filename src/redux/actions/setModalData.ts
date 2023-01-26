import { ItemDataType } from "../../types/types";

export type setModalDataType = ReturnType<typeof setModalData>;

export const setModalData = (data: ItemDataType) => {
  return {
    type: "SET_MODAL_DATA",
    payload: data,
  } as const;
};
