import { useState, Fragment } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CachedIcon from '@mui/icons-material/Cached';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

export default function InventoryTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const ThreeDotsMenu = (props) => {

    const [anchorEl, setAnchorEl] = useState(null);

    function handleMenuClick(Val1) {
      console.log(Val1);
    }

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
      setAnchorEl(null);
    }

    const {data} = props;
      return(
        <Fragment>
        <Button onClick={handleClick}>
        <MoreVertIcon/>
      </Button>
      <Menu
        id="card-actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuClick(data.Val1)}>
          Edit Product
        </MenuItem>
      </Menu>
      </Fragment>
    )
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {props.columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="!font-medium"
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {props.columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} >
                          { column.id === "Status" ?
                            <div className =
                              {value === "Ordered" ? 'bg-[#1976D214] text-[#1976D2] py-1 pl-3 pr-2 rounded-full w-fit' : 
                              value === "Active" ? 'bg-[#2E7D3214] text-[#2E7D32] py-1 pl-3 pr-2 rounded-full w-fit' :
                              value === "Cancled" ? 'bg-[#D32F2F14] text-[#D32F2F] py-1 pl-3 pr-2 rounded-full w-fit' : null}>
                              <span className='mr-2'>{value}</span>  
                              <CachedIcon/>
                            </div>
                          :
                          column.id === "Delivering_To" ? 
                          <div>
                            <span>{value}</span><br/>
                            <span className='text-[#00000040]'>{row["Delivering_Id"]}</span>
                          </div>
                          :
                          <>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                          </>
                          }
                        </TableCell>
                      );
                    })}
                    <TableCell component="th" scope="row">
                    <ThreeDotsMenu />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

