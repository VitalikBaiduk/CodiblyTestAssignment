import { TextField } from "@mui/material";
import { useState } from "react";
import { useGetData } from "../../api/useGetData";
import { GlobalWrapper, HeaderWrapper, StyledAlert } from "../../styles/styles";
import { ItemDataType } from "../../types/types";
import { ModalComponent } from "./components/ModalComponent";
import { TableComponent } from "./components/TableComponent";

import { atomWithHash } from "jotai/utils";
import { useAtom } from "jotai";

export const currentPageAtom = atomWithHash("page", 0);
export const currentItemId = atomWithHash("id", "");

export const ListOfProducts = () => {
  const [id, setId] = useAtom(currentItemId);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [error, setError] = useState("");
  const [modalData, setModalData] = useState<ItemDataType>({} as ItemDataType);
  const [page, setPage] = useAtom(currentPageAtom);
  const data = useGetData(page, id, setError);

  const handleClose = () => {
    if (error.length > 2) {
      setError("");
      setId("");
    }
  };

  return (
    <GlobalWrapper onClick={handleClose}>
      <HeaderWrapper>
        {error.length > 0 && (
          <StyledAlert variant="filled" severity="error">
            {error}
          </StyledAlert>
        )}
        <TextField
          variant="standard"
          value={id}
          onChange={(event) => {
            setId(event.currentTarget.value.replace(/[^\d.]/g, ""));
            setError("");
          }}
          helperText={"Only numbers"}
          type={"text"}
          error={error.length > 0}
        />
      </HeaderWrapper>

      {error.length <= 2 && (
        <TableComponent
          data={data}
          setIsOpenModal={setIsOpenModal}
          setModalData={setModalData}
          setPage={setPage}
          error={error}
        />
      )}
      <ModalComponent
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
        data={modalData}
      />
    </GlobalWrapper>
  );
};
