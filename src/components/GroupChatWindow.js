

// import React, { useState, useEffect, useRef } from 'react';
// import InputEmoji from 'react-input-emoji';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Typography, Menu, MenuItem, IconButton, Modal, Box, TextField, Button, List, ListItem, ListItemAvatar, ListItemText, Avatar, Checkbox, Divider } from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CloseIcon from '@mui/icons-material/Close';

// const GroupChatWindow = ({ connid, conname, userid, username, onUpdateUnreadMessages }) => {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState('');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [members, setMembers] = useState([]);
//   const [memberDetails, setMemberDetails] = useState([]);
//   const [userList, setUserList] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [openViewMembers, setOpenViewMembers] = useState(false);
//   const [openAddMember, setOpenAddMember] = useState(false);

//   const wsMap = useRef(new Map());

//   useEffect(() => {
//     // Fetch initial messages
//     axios.get(`http://localhost:8080/groups/messages/${connid}`)
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setMessages(response.data);
//         } else {
//           console.error("Fetched data is not an array:", response.data);
//         }
//       })
//       .catch(error => console.error('Error fetching messages:', error));

//     // Set up WebSocket connection for the current group
//     const wsUrl = `ws://localhost:8080/ws/group?senderId=${encodeURIComponent(userid)}&groupId=${encodeURIComponent(connid)}`;
//     const newWs = new WebSocket(wsUrl);

//     newWs.onmessage = function (e) {
//       const messageData = JSON.parse(e.data);
//       console.log(messageData);
//       if (connid === messageData.groupid) {
//         setMessages((prevMessages) => [...prevMessages, messageData]);
//         // setNotification(messageData);
//       } else if(messageData.groupid!==connid){
//         console.log("notifci");
//         setNotification(messageData);
//       }
//     };

//     wsMap.current.set(connid, newWs);

//     return () => {
//       // Cleanup WebSocket connection when component unmounts
//       if (newWs) {
//         newWs.close();
//       }
//      wsMap.current.delete(connid);
//     };
//   }, [connid,userid]);

//   const handleClose = () => {
//     setOpenViewMembers(false);
//     setOpenAddMember(false);
//   };

//   const sendMessage = () => {
//     const ws = wsMap.current.get(connid);
//     if (!ws || !text.trim()) return;

//     const messageObject = {
//       groupid: connid,
//       sender: userid,
//       sendername: username,
//       groupmessage: text,
//       timestamp: new Date().toISOString(),
//       image:null,
//     };

//     ws.send(JSON.stringify(messageObject));
//     setMessages((prevMessages) => [...prevMessages, messageObject]);
//     setText('');
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       sendMessage();
//     }
//   };

