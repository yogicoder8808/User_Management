// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Checkbox, Box, TablePagination } from '@mui/material';
// import { Edit, Delete } from '@mui/icons-material'; // Import the Delete icon

// function EmployeeTable({ employees, onEdit, onDelete, onAddEmployee }) {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleCheckboxChange = (index) => {
//     if (selectedRows.includes(index)) {
//       setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
//     } else {
//       setSelectedRows([...selectedRows, index]);
//     }
//   };

//   const handleSelectAll = () => {
//     if (selectAll) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows([...Array(employees.length).keys()]);
//     }
//     setSelectAll(!selectAll);
//   };

//   const handleDeleteSelected = () => {
//     if (selectedRows.length > 0) {
//       const updatedEmployees = employees.filter((employee, index) => !selectedRows.includes(index));
//       setSelectedRows([]);
//       setSelectAll(false);
//       onDelete(updatedEmployees);
//     }
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div style={{ backgroundColor: '#f0f0f0', padding: '20px', marginBottom: '40px' }}>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <Typography variant="h4" style={{ fontWeight: 'bold', color: 'purple', marginBottom: '10px' }}>User Details</Typography>
//         <Box>
//           <Button variant="contained" color="success" onClick={onAddEmployee} style={{ color: 'white', marginRight: '5px' }}>Add New Employee</Button>
//           <Button variant="contained" color="error" onClick={handleDeleteSelected} disabled={selectedRows.length === 0}>Delete Selected</Button>
//         </Box>
//       </div>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <Checkbox
//                   checked={selectAll}
//                   onChange={handleSelectAll}
//                 />
//               </TableCell>
//               <HeaderTableCell>Profile Photo</HeaderTableCell>
//               <HeaderTableCell>Name</HeaderTableCell>
//               <HeaderTableCell>Email</HeaderTableCell>
//               <HeaderTableCell>Gender</HeaderTableCell>
//               <HeaderTableCell>Phone Number</HeaderTableCell>
//               <HeaderTableCell>Action</HeaderTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {(rowsPerPage > 0
//               ? employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               : employees
//             ).map((employee, index) => (
//               <TableRow key={index}>
//                 <TableCell>
//                   <Checkbox
//                     checked={selectedRows.includes(index + page * rowsPerPage)}
//                     onChange={() => handleCheckboxChange(index + page * rowsPerPage)}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <img src={employee.profilePhoto} alt="Profile" style={{ width: '50px', height: 'auto' }} />
//                 </TableCell>
//                 <TableCell>{employee.firstName} {employee.lastName}</TableCell>
//                 <TableCell>{employee.email}</TableCell>
//                 <TableCell>{employee.gender}</TableCell>
//                 <TableCell>{employee.phoneNumber}</TableCell>
//                 <TableCell align="left">
//                   <Button onClick={() => onEdit(index + page * rowsPerPage)} color="success" startIcon={<Edit />} size="small" style={{ margin: '0'}}></Button>
//                   <Button onClick={() => onDelete(index + page * rowsPerPage)} color="error" startIcon={<Delete />} size="small" style={{ margin: '0' }}></Button> {/* Replaced with Delete icon */}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
//         component="div"
//         count={employees.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </div>
//   );
// }

// // Custom Header Table Cell component
// function HeaderTableCell({ children, align }) {
//   return (
//     <TableCell align={align}>
//       <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: 'purple' }}>
//         {children}
//       </Typography>
//     </TableCell>
//   );
// }

// export default EmployeeTable;\


// EmployeeTable.js

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Checkbox, Box, TablePagination } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material'; // Import the Delete icon

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
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', marginBottom: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Typography variant="h4" style={{ fontWeight: 'bold', color: 'purple', marginBottom: '10px' }}>User Details</Typography>
        <Box>
          <Button variant="contained" color="success" onClick={onAddEmployee} style={{ color: 'white', marginRight: '5px' }}>Add New Employee</Button>
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
              <HeaderTableCell>Profile Photo</HeaderTableCell>
              <HeaderTableCell>Name</HeaderTableCell>
              <HeaderTableCell>Gender</HeaderTableCell>
              <HeaderTableCell>Email</HeaderTableCell>
              <HeaderTableCell>Phone Number</HeaderTableCell>
              <HeaderTableCell>Action</HeaderTableCell>
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
                <TableCell>
                  <img src={employee.profilePhoto} alt="Profile" style={{ width: '50px', height: 'auto' }} />
                </TableCell>
                <TableCell>{employee.firstName} {employee.lastName}</TableCell>
                <TableCell>{employee.gender}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{`${employee.countryCode} ${employee.phoneNumber}`}</TableCell> {/* Displaying country code and phone number */}
                <TableCell align="left">
                  <Button onClick={() => onEdit(index + page * rowsPerPage)} color="success" startIcon={<Edit />} size="small" style={{ margin: '0'}}></Button>
                  <Button onClick={() => onDelete(index + page * rowsPerPage)} color="error" startIcon={<Delete />} size="small" style={{ margin: '0' }}></Button>
                </TableCell>
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

// Custom Header Table Cell component
function HeaderTableCell({ children, align }) {
  return (
    <TableCell align={align}>
      <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: 'purple' }}>
        {children}
      </Typography>
    </TableCell>
  );
}

export default EmployeeTable;


