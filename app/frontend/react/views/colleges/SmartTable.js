import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPaginate from 'react-paginate';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const headCells = [
  { id: 'id', label: 'ID', isSortable: false },
  { id: 'name', label: 'Name', isSortable: false },
  { id: 'size', label: '2018 Class Size', isSortable: false }
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, index) => (
          <TableCell
            key={`${headCell.id}-${index}`}
          >
            {headCell.label}

          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const SmartTable = props => {
  const { colleges, collegeMeta, handlePageNumberClick } = props;
  const classes = useStyles();
  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('created_at');

  const pageCount = Math.ceil(collegeMeta.total_count / collegeMeta.per);

  const handlePageClick = data => {
    let selected = data.selected;
    handlePageNumberClick(selected + 1);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table className="table table-bordered table-striped">
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
            />
            <TableBody>
              {colleges.map(college => {
                return (
                  <TableRow
                    hover
                    key={college.id}
                  >
                    <TableCell>{college.id}</TableCell>
                    <TableCell>{college['school.name']}</TableCell>
                    <TableCell>{college['2018.student.size']} Students</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <ReactPaginate
          pageLinkClassName={'btn btn-sm'}
          nextLinkClassName={'btn btn-sm btn-secondary'}
          previousLinkClassName={'btn btn-sm btn-secondary'}
          disabledClassName={'disabled'}
          activeLinkClassName={'btn-secondary'}
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination page-numbering d-grid gap-2 d-md-flex justify-content-md-end'}
          subContainerClassName={'pages pagination'}
        />
        <span className='paginationTotalCount'>Total Colleges: {collegeMeta.total_count}</span>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  }
}));

export default SmartTable;