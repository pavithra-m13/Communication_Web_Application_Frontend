// import React, { useState, useEffect } from 'react';
// import { Modal, Backdrop, Fade, Button, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

// const CreateGroupModal = ({ open, handleClose, userDetails }) => {
//   const [users, setUsers] = useState([]);
//   const [groupname, setGroupname] = useState('');
//   const [selectedUsers, setSelectedUsers] = useState([]);


//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/users/userlist1/${userDetails.userid}`);
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, [userDetails.userid]);

//   const handleCreateGroup = async () => {
//     const groupid = uuidv4(); 
//     const participantsArray = [userDetails.userid, ...selectedUsers];
// const participantsString = participantsArray.join(","); // Generate a UUID for the group
//     const grouppayload = {
//         groupid,
//         groupname,
//         participants:participantsString,
//     };
//     try {
//    const response =   await axios.post('http://localhost:8080/groups/create', 
//         grouppayload);
//         console.log(response.data);
      
//       alert(`Group ${groupname} created successfully!`);
//       handleClose();
//     } catch (error) {
//       console.error('Error creating group:', error);
//     }
//   };

//   const handleUserSelect = (userId) => {
//     setSelectedUsers((prevSelected) =>
//       prevSelected.includes(userId) ? prevSelected.filter((id) => id !== userId) : [...prevSelected, userId]
//     );
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//       BackdropProps={{ timeout: 500 }}
//     >
//       <Fade in={open}>
//         <div className="relative bg-white p-6 rounded-lg shadow-lg mx-auto my-8 max-w-lg w-full flex flex-col">
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={handleClose}
//             aria-label="close"
//             className="absolute top-2 left-60 no-hover-effect w-4 h-4"
//           >
//             <CloseIcon />
//           </IconButton>
//           <h2 className="text-xl font-semibold mb-4">Create Group</h2>
//           <input
//             type="text"
//             placeholder="Group Name"
//             value={groupname}
//             onChange={(e) => setGroupname(e.target.value)}
//             className="mb-4 p-2 border rounded"
//           />
//           <h3 className="text-lg font-medium mb-2">Select Members</h3>
//           <ul className="space-y-3 flex-1 overflow-y-hidden overflow-x-hidden">
//             {users.map((user) => (
//               user.userid !== userDetails.userid && (
//                 <li
//                   key={user.userid}
//                   className={`flex justify-between items-center p-3 border rounded-lg bg-[#F5F7FA] shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg ${
//                     selectedUsers.includes(user.userid) ? 'bg-blue-100' : ''
//                   }`}
//                 >
//                   <div>
//                     <div className="text-lg font-medium">{user.username}</div>
//                     <div className="text-sm text-gray-600">{user.phoneno}</div>
//                   </div>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => handleUserSelect(user.userid)}
//                     className="transition-transform transform hover:scale-105"
//                   >
//                     {selectedUsers.includes(user.userid) ? 'Remove' : 'Add'}
//                   </Button>
//                 </li>
//               )
//             ))}
//           </ul>
//           <Button variant="contained" color="primary" onClick={handleCreateGroup} className="mt-4">
//             Create Group
//           </Button>
//         </div>
//       </Fade>
//     </Modal>
//   );
// };

// export default CreateGroupModal;
// import React, { useState, useEffect } from 'react';
// import { Modal, Backdrop, Fade, Button, IconButton, Checkbox, FormControlLabel, TextField } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

// const CreateGroupModal = ({ open, handleClose, userDetails }) => {
//   const [users, setUsers] = useState([]);
//   const [groupname, setGroupname] = useState('');
//   const [selectedUsers, setSelectedUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/users/userlist1/${userDetails.userid}`);
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, [userDetails.userid]);

//   const handleCreateGroup = async () => {
//     const groupid = uuidv4();
//     const participantsArray = [userDetails.userid, ...selectedUsers];
//     const participantsString = participantsArray.join(",");

//     const grouppayload = {
//       groupid,
//       groupname,
//       participants: participantsString,
//     };

//     try {
//       const response = await axios.post('http://localhost:8080/groups/create', grouppayload);
//       console.log(response.data);

//       alert(`Group ${groupname} created successfully!`);
//       handleClose();
//     } catch (error) {
//       console.error('Error creating group:', error);
//     }
//   };

