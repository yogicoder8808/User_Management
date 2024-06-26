

// import React, { useState, useEffect } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, Select, MenuItem, InputLabel, FormControl, Snackbar, Paper } from '@mui/material';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import PersonIcon from '@mui/icons-material/Person';


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
//     const requiredFields = ['firstName', 'lastName', 'email', 'gender'];
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
//         <Paper variant="elevation" elevation={3} style={{ padding: '20px', backgroundColor: '#ecf0f3' }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} style={{ textAlign: 'center' }}>
//               <label htmlFor="profile-photo-upload">
//                 <AddAPhotoIcon color="primary" style={{ fontSize: 60 }} />
//                 <input accept="image/*" style={{ display: 'none' }} id="profile-photo-upload" type="file" onChange={handleFileChange} />
//               </label>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="First Name" name="firstName" value={formData.firstName || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" InputProps={{ startAdornment: <PersonIcon /> }} />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Last Name" name="lastName" value={formData.lastName || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" InputProps={{ startAdornment: <PersonIcon /> }} />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label="Email" name="email" value={formData.email || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" InputProps={{ startAdornment: <EmailIcon /> }} />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth required variant="filled" color="primary">
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
//             <Grid item xs={4}>
//               <FormControl fullWidth variant="filled" color="primary">
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
//                   <MenuItem value="+86">+86 (China)</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={8}>
//               <TextField label="Phone Number" name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleChange} fullWidth variant="outlined" color="primary" InputProps={{ startAdornment: <PhoneIcon /> }} />
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
// import React, { useState, useEffect } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, Select, MenuItem, InputLabel, FormControl, Snackbar, Paper } from '@mui/material';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import PersonIcon from '@mui/icons-material/Person';
// import GlobeIcon from '@mui/icons-material/Public'; // Import GlobeIcon

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
//     const requiredFields = ['firstName', 'lastName', 'email', 'gender'];
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
//         <Paper variant="elevation" elevation={3} style={{ padding: '20px', backgroundColor: '#ecf0f3' }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} style={{ textAlign: 'center' }}>
//               <label htmlFor="profile-photo-upload">
//                 <AddAPhotoIcon color="primary" style={{ fontSize: 60 }} />
//                 <input accept="image/*" style={{ display: 'none' }} id="profile-photo-upload" type="file" onChange={handleFileChange} />
//               </label>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label={<><PersonIcon /> First Name</>} name="firstName" value={formData.firstName || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label={<><PersonIcon /> Last Name</>} name="lastName" value={formData.lastName || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField label={<><EmailIcon /> Email</>} name="email" value={formData.email || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth required variant="filled" color="primary">
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
//             <Grid item xs={4}>
//               <FormControl fullWidth variant="filled" color="primary">
//                 <InputLabel id="country-code-label">Country Code</InputLabel>
//                 <Select
//                   labelId="country-code-label"
//                   id="countryCode"
//                   name="countryCode"
//                   value={formData.countryCode || ''}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="+91"><GlobeIcon /> +91 (India)</MenuItem>
//                   <MenuItem value="+1"><GlobeIcon /> +1 (USA)</MenuItem>
//                   <MenuItem value="+44"><GlobeIcon /> +44 (UK)</MenuItem>
//                   <MenuItem value="+61"><GlobeIcon /> +61 (Australia)</MenuItem>
//                   <MenuItem value="+86"><GlobeIcon /> +86 (China)</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={8}>
//               <TextField label={<><PhoneIcon /> Phone Number</>} name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleChange} fullWidth variant="outlined" color="primary" />
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


import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, Select, MenuItem, InputLabel, FormControl, Snackbar, Paper } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import GlobeIcon from '@mui/icons-material/Public'; // Import GlobeIcon
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

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
    const requiredFields = ['firstName', 'lastName', 'email', 'gender'];
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
        <Paper variant="elevation" elevation={3} style={{ padding: '20px', backgroundColor: '#ecf0f3' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <label htmlFor="profile-photo-upload">
                <AddAPhotoIcon color="primary" style={{ fontSize: 60 }} />
                <input accept="image/*" style={{ display: 'none' }} id="profile-photo-upload" type="file" onChange={handleFileChange} />
              </label>
            </Grid>
            <Grid item xs={12}>
              <TextField label={<><PersonIcon /> First Name</>} name="firstName" value={formData.firstName || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
            </Grid>
            <Grid item xs={12}>
              <TextField label={<><PersonIcon /> Last Name</>} name="lastName" value={formData.lastName || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
            </Grid>
            <Grid item xs={12}>
              <TextField label={<><EmailIcon /> Email</>} name="email" value={formData.email || ''} onChange={handleChange} fullWidth required variant="outlined" color="primary" />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required variant="filled" color="primary">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  name="gender"
                  value={formData.gender || ''}
                  onChange={handleChange}
                >
                  <MenuItem value="Male"><MaleIcon /> Male</MenuItem>
                  <MenuItem value="Female"><FemaleIcon /> Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth variant="filled" color="primary">
                <InputLabel id="country-code-label">Country Code</InputLabel>
                <Select
                  labelId="country-code-label"
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode || ''}
                  onChange={handleChange}
                >
                  <MenuItem value="+91"><GlobeIcon /> +91 (India)</MenuItem>
                  <MenuItem value="+1"><GlobeIcon /> +1 (USA)</MenuItem>
                  <MenuItem value="+44"><GlobeIcon /> +44 (UK)</MenuItem>
                  <MenuItem value="+61"><GlobeIcon /> +61 (Australia)</MenuItem>
                  <MenuItem value="+86"><GlobeIcon /> +86 (China)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <TextField label={<><PhoneIcon /> Phone Number</>} name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleChange} fullWidth variant="outlined" color="primary" />
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
