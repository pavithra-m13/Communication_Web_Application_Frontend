
// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import ContactList from './ContactList';
// // import ChatWindow from './ChatWindow';
// // import AddContactModal from './AddContactModal';
// // import { Button } from '@mui/material';

// // const Dashboard = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const userDetails = location.state?.userDetails;

// //   const [contacts, setContacts] = useState([]);
// //   const [selectedContact, setSelectedContact] = useState(null);
// //   const [unreadMessages, setUnreadMessages] = useState({});
// //   const [open, setOpen] = useState(false);

// //   useEffect(() => {
// //     const fetchContacts = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8080/contacts/${userDetails.userid}`);
// //         setContacts(response.data);
// //       } catch (error) {
// //         console.error('Error fetching contacts:', error);
// //       }
// //     };

// //     fetchContacts();
// //   }, [userDetails,contacts]);

// //   const handleSelectContact = (contact) => {
// //     setSelectedContact(contact);
// //     // Mark messages as read when selecting a contact
// //     setUnreadMessages((prevUnreadMessages) => ({
// //       ...prevUnreadMessages,
// //       [contact.contactid]: 0,
// //     }));
// //   };

// //   const handleOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   const handleUpdateUnreadMessages = (contactid, message) => {
// //     setUnreadMessages((prevUnreadMessages) => {
// //       const existing = prevUnreadMessages[contactid] || { count: 0, lastMessage: '' };
// //       return {
// //         ...prevUnreadMessages,
// //         [contactid]: {
// //           count: existing.count + 1,
// //           lastMessage: decodeURIComponent(message),
// //         },
// //       };
// //     });
// //   };
  

// //   return (
// //     <div className="flex h-screen bg-[#F5F7FA]">
// //       <div className="w-1/3 bg-white shadow-md p-4 flex flex-col">
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={handleOpen}
// //           sx={{ width: '100%', marginBottom: 2 }}
// //         >
// //           Create Chat
// //         </Button>
// //         <ContactList
// //           contacts={contacts}
// //           userDetails={userDetails}
// //           onSelectContact={handleSelectContact}
// //           unreadMessages={unreadMessages}
// //         />
// //       </div>
// //       <div className="flex-1 flex flex-col">
// //         {selectedContact ? (
// //           <ChatWindow
// //             connid={selectedContact.contactid}
// //             conname={selectedContact.contactname}
// //             userid={userDetails.userid}
// //             username={userDetails.username}
// //             onUpdateUnreadMessages={handleUpdateUnreadMessages}
// //           />
// //         ) : (
// //           <div className="flex items-center justify-center h-full">
// //             <h2 className="text-gray-500">Select a contact to start chatting</h2>
// //           </div>
// //         )}
// //       </div>
// //       <AddContactModal open={open} handleClose={handleClose} userDetails={userDetails} />
// //     </div>
// //   );
// // };

// // export default Dashboard;
// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import ContactList from './ContactList';
// // import ChatWindow from './ChatWindow';
// // import GroupChatWindow from './GroupChatWindow'; // Import the GroupChatWindow component
// // import AddContactModal from './AddContactModal';
// // import CreateGroupModal from './CreateGroupModal';
// // import { Button } from '@mui/material';

// // const Dashboard = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const userDetails = location.state?.userDetails;

// //   const [contacts, setContacts] = useState([]);
// //   const [groups, setGroups] = useState([]); // State for storing groups
// //   const [selectedContact, setSelectedContact] = useState(null);
// //   const [selectedGroup, setSelectedGroup] = useState(null);
// //   const [unreadMessages, setUnreadMessages] = useState({});
// //   const [open, setOpen] = useState(false);
// //   const [groupOpen, setGroupOpen] = useState(false);

// //   useEffect(() => {
// //     const fetchContacts = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8080/contacts/${userDetails.userid}`);
// //         setContacts(response.data);
// //       } catch (error) {
// //         console.error('Error fetching contacts:', error);
// //       }
// //     };

// //     const fetchGroups = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8080/groups/${userDetails.userid}`);
// //         setGroups(response.data);
// //       } catch (error) {
// //         console.error('Error fetching groups:', error);
// //       }
// //     };

// //     fetchContacts();
// //     fetchGroups();
// //   }, [userDetails]);

// //   const handleSelectContact = (contact) => {
// //     setSelectedContact(contact);
// //     setSelectedGroup(null);
// //     setUnreadMessages((prevUnreadMessages) => ({
// //       ...prevUnreadMessages,
// //       [contact.contactid]: 0,
// //     }));
// //   };

