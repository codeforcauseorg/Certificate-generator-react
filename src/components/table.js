import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein, c) {
  return { name, calories, fat, carbs, protein, c };
}

const a = ['Frozen yoghurt', 159, 6.0, 24, 4.0, 1]

const rows = [
  createData(a),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 1),
  createData('Eclair', 262, 16.0, 24, 6.0, 1),
  createData('Cupcake', 305, 3.7, 67, 4.3, 1),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1),
];

const useStyles = makeStyles({
  root: {
    margin: '40px 0px'
  },
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(csvData) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <Paper>
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{csvData[0][0]}</StyledTableCell>
              {csvData[0].map((ele, index) => (
                (index !== 0) ?
                  <StyledTableCell align="right">{ele}</StyledTableCell> : <></>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              Object.keys(csvData).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((key, index) => {
                if (index !== 0 || page !== 0) { // 0th index is usually data header
                  return <StyledTableRow key={csvData[key][0]}>
                    <StyledTableCell component="th" scope="row">
                      {csvData[key][0]}
                    </StyledTableCell>

                    {csvData[key].map((ele, index) => (
                      (index !== 0) ?
                        <StyledTableCell align="right">{ele}</StyledTableCell> : <></>
                    ))}
                  </StyledTableRow>
                }
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
