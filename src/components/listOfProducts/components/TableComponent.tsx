import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { setModalData } from "../../../redux/actions/setModalData";
import { useTypedDispatch } from "../../../redux/store";
import { StyledPagination, StyledTableCell } from "../../../styles/styles";
import { ItemDataType, TableComponentType } from "../../../types/types";

export const TableComponent = ({
  data,
  setIsOpenModal,
  setPage,
  error,
  page,
}: TableComponentType) => {
  const dispatch = useTypedDispatch();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Year</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((item: ItemDataType) => (
            <TableRow
              onClick={() => {
                setIsOpenModal(true);
                dispatch(setModalData(item));
              }}
              sx={{ backgroundColor: item.color }}
              key={item.id}
            >
              <StyledTableCell>{item.id}</StyledTableCell>
              <StyledTableCell>{item.name}</StyledTableCell>
              <StyledTableCell>{item.year}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
        {error.length <= 2 && data.data.length > 1 && (
          <StyledPagination
            onChange={(event: React.ChangeEvent<unknown>, page: number) =>
              setPage(page)
            }
            page={page}
            count={data.total_pages}
          />
        )}
      </Table>
    </TableContainer>
  );
};
