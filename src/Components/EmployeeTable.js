import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Checkbox, Box, TablePagination, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { styled } from '@mui/system';

// Styled TableCell for table head
const StyledHeaderTableCell = styled(TableCell)({
  fontWeight: 'bold',
  color: '#3f51b5', // Adjust color for table header
  padding: '16px', // Adjust padding for table head cells
});

// Styled TableCell for table body
const StyledBodyTableCell = styled(TableCell)({
  padding: '16px', // Adjust padding for table body cells
});

// Styled IconButton for action buttons
const StyledIconButton = styled(IconButton)({
  margin: '0', // Reduce spacing between edit/delete icons
});

function EmployeeTable({ employees, onEdit, onDelete, onAddEmployee }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleCheckboxChange = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...Array(employees.length).keys()]);
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelected = () => {
    if (selectedRows.length > 0) {
      const updatedEmployees = employees.filter((employee, index) => !selectedRows.includes(index));
      setSelectedRows([]);
      setSelectAll(false);
      onDelete(updatedEmployees);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', marginBottom: '40px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Typography variant="h4" style={{ fontWeight: 'bold', color: '#3f51b5', marginBottom: '10px', fontFamily: 'inherit' }}>User Details</Typography>
        <Box>
          <Button variant="contained" color="primary" onClick={onAddEmployee} style={{ color: 'white', marginRight: '5px' }}>Add New Employee</Button>
          <Button variant="contained" color="error" onClick={handleDeleteSelected} disabled={selectedRows.length === 0}>Delete Selected</Button>
        </Box>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <StyledHeaderTableCell>Profile Photo</StyledHeaderTableCell>
              <StyledHeaderTableCell>Name</StyledHeaderTableCell>
              <StyledHeaderTableCell>Email</StyledHeaderTableCell>
              <StyledHeaderTableCell style={{ paddingLeft: '12px', paddingRight: '16px' }}>Gender</StyledHeaderTableCell> {/* Adjusted padding for gender header cell */}
              <StyledHeaderTableCell>Phone Number</StyledHeaderTableCell>
              <StyledHeaderTableCell>Action</StyledHeaderTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : employees
            ).map((employee, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(index + page * rowsPerPage)}
                    onChange={() => handleCheckboxChange(index + page * rowsPerPage)}
                  />
                </TableCell>
                <StyledBodyTableCell>
                  <img src={employee.profilePhoto} alt="Profile" style={{ width: '50px', height: 'auto' }} />
                </StyledBodyTableCell>
                <StyledBodyTableCell>{employee.firstName} {employee.lastName}</StyledBodyTableCell>
                <StyledBodyTableCell>{employee.email}</StyledBodyTableCell>
                <StyledBodyTableCell>{employee.gender}</StyledBodyTableCell>
                <StyledBodyTableCell>{`${employee.countryCode} ${employee.phoneNumber}`}</StyledBodyTableCell> {/* Displaying country code and phone number */}
                <StyledBodyTableCell>
                  <StyledIconButton onClick={() => onEdit(index + page * rowsPerPage)} color="success" size="small">
                    <Edit />
                  </StyledIconButton>
                  <StyledIconButton onClick={() => onDelete(index + page * rowsPerPage)} color="error" size="small">
                    <Delete />
                  </StyledIconButton>
                </StyledBodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        component="div"
        count={employees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default EmployeeTable;

