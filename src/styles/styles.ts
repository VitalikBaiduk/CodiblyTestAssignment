import styled from "@emotion/styled";
import { Alert, Pagination, TableCell } from "@mui/material";

export const StyledPagination = styled(Pagination)`
  margin-top: 20px;
`;

export const StyledTableCell = styled(TableCell)`
  width: 33%;
  text-align: left;
  cursor: pointer;
`;

export const GlobalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;
  border-radius: 10px;
  padding: 20px;
  margin: 150px auto;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAlert = styled(Alert)`
  position: absolute;
  left: 0;
  top: 5px;
`;

export const ModalItem = styled.span`
  color: white;
  margin-top: 10px;
  &:first-child {
    margin: 0;
  }
`;