// //   const handleSelectGroup = (group) => {
// //     setSelectedGroup(group);
// //     setSelectedContact(null);
// //     setUnreadMessages((prevUnreadMessages) => ({
// //       ...prevUnreadMessages,
// //       [group.groupId]: 0,
// //     }));
// //   };

// //   const handleUpdateUnreadMessages = (senderId, message) => {
// //     setUnreadMessages((prevUnreadMessages) => ({
// //       ...prevUnreadMessages,
// //       [senderId]: (prevUnreadMessages[senderId] || 0) + 1,
// //     }));
// //   };

// //   return (
// //     <div className="dashboard-container">
// //       <div className="contact-list">
// //         <ContactList
// //           contacts={contacts}
// //           groups={groups} // Pass groups to ContactList
// //           onSelectContact={handleSelectContact}
// //           onSelectGroup={handleSelectGroup}
// //           userDetails={userDetails}
// //           unreadMessages={unreadMessages}
// //         />
// //         <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
// //           Add Contact
// //         </Button>
// //         <Button variant="contained" color="secondary" onClick={() => setGroupOpen(true)}>
// //           Create Group
// //         </Button>
// //       </div>
// //       <div className="flex-1 flex flex-col">
// //         {selectedContact && (
// //           <ChatWindow
// //             connid={selectedContact.contactid}
// //             conname={selectedContact.contactname}
// //             userid={userDetails.userid}
// //             username={userDetails.username}
// //             onUpdateUnreadMessages={handleUpdateUnreadMessages}
// //           />
// //         )}
// //         {selectedGroup && (
// //           <GroupChatWindow
// //             groupId={selectedGroup.groupId}
// //             groupName={selectedGroup.groupName}
// //             userDetails={userDetails}
// //           />
// //         )}
// //       </div>
// //       <AddContactModal open={open} onClose={() => setOpen(false)} userDetails={userDetails} />
// //       <CreateGroupModal open={groupOpen} onClose={() => setGroupOpen(false)} userDetails={userDetails} />
// //     </div>
// //   );
// // };

// // export default Dashboard;



// // import React, { useState, useEffect } from 'react';
// // import { useLocation } from 'react-router-dom';
// // import axios from 'axios';
// // import ContactList from './ContactList';
// // import ChatWindow from './ChatWindow';
// // import AddContactModal from './AddContactModal';
// // import CreateGroupModal from './CreateGroupModal';
// // import { Button } from '@mui/material';

// // const Dashboard = () => {
// //   const location = useLocation();
// //   const userDetails = location.state?.userDetails;

// // //   const [contacts, setContacts] = useState([]);
// //    const [groups, setGroups] = useState([]); // State for storing groups
// // //   const [selectedContact, setSelectedContact] = useState(null);
// //   const [selectedGroup, setSelectedGroup] = useState(null);
// // //   const [unreadMessages, setUnreadMessages] = useState({});
// //   const [open, setOpen] = useState(false);
// //   const [groupOpen, setGroupOpen] = useState(false);
// //   const [contacts, setContacts] = useState([]);
// //   const [selectedContact, setSelectedContact] = useState(null);
// //   const [unreadMessages, setUnreadMessages] = useState({});
// //   const [openAddContactModal, setOpenAddContactModal] = useState(false);
// //   const [openCreateGroupModal, setOpenCreateGroupModal] = useState(false);

// //   useEffect(() => {
// //     const fetchContacts = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8080/contacts/${userDetails.userid}`);
// //         setContacts(response.data);
// //       } catch (error) {
// //         console.error('Error fetching contacts:', error);
// //       }
// //     };

// //     fetchContacts();
// //   }, [userDetails,contacts]);

// //   const handleSelectContact = (contact) => {
// //     setSelectedContact(contact);
// //     setUnreadMessages((prevUnreadMessages) => ({
// //       ...prevUnreadMessages,
// //       [contact.contactid]: 0,
// //     }));
// //   };
// //   const handleSelectGroup = (group) => {
// //         setSelectedGroup(group);
// //         setSelectedContact(null);
// //         setUnreadMessages((prevUnreadMessages) => ({
// //           ...prevUnreadMessages,
// //           [group.groupId]: 0,
// //         }));
// //       };
// //   const handleOpenAddContactModal = () => {
// //     setOpenAddContactModal(true);
// //   };

