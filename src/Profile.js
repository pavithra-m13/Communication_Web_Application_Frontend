// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import { useNavigate } from 'react-router-dom';
// // // import { useLocation } from 'react-router-dom';
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';
 
// // // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// // // axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
 
// // // const Profile = () => {
// // //   const [username, setUsername] = useState('');
// // //   const [phoneno, setPhoneno] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const navigate = useNavigate();
// // //   const location = useLocation();
// // //   const userDetails = location.state?.userDetails;
// // //   const [udet,setUdet]=useState('');
// // //   useEffect(() => {
// // //     console.log(userDetails);
// // //     if (userDetails) {
// // //       setUsername(userDetails.username);
// // //       setPhoneno(userDetails.phoneno);
// // //       setPassword(userDetails.password);
// // //     }
// // //   }, [userDetails]);
 
// // //   const handleUpdate = async (e) => {
// // //     e.preventDefault();
 
// // //     try {
// // //       const response = await axios.put(`http://localhost:8080/updateprofile`, {
// // //         userid: userDetails.userid,
// // //         username,
// // //         phoneno,
// // //         password
// // //       });
// // //       console.log(response.data);
// // //       setUdet(response.data);
 
// // //       if (response.data==="success") {
       
// // //         alert('Profile updated successfully .Please sign in');
// // //         // const userDataResponse = await axios.get(`http://localhost:8080/users/${userDetails.phoneno}`);
// // //         // console.log(userDataResponse.data);
// // //         // const interval=setInterval(()=>{
// // //         //   setNotification();
// // //         // },1000);
// // //         // interval();
// // //         navigate("/");
// // //       } 
// // //     } catch (error) {
// // //       console.error('Error updating profile:', error);
// // //       alert('Error updating profile');
// // //     }
// // //   };
// // //   const handleLogout=()=>{
// // //     navigate('/');
// // // };
// // // const setNotification = () => {
// // //   toast.info("Sign in again");
// // // };
 
 
// // //   return (
   
// // //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// // //       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        
// // //         <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Update Profile</h1>
// // //         <form onSubmit={handleUpdate}>
// // //           <div className="mb-4">
// // //             <label className="block text-gray-700 text-left">Username:</label>
// // //             <input
// // //               type="text"
// // //               value={username}
// // //               onChange={(e) => setUsername(e.target.value)}
// // //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //           </div>
// // //           <div className="mb-4">
// // //             <label className="block text-gray-700 text-left">Phone Number:</label>
// // //             <input
// // //               type="text"
// // //               value={phoneno}
// // //               onChange={(e) => setPhoneno(e.target.value)}
// // //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //             />
// // //           </div>
// // //           <div className="mb-6">
// // //             <label className="block text-gray-700 text-left">Password:</label>
// // //             <input
// // //               type="password"
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='set new password'
// // //             />
// // //           </div>
// // //           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
// // //             Update
// // //           </button>
// // //         </form>
// // //       </div>
// // //       <ToastContainer/>
// // //     </div>
   
// // //   );
// // // };
 
// // // export default Profile;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import { useLocation } from 'react-router-dom';
 
// // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// // axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
 
// // const Profile = () => {
// //   const [username, setUsername] = useState('');
// //   const [phoneno, setPhoneno] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [image,setImage]=useState('');
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const userDetails = location.state?.userDetails;
// //   const [udet,setUdet]=useState('');
 
// //   useEffect(() => {
// //     console.log(userDetails);
// //     if (userDetails) {
// //       setUsername(userDetails.username);
// //       setPhoneno(userDetails.phoneno);
// //       setPassword(userDetails.password);
// //       setImage(userDetails.image);
// //     }
// //   }, [userDetails]);
 
// //   const handleUpdate = async (e) => {
// //     e.preventDefault();
 
// //     try {
   
// //       const response = await axios.put(`http://localhost:8080/updateprofile`, {
// //         userid: userDetails.userid,
// //         username,
// //         phoneno,
// //         password,
// //         image
// //       });
// //       console.log(response.data);
// //       setUdet(response.data);
 
// //       if (response.data==="success") {
       
// //         alert('Profile updated successfully');
       
// //         navigate("/");
// //       } else {
// //         alert('Error updating profile');
// //       }
// //     } catch (error) {
// //       console.error('Error updating profile:', error);
// //       alert('Error updating profile');
// //     }
// //   };
// //   const handleLogout=()=>{
// //     navigate('/');
// // };
 
 
 
// //   return (
   
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md justify-center">
       
