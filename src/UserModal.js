
// import React from "react";
// // import Modal from "@material-ui/core/Modal";
// import axios from 'axios';
// import { Link, useNavigate } from "react-router-dom"; 
// import { useLocation } from 'react-router-dom';
// import { useState } from "react";
// import { useEffect } from "react";
// export default function App() {
//     const [open, setOpen] = React.useState(false);
 
//     const handleClose = () => {
//         setOpen(false);
//     };
 
//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const [users, setUsers] = useState([]);
//     // const navigate=useNavigate();
// // const[userid1,setUserid1]=useState(userid1);
// const location=useLocation();
// const userDetails=location.state?.userDetails;
// console.log(userDetails);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/users/userlist/${userDetails.userid}`);
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, [userDetails.userid]);

//   const addContact = async (contactId) => {
//     const contactName = prompt("Enter contact name:");

//     try {
//       const response = await axios.post(`http://localhost:8080/users/${userDetails.userid}/${contactId}/addContact`, {
//         contactName
//       });
//       alert(contactName);
//       try {
//         const response = await axios.get(`http://localhost:8080/users/userlist/${userDetails.userid}`);
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     } catch (error) {
//       console.error('Error adding contact:', error);
//     }
//   };

//   const gotocontact=()=>{
//     navigate('/contact',{state:{userDetails}});
//   };
 
//     return (
//         <div
//             style={{
//                 textAlign: "center",
//                 display: "block",
//                 padding: 30,
//                 margin: "auto",
//             }}
//         >
            
//             <button type="button" onClick={handleOpen}>
//                 Add Contacts
//             </button>
//             {/* <Modal
//                 onClose={handleClose}
//                 open={open}
//                 style={{
//                     position: "absolute",
//                     border: "2px solid #000",
//                     backgroundColor: "white",
                    
//                     height: 800,
//                     width: 940,
//                     margin: "auto",
//                     padding: "2%",
//                     color: "white",
//                 }}
//             > */}
//                  <div>
//   <h1>User List</h1>
//   <ul className="flex">
//     {users.map((user) => {
//       // Check if user.userid is different from userDetails.userid
//       const shouldDisplay = user.userid !== userDetails.userid;

//       return shouldDisplay && (
//         <div style={{backgroundColor: "white"}}>
//         <li key={user.userid} style={{
//                     color: "black",
//                 }}>
//           {user.username} ({user.phoneno})
//           <button onClick={() => addContact(user.userid)}>Add to Contacts</button>
//         </li>
//         </div>
//       );
//     })}
//   </ul>
//   <button className='btn' onClick={gotocontact}>Contact List</button>
// </div>
//           {/* </Modal> */}
//         </div>
//     );
// }