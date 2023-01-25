import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledPagination, StyledTableCell } from "../../../styles/styles";
import { ItemDataType, TableComponentType } from "../../../types/types";

export const TableComponent = ({
  data,
  setIsOpenModal,
  setModalData,
  setPage,
  error,
}: TableComponentType) => {
  const urlPage = window.location.hash[6];

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
          {data &&
            data.data.map((item: ItemDataType) => (
              <TableRow
                onClick={() => {
                  setIsOpenModal(true);
                  setModalData(item);
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
        {data && error.length <= 2 && data.data.length > 1 && (
          <StyledPagination
            onChange={(event: React.ChangeEvent<unknown>, page: number) =>
              setPage(page)
            }
            page={+urlPage}
            count={data.total_pages}
          />
        )}
      </Table>
    </TableContainer>
  );
};