// //         <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Update Profile</h1>
// //         <form onSubmit={handleUpdate}>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-left">Username:</label>
// //             <input
// //               type="text"
// //               value={username}
// //               onChange={(e) => setUsername(e.target.value)}
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700 text-left">Phone Number:</label>
// //             <input
// //               type="text"
// //               value={phoneno}
// //               onChange={(e) => setPhoneno(e.target.value)}
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //           </div>
// //           <div className="mb-6">
// //             <label className="block text-gray-700 text-left">Password:</label>
// //             <input
// //               type="password"
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='set new password'
// //             />
// //           </div>
// //           <div className="mb-6">
// //             <label className="block text-gray-700">Profile Picture:</label>
// //             <input
// //               type="file"
// //               accept="image/*"
// //               onChange={(e) => {
// //                 const file = e.target.files[0];
// //                 if (file) {
// //                   const reader = new FileReader();
// //                   reader.onloadend = () => {
// //                     setImage(reader.result.split(',')[1]); // Set base64 image data
// //                   };
// //                   reader.readAsDataURL(file);
// //                 }
// //               }}
// //               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// //             />
// //             {image && (
// //               <img
// //                 src={`data:image/jpeg;base64,${image}`}
// //                 alt="Profile"
// //                 className="mt-4 w-32 h-32 object-cover rounded-full"
// //               />
// //             )}
// //           </div>
 
// //           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
// //             Update
// //           </button>
// //         </form>
// //       </div>
// //     </div>
   
// //   );
// // };
 
// // export default Profile;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; 
// import { useLocation,Link } from 'react-router-dom';

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

// const Profile = () => {
//   const [username, setUsername] = useState('');
//   const [phoneno, setPhoneno] = useState('');
//   const [password, setPassword] = useState('');
//   const [image,setImage]=useState('');
//   const navigate = useNavigate();
//   const location = useLocation();
//   const userDetails = location.state?.userDetails;
//   const [udet,setUdet]=useState('');
  
//   useEffect(() => {
//     console.log(userDetails);
//     if (userDetails) {
//       setUsername(userDetails.username);
//       setPhoneno(userDetails.phoneno);
//       setPassword(userDetails.password);
//       setImage(userDetails.image);
//     }
//   }, [userDetails]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
   
//       const response = await axios.put(`http://localhost:8080/updateprofile`, {
//         userid: userDetails.userid,
//         username,
//         phoneno,
//         password,
//         image
//       });
//       console.log(response.data);
//       setUdet(response.data);

//       if (response.data==="success") {
        
//         alert('Profile updated successfully');
       
//         navigate("/");
//       } else {
//         alert('Error updating profile');
//       }
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       alert('Error updating profile');
//     }
//   };
//   const handleLogout=()=>{
//     navigate('/');
// };



//   return (
    
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md justify-center">
        
//         <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Update Profile</h1>
//         <form onSubmit={handleUpdate}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-left">Username:</label>
//             <input 
//               type="text" 
//               value={username} 
//               onChange={(e) => setUsername(e.target.value)} 
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-left">Phone Number:</label>
//             <input 
//               type="text" 
//               value={phoneno} 
//               onChange={(e) => setPhoneno(e.target.value)} 
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-left">Password:</label>
//             <input 
//               type="password" 
//               onChange={(e) => setPassword(e.target.value)} 
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder='set new password'
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700">Profile Picture:</label>
//             <input 
//               type="file" 
//               accept="image/*"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) {
//                   const reader = new FileReader();
//                   reader.onloadend = () => {
//                     setImage(reader.result.split(',')[1]); // Set base64 image data
//                   };
//                   reader.readAsDataURL(file);
//                 }
//               }} 
//               className="mb-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//             {image && (
//               <img 
//                 src={`data:image/jpeg;base64,${image}`} 
//                 alt="Profile"
//                 className="mt-4 w-32 h-32 object-cover rounded-full"
//               />
//             )}
//           </div>

//           <button type="submit" className="m-0 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
//             Update
//           </button>
         
//         </form>
//       </div>
//     </div>
    
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const userDetails = location.state?.userDetails;
  const [udet, setUdet] = useState('');

  useEffect(() => {
    console.log(userDetails);
    if (userDetails) {
      setUsername(userDetails.username);
      setPhoneno(userDetails.phoneno);
      setPassword(userDetails.password);
      setImage(userDetails.image);
    }
  }, [userDetails]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8080/updateprofile`, {
        userid: userDetails.userid,
        username,
        phoneno,
        password,
        image
      });
      console.log(response.data);
      setUdet(response.data);

      if (response.data === "success") {
        toast.success('Profile updated successfully. Please log in again.', {
          onClose: () => navigate('/'),
        });
      } else {
        toast.error('Error updating profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md justify-center">
        <ToastContainer />
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Update Profile</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-gray-700 text-left">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-left">Phone Number:</label>
            <input
              type="text"
              value={phoneno}
              onChange={(e) => setPhoneno(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-left">Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder='Set new password'
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Profile Picture:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImage(reader.result.split(',')[1]); // Set base64 image data
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="mb-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {image && (
              <img
                src={`data:image/jpeg;base64,${image}`}
                alt="Profile"
                className="mt-4 w-32 h-32 object-cover rounded-full"
              />
            )}
          </div>

          <button type="submit" className="m-0 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

