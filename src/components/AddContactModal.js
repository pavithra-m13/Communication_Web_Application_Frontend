import React, { useState, useEffect } from 'react';
import { Modal, Backdrop, Fade, Button, IconButton ,Snackbar,Alert} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddContactModal = ({ open, handleClose, userDetails }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/userlist/${userDetails.userid}`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [userDetails.userid,users]);

  const addContact = async (contactId,name) => {
    const contactName = name;

    try {
      await axios.post(`http://localhost:8080/users/${userDetails.userid}/${contactId}/addContact`, {
        contactName
      });
      
      setSnackbarMessage(` ${contactName} added successfully!`);
      setSnackbarOpen(true);
      
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const goToContact = () => {
    navigate('/contact', { state: { userDetails } });
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
              // className="absolute top-2 left-60 no-hover-effect w-4 h-4"
              className='absolute top-2 left-2'
            >
              <CloseIcon/>
            </IconButton>
            <div className='flex items-center justify-center'>
            <img src="images/chat.jfif" alt="chat" className="w-20 h-18 mr-9 center" />
            {/* <h2 className="text-xl  font-semibold mb-4 text-center">Create Group</h2> */}
            </div>
          {/* <h2 className="text-xl font-semibold mb-4">User List</h2> */}
          <ul className="space-y-3 flex-1 overflow-y-hidden overflow-x-hidden ">
            {users.map((user) => (
              user.userid !== userDetails.userid && (
                <li
                  key={user.userid}
                  className="flex justify-between items-center p-3 border rounded-lg bg-[#F5F7FA] shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <div>
                    <div className="text-lg font-medium">{user.username}</div>
                    <div className="text-sm text-gray-600">{user.phoneno}</div>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addContact(user.userid,user.username)}
                    className="transition-transform transform hover:scale-105"
                  >
                    Chat
                  </Button>
                </li>
              )
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            
           
          </div>
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

export default AddContactModal;
