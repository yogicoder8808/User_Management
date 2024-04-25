// import React, { useState, useEffect } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, IconButton, Select, MenuItem, InputLabel, FormControl, Snackbar, Paper } from '@mui/material';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';

// function EmployeeFormDialog({ open, onClose, onSave, employee }) {
//   const [formData, setFormData] = useState({});
//   const [profilePhoto, setProfilePhoto] = useState('');
//   const [notificationOpen, setNotificationOpen] = useState(false);

//   useEffect(() => {
//     if (employee) {
//       setFormData(employee);
//     } else {
//       setFormData({});
//     }
//   }, [employee]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePhoto(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSave = () => {
//     const requiredFields = ['firstName', 'lastName', 'email', 'gender', 'countryCode', 'phoneNumber'];
//     const missingFields = requiredFields.filter(field => !formData[field]);
//     if (missingFields.length > 0) {
//       setNotificationOpen(true);
//     } else {
//       onSave({ ...formData, profilePhoto: profilePhoto || employee?.profilePhoto });
//       setFormData({}); // Reset form data after saving
//       setProfilePhoto(''); // Reset profile photo
//       onClose(); // Close the dialog
//     }
//   };

//   const handleCloseNotification = () => {
//     setNotificationOpen(false);
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>{employee ? 'Edit Employee' : 'Add New Employee'}</DialogTitle>
//       <DialogContent>
//         <Paper variant="outlined" style={{ padding: '20px' }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField label="First Name" name="firstName" value={formData.firstName || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField label="Last Name" name="lastName" value={formData.lastName || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Email" name="email" value={formData.email || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth required variant="outlined" color="primary">
//                 <InputLabel id="gender-label">Gender</InputLabel>
//                 <Select
//                   labelId="gender-label"
//                   id="gender"
//                   name="gender"
//                   value={formData.gender || ''}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="Male">Male</MenuItem>
//                   <MenuItem value="Female">Female</MenuItem>
//                   <MenuItem value="Other">Other</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={6}>
//               <FormControl fullWidth required variant="outlined" color="primary">
//                 <InputLabel id="country-code-label">Country Code</InputLabel>
//                 <Select
//                   labelId="country-code-label"
//                   id="countryCode"
//                   name="countryCode"
//                   value={formData.countryCode || ''}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="+91">+91 (India)</MenuItem>
//                   <MenuItem value="+1">+1 (USA)</MenuItem>
//                   <MenuItem value="+44">+44 (UK)</MenuItem>
//                   <MenuItem value="+61">+61 (Australia)</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
//             </Grid>
//             <Grid item xs={12}>
//               <input accept="image/*" style={{ display: 'none' }} id="profile-photo-upload" type="file" onChange={handleFileChange} />
//               <label htmlFor="profile-photo-upload">
//                 <IconButton color="primary" aria-label="upload picture" component="span">
//                   <PhotoCamera />
//                 </IconButton>
//                 Upload Profile Photo
//               </label>
//             </Grid>
//           </Grid>
//         </Paper>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button onClick={handleSave} color="primary">{employee ? 'Save' : 'Add'}</Button>
//       </DialogActions>
//       <Snackbar
//         open={notificationOpen}
//         autoHideDuration={6000}
//         onClose={handleCloseNotification}
//         message="Please fill in all required fields before saving."
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       />
//     </Dialog>
//   );
// }

// export default EmployeeFormDialog;


// EmployeeFormDialog.js

import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, IconButton, Select, MenuItem, InputLabel, FormControl, Snackbar, Paper } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function EmployeeFormDialog({ open, onClose, onSave, employee }) {
  const [formData, setFormData] = useState({});
  const [profilePhoto, setProfilePhoto] = useState('');
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    } else {
      setFormData({});
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'gender']; // Removed 'countryCode' and 'phoneNumber' from required fields
    const missingFields = requiredFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      setNotificationOpen(true);
    } else {
      onSave({ ...formData, profilePhoto: profilePhoto || employee?.profilePhoto });
      setFormData({}); // Reset form data after saving
      setProfilePhoto(''); // Reset profile photo
      onClose(); // Close the dialog
    }
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{employee ? 'Edit Employee' : 'Add New Employee'}</DialogTitle>
      <DialogContent>
        <Paper variant="outlined" style={{ padding: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="First Name" name="firstName" value={formData.firstName || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Last Name" name="lastName" value={formData.lastName || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email" name="email" value={formData.email || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required variant="outlined" color="primary">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  name="gender"
                  value={formData.gender || ''}
                  onChange={handleChange}
                >
                  <MenuItem value="M">Male</MenuItem>
                  <MenuItem value="F">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined" color="primary"> {/* Removed 'required' from here */}
                <InputLabel id="country-code-label">Country Code</InputLabel>
                <Select
                  labelId="country-code-label"
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode || ''}
                  onChange={handleChange}
                >
                  <MenuItem value="+91">+91 (India)</MenuItem>
                  <MenuItem value="+1">+1 (USA)</MenuItem>
                  <MenuItem value="+44">+44 (UK)</MenuItem>
                  <MenuItem value="+61">+61 (Australia)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleChange} fullWidth variant="outlined" color="primary" />
            </Grid>
            <Grid item xs={12}>
              <input accept="image/*" style={{ display: 'none' }} id="profile-photo-upload" type="file" onChange={handleFileChange} />
              <label htmlFor="profile-photo-upload">
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
                Upload Profile Photo
              </label>
            </Grid>
          </Grid>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">{employee ? 'Save' : 'Add'}</Button>
      </DialogActions>
      <Snackbar
        open={notificationOpen}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        message="Please fill in all required fields before saving."
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    </Dialog>
  );
}

export default EmployeeFormDialog;