// //   const handleCloseAddContactModal = () => {
// //     setOpenAddContactModal(false);
// //   };

// //   const handleOpenCreateGroupModal = () => {
// //     setOpenCreateGroupModal(true);
// //   };

// //   const handleCloseCreateGroupModal = () => {
// //     setOpenCreateGroupModal(false);
// //   };

// //   const handleUpdateUnreadMessages = (contactid, message) => {
// //     setUnreadMessages((prevUnreadMessages) => {
// //       const existing = prevUnreadMessages[contactid] || { count: 0, lastMessage: '' };
// //       return {
// //         ...prevUnreadMessages,
// //         [contactid]: {
// //           count: existing.count + 1,
// //           lastMessage: decodeURIComponent(message),
// //         },
// //       };
// //     });
// //   };

// //   return (
// //     <div className="flex h-screen bg-[#F5F7FA]">
// //       <div className="w-1/3 bg-white shadow-md p-4 flex flex-col">
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={handleOpenAddContactModal}
// //           sx={{ width: '100%', marginBottom: 2 }}
// //         >
// //           Create Chat
// //         </Button>
// //         <Button
// //           variant="contained"
// //           color="secondary"
// //           onClick={handleOpenCreateGroupModal}
// //           sx={{ width: '100%', marginBottom: 2 }}
// //         >
// //           Create Group
// //         </Button>
// //         <ContactList
// //          contacts={contacts}
// //                    groups={groups} // Pass groups to ContactList
// //                    onSelectContact={handleSelectContact}
// //                    onSelectGroup={handleSelectGroup}
// //                    userDetails={userDetails}
// //                    unreadMessages={unreadMessages}
// //         />
// //       </div>

// //       <div className="flex-1 flex flex-col">
// //         {selectedContact ? (
// //           <ChatWindow
// //             connid={selectedContact.contactid}
// //             conname={selectedContact.contactname}
// //             userid={userDetails.userid}
// //             username={userDetails.username}
// //             onUpdateUnreadMessages={handleUpdateUnreadMessages}
// //           />
// //         ) : (
// //           <div className="flex items-center justify-center h-full">
// //             <h2 className="text-gray-500">Select a contact to start chatting</h2>
// //           </div>
// //         )}
// //       </div>

// //       <AddContactModal
// //         open={openAddContactModal}
// //         handleClose={handleCloseAddContactModal}
// //         userDetails={userDetails}
// //       />
// //       <CreateGroupModal
// //         open={openCreateGroupModal}
// //         handleClose={handleCloseCreateGroupModal}
// //         userDetails={userDetails}
// //       />
// //     </div>
// //   );
// // };

// // export default Dashboard;


// // import React, { useState, useEffect } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import ContactList from './ContactList';
// // import ChatWindow from './ChatWindow';
// // import AddContactModal from './AddContactModal';
// // import CreateGroupModal from './CreateGroupModal'; // Ensure this is imported
// // import { Button } from '@mui/material';
// // import GroupChatWindow from './GroupChatWindow';
// // import './Dashboard.css';


// // const Dashboard = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const userDetails = location.state?.userDetails;
// //   const [openAddContactModal, setOpenAddContactModal] = useState(false);
// //  const [openCreateGroupModal, setOpenCreateGroupModal] = useState(false);

// //   const [contacts, setContacts] = useState([]);
// //   const [groups, setGroups] = useState([]); // State for groups
// //   const [selectedContact, setSelectedContact] = useState(null);
// //   const [selectedGroup, setSelectedGroup] = useState(null); // State for selected group
// //   const [unreadMessages, setUnreadMessages] = useState({});

// //   useEffect(() => {
// //     const fetchContactsAndGroups = async () => {
// //       try {
// //         const contactsResponse = await axios.get(`http://localhost:8080/contacts/${userDetails.userid}`);
// //         setContacts(contactsResponse.data);

// //         const groupsResponse = await axios.get(`http://localhost:8080/groups/${userDetails.userid}`);
// //         setGroups(groupsResponse.data); // Fetching groups data
// //       } catch (error) {
// //         console.error('Error fetching contacts or groups:', error);
// //       }
// //     };

// //     fetchContactsAndGroups();
// //   }, [userDetails]);

// //   const handleSelectContact = (contact) => {
// //     setSelectedContact(contact);
// //     setSelectedGroup(null); // Clear selected group
// //     setUnreadMessages((prevUnreadMessages) => ({
// //       ...prevUnreadMessages,
// //       [contact.contactid]: 0,
// //     }));
// //   };