//   const setNotification = async (messageData) => {
//     const response = await axios.get(`http://localhost:8080/groups/name/${messageData.groupid}`);
//     const y=response.data;
//     toast.info(`${y}:${messageData.sendername} ${decodeURIComponent(messageData.groupmessage)}`);
//     onUpdateUnreadMessages(messageData.groupid, messageData.groupmessage);
//   };

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
//   };

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleViewMembers = () => {
//     axios.get(`http://localhost:8080/groups/${connid}/members`)
//       .then(response => {
//         const memberIds = response.data;
//         setMembers(memberIds);
//         fetchMemberDetails(memberIds);
//         setOpenViewMembers(true);
//       })
//       .catch(error => console.error('Error fetching members:', error));
//     handleMenuClose();
//   };

//   const fetchMemberDetails = (memberIds) => {
//     Promise.all(memberIds.map(id => axios.get(`http://localhost:8080/users/name/${id}`)))
//       .then(responses => {
//         const details = responses.map(res => res.data);
//         setMemberDetails(details);
//       })
//       .catch(error => console.error('Error fetching member details:', error));
//   };

//   const handleAddMember = () => {
//     // Fetch all users and current group members
//     axios.all([
//       axios.get('http://localhost:8080/users'), // Get all users
//       axios.get(`http://localhost:8080/groups/${connid}/members`) // Get group member IDs
//     ])
//     .then(axios.spread((allUsersRes, groupMembersRes) => {
//       const allUsers = allUsersRes.data; // Array of all user objects
//       const groupMemberIds = groupMembersRes.data; // Array of group member IDs

//       // Fetch detailed information for group members if needed
//       const fetchMemberDetails = groupMemberIds.map(id => axios.get(`http://localhost:8080/users/name/${id}`));

//       axios.all(fetchMemberDetails)
//         .then(memberDetailsRes => {
//           const groupMembersDetails = memberDetailsRes.map(res => res.data); // Detailed info of group members

//           // Filter out users who are already in the group
//           const nonMembers = allUsers.filter(user => !groupMembersDetails.some(member => member.userid === user.userid));

//           // Update user list with non-members
//           setUserList(nonMembers);
//           setOpenAddMember(true); // Open Add Member modal
//         })
//         .catch(error => console.error('Error fetching member details:', error));
//     }))
//     .catch(error => console.error('Error fetching users or group members:', error));

//     handleMenuClose();
//   };

//   const handleUserSelect = (id) => {
//     setSelectedUsers(prevSelected =>
//       prevSelected.includes(id) ? prevSelected.filter(user => user !== id) : [...prevSelected, id]
//     );
//   };

//   const handleAddMemberSubmit = () => {
//     const participantsString = selectedUsers.join(",");
//     axios.post(`http://localhost:8080/groups/${connid}/addMember`, { memberIds: participantsString })
//       .then(response => {
//         const newMembers = [...members, ...selectedUsers];
//         setMembers(newMembers);
//         fetchMemberDetails(newMembers);
//         setSelectedUsers([]);
//         setOpenAddMember(false);
//         toast.success('Members added successfully');
//       })
//       .catch(error => {
//         console.error('Error adding members:', error);
//         toast.error('Failed to add members');
//       });
//   };

//   const modalStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     boxShadow: 24,
//     p: 4,
//   };

//   return (
//     <div className="flex flex-col h-full bg-white shadow-md rounded-lg">
//       <div className="contact-header bg-[#4A90E2] text-white p-4 rounded-t-lg flex justify-between items-center">
//         <h2 className="text-lg">{conname}</h2>
//         <IconButton onClick={handleMenuClick} style={{ color: 'white' }}>
//           <MoreVertIcon />
//         </IconButton>
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//           <MenuItem onClick={handleViewMembers}>View Team Members</MenuItem>
//           <MenuItem onClick={handleAddMember}>Add Member</MenuItem>
//         </Menu>
//       </div>
//       <div id="messages" className="flex-1 p-4 overflow-y-auto bg-white">
//         {messages.map((msg, index) => (
//           <div key={index} className={`flex ${msg.sender === userid ? 'justify-end' : ''}`}>
//             <div>
//               <div className="w-7 h-7 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-lg font-bold">
//                 {msg.sendername.charAt(0).toUpperCase()}
//               </div>
//             </div>
//             <div className={`message rounded-lg p-2 my-2 ${msg.sender === userid ? 'bg-[#E6F7FF] text-[#333333] text-right' : 'bg-[#f6f6f6] text-[#333333] mr-auto text-left'}`}>
//               <div className="message-content">
//                 {msg.groupmessage}
//               </div>
//               <div className="message-timestamp text-gray-500 text-xs mt-1">
//                 {formatTimestamp(msg.timestamp)}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="input-container p-4 bg-white rounded-b-lg">
//         <InputEmoji value={text} onChange={setText} cleanOnEnter onEnter={sendMessage} placeholder="Type a message" />
//       </div>
//       <ToastContainer />

//       <Modal open={openViewMembers} onClose={handleClose}>
//         <Box sx={modalStyle}>
//           <Typography variant="h6" component="h2">
//             Team Members
//           </Typography>
//           <List>
//             {memberDetails.map((member, index) => (
//               <React.Fragment key={member.userid}>
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>{member.username.charAt(0)}</Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary={member.username} />
//                 </ListItem>
//                 {index < memberDetails.length - 1 && <Divider />}
//               </React.Fragment>
//             ))}
//           </List>
//           <IconButton onClick={handleClose} style={{ position: 'absolute', top: 8, right: 8 }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Modal>

//       <Modal open={openAddMember} onClose={handleClose}>
//         <Box sx={modalStyle}>
//           <Typography variant="h6" component="h2">
//             Add Team Members
//           </Typography>
//           <List>
//             {userList.map((user, index) => (
//               <React.Fragment key={user.userid}>
//                 <ListItem button onClick={() => handleUserSelect(user.userid)}>
//                   <ListItemAvatar>
//                     <Avatar>{user.username.charAt(0)}</Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary={user.username} />
//                   <Checkbox edge="end" checked={selectedUsers.includes(user.userid)} tabIndex={-1} disableRipple />
//                 </ListItem>
//                 {index < userList.length - 1 && <Divider />}
//               </React.Fragment>
//             ))}
//           </List>
//           <Button variant="contained" color="primary" onClick={handleAddMemberSubmit}>
//             Add Selected Members
//           </Button>
//           <IconButton onClick={handleClose} style={{ position: 'absolute', top: 8, right: 8 }}>
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default GroupChatWindow;
import React, { useState, useEffect, useRef } from 'react';
import InputEmoji from 'react-input-emoji';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Typography, Menu, MenuItem, IconButton, Modal, Box, Button, List, ListItem, ListItemAvatar, ListItemText, Avatar, Checkbox, Divider } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import {useSpeechRecognition} from 'react-speech-kit';
import { MdGroups } from "react-icons/md";