//   const handleUserSelect = (userId) => {
//     setSelectedUsers((prevSelected) =>
//       prevSelected.includes(userId) ? prevSelected.filter((id) => id !== userId) : [...prevSelected, userId]
//     );
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//       BackdropProps={{ timeout: 500 }}
//     >
//       <Fade in={open}>
//         <div className="relative bg-white p-6 rounded-lg shadow-lg mx-auto my-8 max-w-lg w-full flex flex-col">
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={handleClose}
//             aria-label="close"
//             className="absolute top-2 left-60 no-hover-effect w-4 h-4"
//           >
//             <CloseIcon />
//           </IconButton>
//           <h2 className="text-xl font-semibold mb-4">Create Group</h2>
//           <TextField
//             label="Group Name"
//             value={groupname}
//             onChange={(e) => setGroupname(e.target.value)}
//             variant="outlined"
//             fullWidth
//             margin="normal"
//           />
//           <h3 className="text-lg font-medium mb-2">Select Members</h3>
//           <ul className="space-y-3 flex-1 overflow-y-auto">
//             {users.map((user) => (
//               user.userid !== userDetails.userid && (
//                 <li
//                   key={user.userid}
//                   className={`flex justify-between items-center p-3 border rounded-lg bg-[#F5F7FA] shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg`}
//                 >
//                   <div>
//                     <div className="text-lg font-medium">{user.username}</div>
//                     <div className="text-sm text-gray-600">{user.phoneno}</div>
//                   </div>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={selectedUsers.includes(user.userid)}
//                         onChange={() => handleUserSelect(user.userid)}
//                         color="primary"
//                       />
//                     }
//                     label=""
//                   />
//                 </li>
//               )
//             ))}
//           </ul>
//           <Button variant="contained" color="primary" onClick={handleCreateGroup} className="mt-4">
//             Create Group
//           </Button>
//         </div>
//       </Fade>
//     </Modal>
//   );
// };

// export default CreateGroupModal;

import React, { useState, useEffect } from 'react';
import {
  Modal, Backdrop, Fade, Button, IconButton, Checkbox, FormControlLabel, TextField, Snackbar, Alert
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const CreateGroupModal = ({ open, handleClose, userDetails }) => {
  const [users, setUsers] = useState([]);
  const [groupname, setGroupname] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/userlist1/${userDetails.userid}`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [userDetails.userid,users]);

  const handleCreateGroup = async () => {
    const groupid = uuidv4();
    const participantsArray = [userDetails.userid, ...selectedUsers];
    const participantsString = participantsArray.join(",");

    const grouppayload = {
      groupid,
      groupname,
      participants: participantsString,
    };

    try {
      const response = await axios.post('http://localhost:8080/groups/create', grouppayload);
      console.log(response.data);

      setSnackbarMessage(`Group ${groupname} created successfully!`);
      setSnackbarOpen(true);
      handleClose();
    } catch (error) {
      console.error('Error creating group:', error);
    }
  };

  const handleUserSelect = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId) ? prevSelected.filter((id) => id !== userId) : [...prevSelected, userId]
    );
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className="relative bg-white p-6 rounded-lg shadow-lg mx-auto my-8 max-w-lg w-full flex flex-col">
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"

              className="absolute top-2 left-1"
            >
              <CloseIcon />
              <br></br>
              <br></br>
            </IconButton>
            <div className='flex items-center justify-center'>
            <img src="images/groups.png" alt="group" className="w-20 h-18 mr-9 center" />
            {/* <h2 className="text-xl  font-semibold mb-4 text-center">Create Group</h2> */}
            </div>
            <TextField
              label="Group Name"
              value={groupname}
              onChange={(e) => setGroupname(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ marginBottom: '16px' }}
            />
            <h3 className="text-lg font-medium mb-2 text-blue-600">Select Members</h3>
            <ul className="space-y-3 flex-1">
              {users.map((user) => (
                user.userid !== userDetails.userid && (
                  <li
                    key={user.userid}
                    className={`flex justify-between items-center p-3 border rounded-lg bg-[#F5F7FA] shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg ${selectedUsers.includes(user.userid) ? 'bg-blue-100' : ''}`}
                  >
                    <div>
                      <div className="text-lg font-medium text-blue-600">{user.username}</div>
                      <div className="text-sm text-gray-600">{user.phoneno}</div>
                    </div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedUsers.includes(user.userid)}
                          onChange={() => handleUserSelect(user.userid)}
                          color="primary"
                        />
                      }
                      label=""
                    />
                  </li>
                )
              ))}
            </ul>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateGroup}
              className="mt-4"
              sx={{ marginTop: '16px', alignSelf: 'center', backgroundColor: '#4A90E2', '&:hover': { backgroundColor: '#303f9f' } }}
            >
              Create
            </Button>
          </div>
        </Fade>
      </Modal>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CreateGroupModal;
