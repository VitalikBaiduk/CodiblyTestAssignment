import { DataTypes, ItemDataType } from "../../types/types";
import { getDataType } from "../actions/getData";
import { setErrorType } from "../actions/setError";
import { setModalDataType } from "../actions/setModalData";

type initialStateType = {
  data: DataTypes;
  error: string;
  modalData: ItemDataType;
};

const initialState: initialStateType = {
  data: {} as DataTypes,
  error: "",
  modalData: {} as ItemDataType,
};

export const mainDataReducer = (
  state: initialStateType = initialState,
  action: getDataType | setErrorType | setModalDataType
) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_MODAL_DATA":
      return { ...state, modalData: action.payload };
    default:
      return state;
  }
};
