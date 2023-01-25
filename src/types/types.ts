export type DataTypes = {
  data: Array<ItemDataType>;
  page: number;
  per_page: number;
  support: {
    url: string;
    text: string;
  };
  total: number;
  total_pages: number;
};

export type ItemDataType = {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
};

export type ModalComponentType = {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenModal: boolean;
  data: ItemDataType;
};

export type TableComponentType = {
  data: DataTypes;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalData: React.Dispatch<React.SetStateAction<ItemDataType>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  error: string;
};