// //   const handleSelectGroup = (group) => {
// //     setSelectedGroup(group);
// //     setSelectedContact(null); // Clear selected contact
// //     setUnreadMessages((prevUnreadMessages) => ({
// //       ...prevUnreadMessages,
// //       [group.groupid]: 0,
// //     }));
// //   };

 
// //   const handleOpenAddContactModal = () => {
// //         setOpenAddContactModal(true);
// //       };
    
// //       const handleCloseAddContactModal = () => {
// //         setOpenAddContactModal(false);
// //       };
    
// //       const handleOpenCreateGroupModal = () => {
// //         setOpenCreateGroupModal(true);
// //       };
    
// //       const handleCloseCreateGroupModal = () => {
// //         setOpenCreateGroupModal(false);
// //       };

// //   const handleUpdateUnreadMessages = (id, message) => {
// //     setUnreadMessages((prevUnreadMessages) => {
// //       const existing = prevUnreadMessages[id] || { count: 0, lastMessage: '' };
// //       return {
// //         ...prevUnreadMessages,
// //         [id]: {
// //           count: existing.count + 1,
// //           lastMessage: decodeURIComponent(message),
// //         },
// //       };
// //     });
// //   };

// //   return (
// //     <div className="flex h-screen bg-[#F5F7FA]">
// //       <div className="w-1/3 bg-white shadow-md p-4 flex flex-col">
// //       <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={handleOpenAddContactModal}
// //           sx={{ width: '100%', marginBottom: 2 }}
// //         >
// //           Create Chat
// //         </Button>
// //         <Button
// //           variant="contained"
// //           color="secondary"
// //           onClick={handleOpenCreateGroupModal}
// //           sx={{ width: '100%', marginBottom: 2 }}
// //         >
// //           Create Group
// //         </Button>
        
// //         <ContactList
// //           contacts={contacts}
// //           groups={groups} // Passing groups to ContactList
// //           userDetails={userDetails}
// //           onSelectContact={handleSelectContact}
// //           onSelectGroup={handleSelectGroup} // Handle group selection
// //           unreadMessages={unreadMessages}
// //         />
// //       </div>
// //       <div className="flex-1 flex flex-col">
// //         {selectedContact ? (
// //           <ChatWindow
// //             connid={selectedContact.contactid}
// //             conname={selectedContact.contactname}
// //             userid={userDetails.userid}
// //             username={userDetails.username}
// //             onUpdateUnreadMessages={handleUpdateUnreadMessages}
// //           />
// //         ) : selectedGroup ? (
// //           <GroupChatWindow
// //             connid={selectedGroup.groupid}
// //             conname={selectedGroup.groupname}
// //             userid={userDetails.userid}
// //             username={userDetails.username}
// //             onUpdateUnreadMessages={handleUpdateUnreadMessages}
// //           />
// //         ) : (
// //           <div className="flex items-center justify-center h-full">
// //             <div className='conversation-placeholder'>
// //             <img src="./images/conversation.png" />
// //             {/* <h2 className="text-gray-500">Select a contact or group to start chatting</h2> */}
// //           </div>
// //           </div>
// //         )}
// //       </div>
// //       <AddContactModal
// //         open={openAddContactModal}
// //         handleClose={handleCloseAddContactModal}
// //         userDetails={userDetails}
// //       />
// //       <CreateGroupModal
// //         open={openCreateGroupModal}
// //         handleClose={handleCloseCreateGroupModal}
// //         userDetails={userDetails}
// //       />
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ContactList from './ContactList';
// import ChatWindow from './ChatWindow';
// import AddContactModal from './AddContactModal';
// import CreateGroupModal from './CreateGroupModal'; // Ensure this is imported
// import { Button } from '@mui/material';
// import GroupChatWindow from './GroupChatWindow';
// import './Dashboard.css';

// const Dashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userDetails = location.state?.userDetails;

//   const [openAddContactModal, setOpenAddContactModal] = useState(false);
//   const [openCreateGroupModal, setOpenCreateGroupModal] = useState(false);
//   const [contacts, setContacts] = useState([]);
//   const [groups, setGroups] = useState([]); // State for groups
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(null); // State for selected group
//   const [unreadMessages, setUnreadMessages] = useState({});
//   const [session,setSession]=useState(false);

