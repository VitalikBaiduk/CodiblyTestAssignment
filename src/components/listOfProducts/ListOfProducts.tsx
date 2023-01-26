import { TextField } from "@mui/material";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { setError } from "../../redux/actions/setError";
import { fetchData } from "../../redux/asyncAction/data";
import { useTypedDispatch, useTypedSelector } from "../../redux/store";
import {
  GlobalWrapper,
  HeaderWrapper,
  StyledAlert,
  StyledCircularProgress,
} from "../../styles/styles";

import { currentItemId, currentPageAtom } from "../../url/urlHandler";
import { ModalComponent } from "./components/ModalComponent";
import { TableComponent } from "./components/TableComponent";

export const ListOfProducts = () => {
  const [id, setId] = useAtom(currentItemId);
  const [page, setPage] = useAtom(currentPageAtom);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const data = useTypedSelector((state) => state.mainDataReducer.data);
  const error = useTypedSelector((state) => state.mainDataReducer.error);
  const modalData = useTypedSelector(
    (state) => state.mainDataReducer.modalData
  );

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchData(page, id));
  }, [page, id, dispatch]);

  const handleClose = () => {
    if (error.length > 2) {
      dispatch(setError(""));
      setId("");
    }
  };

  return Object.keys(data).length > 0 ? (
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
            dispatch(setError(""));
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
          setPage={setPage}
          error={error}
          page={page}
        />
      )}
      <ModalComponent
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
        data={modalData}
      />
    </GlobalWrapper>
  ) : (
    <StyledCircularProgress color="inherit" />
  );
};