const GroupChatWindow = ({ connid, conname, userid, username, onUpdateUnreadMessages }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [members, setMembers] = useState([]);
  const [memberDetails, setMemberDetails] = useState([]);
  const [userList, setUserList] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [openViewMembers, setOpenViewMembers] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const {listen,stop}=useSpeechRecognition({
    onResult: (result)=>{
      setText(result);
    }
  }) ; 


  const wsMap = useRef(new Map());

  useEffect(() => {
    // Fetch initial messages
    axios.get(`http://localhost:8080/groups/messages/${connid}`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setMessages(response.data);
        } else {
          console.error("Fetched data is not an array:", response.data);
        }
      })
      .catch(error => console.error('Error fetching messages:', error));

    // Set up WebSocket connection for the current group
    const wsUrl = `ws://localhost:8080/ws/group?senderId=${encodeURIComponent(userid)}&groupId=${encodeURIComponent(connid)}`;
    const newWs = new WebSocket(wsUrl);

    newWs.onmessage = function (e) {
      const messageData = JSON.parse(e.data);
      if (connid === messageData.groupid) {
        setMessages((prevMessages) => [...prevMessages, messageData]);
      } else if(messageData.groupid!==connid){
        setNotification(messageData);
      }
    };

    wsMap.current.set(connid, newWs);

    return () => {
      // Cleanup WebSocket connection when component unmounts
      if (newWs) {
        newWs.close();
      }
      wsMap.current.delete(connid);
    };
  }, [connid, userid]);

  const handleClose = () => {
    setOpenViewMembers(false);
    setOpenAddMember(false);
  };

  const sendMessage = () => {
    const ws = wsMap.current.get(connid);
    if (!ws || (!text.trim() && !imageUrl)) return;

    const messageObject = {
      groupid: connid,
      sender: userid,
      sendername: username,
      groupmessage: text,
      timestamp:formatTimestamp(new Date().toISOString()),
      image: imageUrl || null,
    };

    ws.send(JSON.stringify(messageObject));
    setMessages((prevMessages) => [...prevMessages, messageObject]);
    setText('');
    setImage(null);
    setImageUrl(null);
    setPreviewUrl(null);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewUrl(previewUrl);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:8080/uploads', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const data = await response.json();
          setImageUrl(data.url);
        } else {
          console.error('Image upload failed.');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const setNotification = async (messageData) => {
    const response = await axios.get(`http://localhost:8080/groups/name/${messageData.groupid}`);
    const groupName = response.data;
    const notificationMessage = (
      <div>
        <span>{groupName}:{messageData.sendername}: {decodeURIComponent(messageData.groupmessage)}</span>
        {messageData.image && (
          <FontAwesomeIcon icon={faImage} style={{ marginLeft: '8px', color: '#000' }} />
        )}
      </div>
    );

    toast.info(notificationMessage, {
      autoClose: 5000,
      closeButton: true,
      icon: false
    });

    onUpdateUnreadMessages(messageData.groupid, messageData.groupmessage);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewMembers = () => {
    axios.get(`http://localhost:8080/groups/${connid}/members`)
      .then(response => {
        const memberIds = response.data;
        setMembers(memberIds);
        fetchMemberDetails(memberIds);
        setOpenViewMembers(true);
      })
      .catch(error => console.error('Error fetching members:', error));
    handleMenuClose();
  };

  const fetchMemberDetails = (memberIds) => {
    Promise.all(memberIds.map(id => axios.get(`http://localhost:8080/users/name/${id}`)))
      .then(responses => {
        const details = responses.map(res => res.data);
        setMemberDetails(details);
      })
      .catch(error => console.error('Error fetching member details:', error));
  };

  const handleAddMember = () => {
    axios.all([
      axios.get('http://localhost:8080/users'),
      axios.get(`http://localhost:8080/groups/${connid}/members`)
    ])
    .then(axios.spread((allUsersRes, groupMembersRes) => {
      const allUsers = allUsersRes.data;
      const groupMemberIds = groupMembersRes.data;
      const fetchMemberDetails = groupMemberIds.map(id => axios.get(`http://localhost:8080/users/name/${id}`));

      axios.all(fetchMemberDetails)
        .then(memberDetailsRes => {
          const groupMembersDetails = memberDetailsRes.map(res => res.data);
          const nonMembers = allUsers.filter(user => !groupMembersDetails.some(member => member.userid === user.userid));
          setUserList(nonMembers);
          setOpenAddMember(true);
        })
        .catch(error => console.error('Error fetching member details:', error));
    }))
    .catch(error => console.error('Error fetching users or group members:', error));
    handleMenuClose();
  };

  const handleUserSelect = (id) => {
    setSelectedUsers(prevSelected =>
      prevSelected.includes(id) ? prevSelected.filter(user => user !== id) : [...prevSelected, id]
    );
  };

  const handleAddMemberSubmit = () => {
    const participantsString = selectedUsers.join(",");
    axios.post(`http://localhost:8080/groups/${connid}/addMember`, { memberIds: participantsString })
      .then(response => {
        const newMembers = [...members, ...selectedUsers];
        setMembers(newMembers);
        fetchMemberDetails(newMembers);
        setSelectedUsers([]);
        setOpenAddMember(false);
        toast.success('Members added successfully');
      })
      .catch(error => {
        console.error('Error adding members:', error);
        toast.error('Failed to add members');
      });
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-md rounded-lg">
      <div className="contact-header bg-[#4A90E2] text-white p-4 rounded-t-lg flex justify-between items-center">
        <h2 className="text-lg">{conname}</h2>
        <IconButton onClick={handleMenuClick} style={{ color: 'white' }}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleViewMembers}>View Team Members</MenuItem>
          <MenuItem onClick={handleAddMember}>Add Member</MenuItem>
        </Menu>
      </div>
      <div id="messages" className="flex-1 p-4 overflow-y-auto bg-white">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === userid ? 'justify-end' : ''}`}>
            <div>
              <div className="w-7 h-7 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-lg font-bold">
                {msg.sendername.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className={`message rounded-lg p-2 my-2 ${msg.sender === userid ? 'bg-[#E6F7FF] text-[#333333] text-right' : 'bg-[#f6f6f6] text-[#333333] mr-auto text-left'}`}>
              <div className="message-content">
              {msg.groupmessage && <p>{decodeURIComponent(msg.groupmessage)}</p>}
              {msg.image && <img src={msg.image} alt="Attachment" style={{ maxWidth: '500px', maxHeight: '400px',display:"block" }} />}
              </div>
              <Typography variant="caption" color="textSecondary" style={{ fontSize: '0.8rem', color: "#888", display: 'block' }}>
                  {msg.timestamp}
                </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="input-container flex items-center p-2 border-t border-[#E0E0E0] bg-white">
      <label htmlFor="image-upload" className="cursor-pointer">
          <FontAwesomeIcon icon={faImage} size="lg" />
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            className="image-preview"
            style={{ maxWidth: '100px', maxHeight: '100px', marginLeft: '10px' }}
          />
        )}
        <InputEmoji
         value={text}
         onChange={setText}
         cleanOnEnter
         onEnter={sendMessage}
         placeholder="Type a message"
         className="flex-1 border rounded-lg px-3 py-2"
         onKeyPress={handleKeyPress}
        />
                <button onClick={listen} onDoubleClick={stop}><img src="./images/google-voice.png" className='w-9 h-9'/></button>


 <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-[#4A90E2] text-white rounded-lg"
        >
          Send
        </button>      

        </div>
     
    
      <ToastContainer />
      <Modal open={openViewMembers} onClose={handleClose}>
        <Box sx={modalStyle}>
          <div className='flex items-center justify-center'>
        <MdGroups className='w-14 h-14' />
</div>
          {/* <Typography variant="h6" component="h2" className='m-2'>Team Members</Typography></div> */}
          <List>
            {memberDetails.map((member, index) => (
              <React.Fragment key={member.userid}>
                <ListItem>
                  <ListItemAvatar>
                    {<Avatar>{}</Avatar> }
                  </ListItemAvatar>
                  <ListItemText primary={member.username} />
                </ListItem>
                {index < memberDetails.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
          <IconButton onClick={handleClose} style={{ position: 'absolute', top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
      <Modal open={openAddMember} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">Add Team Members</Typography>
          <List>
            {userList.map((user, index) => (
              <React.Fragment key={user.userid}>
                <ListItem button onClick={() => handleUserSelect(user.userid)}>
                  <ListItemAvatar>
                    <Avatar>{user.username.charAt(0)}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={user.username} />
                  <Checkbox edge="end" checked={selectedUsers.includes(user.userid)} tabIndex={-1} disableRipple />
                </ListItem>
                {index < userList.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
          <Button variant="contained" color="primary" onClick={handleAddMemberSubmit}>Add</Button>
          <IconButton onClick={handleClose} style={{ position: 'absolute', top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default GroupChatWindow;