//   useEffect(() => {
//     const fetchContactsAndGroups = async () => {
//       try {
//         const contactsResponse = await axios.get(`http://localhost:8080/contacts/${userDetails.userid}`);
//         setContacts(contactsResponse.data);

//         const groupsResponse = await axios.get(`http://localhost:8080/groups/${userDetails.userid}`);
//         setGroups(groupsResponse.data); // Fetching groups data
//         if(groupsResponse.data==="session closed")
//         {
//           setSession(true);
//         }
//       } catch (error) {
//         console.error('Error fetching contacts or groups:', error);
//       }
//     };

//     fetchContactsAndGroups();
//   }, [userDetails,contacts,groups]);

//   const handleSelectContact = (contact) => {
//     setSelectedContact(contact);
//     setSelectedGroup(null); // Clear selected group
//     setUnreadMessages((prevUnreadMessages) => ({
//       ...prevUnreadMessages,
//       [contact.contactid]: 0,
//     }));
//   };

//   const handleSelectGroup = (group) => {
//     setSelectedGroup(group);
//     setSelectedContact(null); // Clear selected contact
//     setUnreadMessages((prevUnreadMessages) => ({
//       ...prevUnreadMessages,
//       [group.groupid]: 0,
//     }));
//   };

//   const handleOpenAddContactModal = () => {
//     setOpenAddContactModal(true);
//   };

//   const handleCloseAddContactModal = () => {
//     setOpenAddContactModal(false);
//   };

//   const handleOpenCreateGroupModal = () => {
//     setOpenCreateGroupModal(true);
//   };

//   const handleCloseCreateGroupModal = () => {
//     setOpenCreateGroupModal(false);
//   };

//   const handleUpdateUnreadMessages = (id, message) => {
//     setUnreadMessages((prevUnreadMessages) => {
//       const existing = prevUnreadMessages[id] || { count: 0, lastMessage: '' };
//       return {
//         ...prevUnreadMessages,
//         [id]: {
//           count: existing.count + 1,
//           lastMessage: decodeURIComponent(message),
//         },
//       };
//     });
//   };

//   return (
//     <div className="flex h-screen bg-[#F5F7FA]">
//       <div className="w-1/3 bg-white shadow-md p-4 flex flex-col">
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleOpenAddContactModal}
//           sx={{ width: '100%', marginBottom: 2 }}
//         >
//           Create Chat
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={handleOpenCreateGroupModal}
//           sx={{ width: '100%', marginBottom: 2 }}
//         >
//           Create Group
//         </Button>
//         <ContactList
//           contacts={contacts}
//           groups={groups} // Passing groups to ContactList
//           userDetails={userDetails}
//           onSelectContact={handleSelectContact}
//           onSelectGroup={handleSelectGroup} // Handle group selection
//           unreadMessages={unreadMessages}
//         />
//       </div>
//       <div className="flex-1 flex flex-col">
//         {selectedContact ? (
//           <ChatWindow
//             connid={selectedContact.contactid}
//             conname={selectedContact.contactname}
//             userid={userDetails.userid}
//             username={userDetails.username}
//             userimg={userDetails.image}
//             onUpdateUnreadMessages={handleUpdateUnreadMessages}
//             conimg={selectedContact.image}
//           />
//         ) : selectedGroup ? (
//           <GroupChatWindow
//             connid={selectedGroup.groupid}
//             conname={selectedGroup.groupname}
//             userid={userDetails.userid}
//             username={userDetails.username}
//             onUpdateUnreadMessages={handleUpdateUnreadMessages}
//           />
//         ) : (
//           <div className="flex items-center justify-center h-full">
//             <div className='conversation-placeholder'>
//               <img src="./images/conversation.png" />
//               {/* <h2 className="text-gray-500">Select a contact or group to start chatting</h2> */}
//             </div>
//           </div>
//         )}
//       </div>
//       <AddContactModal
//         open={openAddContactModal}
//         handleClose={handleCloseAddContactModal}
//         userDetails={userDetails}
//       />
//       <CreateGroupModal
//         open={openCreateGroupModal}
//         handleClose={handleCloseCreateGroupModal}
//         userDetails={userDetails}
//       />
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ContactList from './ContactList';
import ChatWindow from './ChatWindow';
import AddContactModal from './AddContactModal';
import CreateGroupModal from './CreateGroupModal'; // Ensure this is imported
import { Button } from '@mui/material';
import GroupChatWindow from './GroupChatWindow';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userDetails = location.state?.userDetails;

  const [openAddContactModal, setOpenAddContactModal] = useState(false);
  const [openCreateGroupModal, setOpenCreateGroupModal] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [groups, setGroups] = useState([]); // State for groups
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null); // State for selected group
  const [unreadMessages, setUnreadMessages] = useState({});
  const [session,setSession]=useState(false);

  useEffect(() => {
    const fetchContactsAndGroups = async () => {
      try {
        const contactsResponse = await axios.get(`http://localhost:8080/contacts/${userDetails.userid}`);
        setContacts(contactsResponse.data);

        const groupsResponse = await axios.get(`http://localhost:8080/groups/${userDetails.userid}`);
        setGroups(groupsResponse.data); // Fetching groups data
        if(groupsResponse.data==="session closed")
        {
          setSession(true);
        }
      } catch (error) {
        console.error('Error fetching contacts or groups:', error);
      }
    };

    fetchContactsAndGroups();
  }, [userDetails,contacts,groups]);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setSelectedGroup(null); // Clear selected group
    setUnreadMessages((prevUnreadMessages) => ({
      ...prevUnreadMessages,
      [contact.contactid]: 0,
    }));
  };

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
    setSelectedContact(null); // Clear selected contact
    setUnreadMessages((prevUnreadMessages) => ({
      ...prevUnreadMessages,
      [group.groupid]: 0,
    }));
  };

  const handleOpenAddContactModal = () => {
    setOpenAddContactModal(true);
  };

  const handleCloseAddContactModal = () => {
    setOpenAddContactModal(false);
  };

  const handleOpenCreateGroupModal = () => {
    setOpenCreateGroupModal(true);
  };

  const handleCloseCreateGroupModal = () => {
    setOpenCreateGroupModal(false);
  };

  const handleUpdateUnreadMessages = (id, message) => {
    setUnreadMessages((prevUnreadMessages) => {
      const existing = prevUnreadMessages[id] || { count: 0, lastMessage: '' };
      return {
        ...prevUnreadMessages,
        [id]: {
          count: existing.count + 1,
          lastMessage: decodeURIComponent(message),
        },
      };
    });
  };

  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      <div className="w-1/3 bg-white shadow-md p-4 flex flex-col">
      <div className='flex items-center justify-center'>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleOpenAddContactModal}
          
          sx={{p:2,mr:4,width:'50%',backgroundColor:'transparent',color:'black','&:hover':{backgroundColor:'transparent',boxShadow:'none'},boxShadow:'none',borderColor:'primary'}}
        >
          Create Chat
        </Button>
        <Button
         variant="outlined"
         color="primary"
         onClick={handleOpenCreateGroupModal}
         
         sx={{p:2,mr:4,width:'50%',backgroundColor:'transparent',color:'black','&:hover':{backgroundColor:'transparent',boxShadow:'none'},boxShadow:'none',borderColor:'primary'}}
        >
          Create Group
        </Button>
        </div>
        <ContactList
          contacts={contacts}
          groups={groups} // Passing groups to ContactList
          userDetails={userDetails}
          onSelectContact={handleSelectContact}
          onSelectGroup={handleSelectGroup} // Handle group selection
          unreadMessages={unreadMessages}
        />
      </div>
      <div className="flex-1 flex flex-col">
        {selectedContact ? (
          <ChatWindow
            connid={selectedContact.contactid}
            conname={selectedContact.contactname}
            userid={userDetails.userid}
            username={userDetails.username}
            userimg={userDetails.image}
            onUpdateUnreadMessages={handleUpdateUnreadMessages}
            conimg={selectedContact.image}
          />
        ) : selectedGroup ? (
          <GroupChatWindow
            connid={selectedGroup.groupid}
            conname={selectedGroup.groupname}
            userid={userDetails.userid}
            userimg={userDetails.image}
            username={userDetails.username}
            onUpdateUnreadMessages={handleUpdateUnreadMessages}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className='conversation-placeholder'>
              <img src="./images/chat_9866061.png" />
              {/* <h2 className="text-gray-500">Select a contact or group to start chatting</h2> */}
            </div>
          </div>
        )}
      </div>
      <AddContactModal
        open={openAddContactModal}
        handleClose={handleCloseAddContactModal}
        userDetails={userDetails}
      />
      <CreateGroupModal
        open={openCreateGroupModal}
        handleClose={handleCloseCreateGroupModal}
        userDetails={userDetails}
      />
    </div>
  );
};

export default Dashboard;