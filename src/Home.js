// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { useNavigate,Link } from 'react-router-dom';
// const Home = () => {
//   const navigate=useNavigate();
//   const [activeTab, setActiveTab] = useState("signUp");
//   const [errormsg,setErrorMessage]=useState("");
//   const [errors, setError] = useState({});
//   const [errs,setErrs]=useState({});
//   const [successMessage, setSuccessMessage] = useState("");
//   const [formData,setFormData]=useState({
       
//     username:'',
//      phoneno:'',
//      password:''
     
//  });
//  const [credentials, setCredentials] = useState({
//   phoneno: '',
//   password: '',
// });
 
//   const handleTabSwitch = (tab) => {
//     setActiveTab(tab);
//     setError({});
//     setSuccessMessage("");
//     setErrorMessage("");
//   }
 
 
//   const handleSignInChange = (e) => {
//     setErrorMessage("");
//     setCredentials({
//       ...credentials,
//       [e.target.name]: e.target.value,
//     });
//   };
 
 
 
//   const validateForm = (data) => {
//     setError({});
//     const {username,phoneno,password} = data;
   
//     let usernameerr='';
//     let phonenoerr='';
//     let passworderr='';
//         if(!username)
//         {
//            usernameerr="Username is required";
//           setError((prev) =>({...prev,username:usernameerr}));
//         }
//         if(!phoneno)
//         {
//           phonenoerr="Phone Number is required";
//           setError((prev) =>({...prev,phoneno:phonenoerr}));
//         //  setError(errors);
//         }
//         if(!password)
//           {
//             passworderr="Password is required";
//           setError((prev) =>({...prev,password:passworderr}));
//           //  setError(errors);
//           }
     
     
//         if(phoneno && (phoneno.length<10 || phoneno.length>10))
//         {
//           phonenoerr="Please enter a valid phone number";
//           setError((prev) =>({...prev,phoneno:phonenoerr}));
//          // setError(errors);
//         }
     
     
//         if(password && password.length<8)
//         {
//           passworderr="Password must be atleast 8 characters";
//           setError((prev) =>({...prev,password:passworderr}));
//          // setError(errors);
//         }
     
     
     
   
//     console.log(errors);
//     if(Object.values(errors).length===0)
//       {
       
//         return true;
       
//       }
//       else{
//          // Clear error message if validation passes
       
//         return false;
   
//       }
   
//   };
 
//   const validateForm1 = (data) => {
//     setErrs({});
//     const {phoneno,password} = data;
   
   
//     let phoneerr='';
//     let passerr='';
       
//         if(!phoneno)
//         {
//           phoneerr="Phone Number is required";
//           setErrs((prev) =>({...prev,phoneno:phoneerr}));
//         //  setError(errors);
//         }
//         if(!password)
//           {
//             passerr="Password is required";
//           setErrs((prev) =>({...prev,password:passerr}));
//           //  setError(errors);
//           }
     
     
//         if(phoneno && (phoneno.length<10 || phoneno.length>10))
//         {
//           errs.phoneno="Please enter a valid phone number";
//          //setErrs(errors);
//         }
     
     
//         if(password && password.length<8)
//         {
//           errs.password="Password must be atleast 8 characters";
//          // setError(errors);
//         }
     
     
     
   
//     console.log(errors);
//     if(Object.values(errors).length>=1)
//       {
       
//         return true;
       
//       }
//       else{
//          // Clear error message if validation passes
       
//         return false;
   
//       }
   
//   };
 
//   const handleSignInSubmit = async (e) => {
//     e.preventDefault();
 
//     try {
//       const response = await axios.post('http://localhost:8080/log', credentials);
//       console.log('Login response:', response.data);
 
//       if (response.data === 'success') {
//         const userDataResponse = await axios.get(`http://localhost:8080/users/${credentials.phoneno}`);
//         console.log('User data:', userDataResponse.data);
 
//         // Save token or user data in local storage
//         localStorage.setItem('token', response.data.token); // Adjust based on your response structure
 
//         // Navigate to the dashboard
//         navigate("/dash", { state: { userDetails: userDataResponse.data } });
//       } else {
//         console.error('Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setErrorMessage("Login Failed, try again");
//     }
//   };
 
   
//     const handleSignUpChange = (e) => {
//       setError({});
//       e.preventDefault();
//           setFormData({
//               ...formData,[e.target.name]:e.target.value
//           });
//     };
   
// axios.defaults.withCredentials=true;
//     const handleSignUpSubmit=async (e)=>{
//         e.preventDefault();
//         try{
//         const val=validateForm(formData);
//         console.log(val+" "+formData);
//         if(val)
//         {
//         const response=await axios.post('http://localhost:8080/reg1',formData);
//             console.log('registered',response.data);
//             if (response.data === 'home' ) {
//               setSuccessMessage("Sign up successful");
//                // const userDataResponse = await axios.get(`http://localhost:8080/users/${formData.phoneno}`);
//                // console.log('User data:', userDataResponse.data);
       
//                 // Navigate to another page after successful login and fetching user data
//                // navigate("/userlist",{state:{userDetails:userDataResponse.data}});
//             } else {
//                 console.error('Login failed');
//               }
//             }
//             } catch (error) {
//               console.error('Error during login:', error);
//               setErrorMessage("Failed to sign up. Please try again.");
//             }
//           };
 
 
 
 
//   return (
//     <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-6">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
//       >
//         <div className="md:w-1/2 p-8 bg-[#F5F7FA] flex flex-col justify-center items-center">
//           <motion.h1
//             initial={{ x: -100 }}
//             animate={{ x: 0 }}
//             transition={{ type: "spring", stiffness: 100 }}
//             className="text-4xl font-bold mb-4 text-center"
//           >
//             <span className="text-[#828282]">Welcome to</span>{" "}
//             <span className="text-[#4A90E2]">Comniverse</span>
//           </motion.h1>
//           <motion.p
//             initial={{ x: -100 }}
//             animate={{ x: 0 }}
//             transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//             className="text-lg text-center text-[#828282]"
//           >
//             Connect with the world instantly
//           </motion.p>
//         </div>
//         <div className="md:w-1/2 p-8">
//           <div className="flex justify-center mb-6">
//           <button
//               className={`w-full px-6 py-2 font-semibold border-b-2 ${
//                 activeTab === "signUp"
//                   ? "text-gray "
//                   : "text-gray border-transparent"
//               } `}
//               onClick={() => handleTabSwitch("signUp")}
//             >
//               Sign Up
//             </button>
//             <button
//               className={`w-full ml-4 px-6 py-2 font-semibold border-b-2 ${
//                 activeTab === "signIn"
//                   ? "text-gray "
//                   : "text-gray border-transparent"
//               } `}
//               onClick={() => handleTabSwitch("signIn")}
//             >
//               Sign In
//             </button>
//           </div>
         
//           {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
//           {errormsg && <div className="text-red-500 mb-4">{errormsg}</div>}
//           {activeTab === "signUp" && (
//             <motion.form
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               onSubmit={handleSignUpSubmit}
//               className="space-y-4"
//             >
//               <div>
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2 text-left"
//                   htmlFor="signUpUsername"
//                 >
//                   Username
//                 </label>
//                 <input
//                   className="text-base shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="signUpUsername"
//                   name="username"
//                   type="text"
//                   placeholder="Username"
//                   value={formData.username}
//                   onChange={handleSignUpChange}
//                 />
//                 {Object.values(errors) && <span className="text-red-500 mb-4">{errors.username}</span>}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2 text-left"
//                   htmlFor="signUpPhone"
//                 >
//                   Phone Number
//                 </label>
               
//                 <input
//                   className="text-base shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="signUpPhone"
//                   name="phoneno"
//                   type="number"
//                   placeholder="Phone Number"
//                   value={formData.phoneno}
//                   onChange={handleSignUpChange}
//                 />
//                 {errors && <span className="text-red-500 mb-4">{errors.phoneno}</span>}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2 text-left"
//                   htmlFor="signUpPassword"
//                 >
//                   Password
//                 </label>
//                 <input
//                   className="text-base shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                   id="signUpPassword"
//                   name="password"
//                   type="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleSignUpChange}
//                 />
//                 {errors && <span className="text-red-500 mb-4">{errors.password}</span>}
//               </div>
//               <div className="flex items-center ">
//                 <button
//                   className="w-full bg-[#4A90E2] hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
//                   type="submit"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </motion.form>
//           )}
//           {activeTab === "signIn" && (
//             <motion.form
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               onSubmit={handleSignInSubmit}
//               className="space-y-4"
//             >
//               <div>
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2 text-left"
//                   htmlFor="signInPhone"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   className="text-base shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   id="signInPhone"
//                   name="phoneno"
//                   type="number"
//                   placeholder="Phone Number"
//                   value={credentials.phoneno}
//                   onChange={handleSignInChange}
//                 />
//                 {errs && <span className="text-red-500 mb-4">{errs.password}</span>}
//               </div>
//               <div>
//                 <label
//                   className="block text-gray-700 text-sm font-bold mb-2 text-left"
//                   htmlFor="signInPassword"
//                 >
//                   Password
//                 </label>
//                 <input
//                   className="text-base shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                   id="signInPassword"
//                   name="password"
//                   type="password"
//                   placeholder="Password"
//                   value={credentials.password}
//                   onChange={handleSignInChange}
//                 />
//                 {errs && <span className="text-red-500 mb-4">{errs.password}</span>}
//               </div>
//               <div className="flex items-center justify-between">
//                 <button
//                   className="w-full bg-[#4A90E2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   type="submit"
//                 >
//                   Sign In
//                 </button>
//                 <Link to="/forget-password" className='btn1'>Forgot Password?</Link>
      
               
//               </div>
//             </motion.form>
//           )}
         
//         </div>
//       </motion.div>
//     </div>
 
//   );
// };
// export default Home;



import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate,Link } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const [activeTab, setActiveTab] = useState("signUp");
  const [errormsg,setErrorMessage]=useState("");
  const [errors, setError] = useState({});
  const [errs,setErrs]=useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formData,setFormData]=useState({
       
    username:'',
     phoneno:'',
     password:''
     
 });
 const [credentials, setCredentials] = useState({
  phoneno: '',
  password: '',
});
 
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setError({});
    setSuccessMessage("");
    setErrorMessage("");
  }
 
 
  const handleSignInChange = (e) => {
    setErrorMessage("");
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
 
 
 
  const validateForm = (data) => {
    setError({});
    const {username,phoneno,password} = data;
   
    let usernameerr='';
    let phonenoerr='';
    let passworderr='';
        if(!username)
        {
           usernameerr="Username is required";
          setError((prev) =>({...prev,username:usernameerr}));
        }
        if(!phoneno)
        {
          phonenoerr="Phone Number is required";
          setError((prev) =>({...prev,phoneno:phonenoerr}));
        //  setError(errors);
        }
        if(!password)
          {
            passworderr="Password is required";
          setError((prev) =>({...prev,password:passworderr}));
          //  setError(errors);
          }
     
     
        if(phoneno && (phoneno.length<10 || phoneno.length>10))
        {
          phonenoerr="Please enter a valid phone number";
          setError((prev) =>({...prev,phoneno:phonenoerr}));
         // setError(errors);
        }
     
     
        if(password && password.length<8)
        {
          passworderr="Password must be atleast 8 characters";
          setError((prev) =>({...prev,password:passworderr}));
         // setError(errors);
        }
     
     
     
   
    console.log(errors);
    if(Object.values(errors).length===0)
      {
       
        return true;
       
      }
      else{
         // Clear error message if validation passes
       
        return false;
   
      }
   
  };
 
  const validateForm1 = (data) => {
    setErrs({});
    const {phoneno,password} = data;
   
   
    let phoneerr='';
    let passerr='';
       
        if(!phoneno)
        {
          phoneerr="Phone Number is required";
          setErrs((prev) =>({...prev,phoneno:phoneerr}));
        //  setError(errors);
        }
        if(!password)
          {
            passerr="Password is required";
          setErrs((prev) =>({...prev,password:passerr}));
          //  setError(errors);
          }
     
     
        if(phoneno && (phoneno.length<10 || phoneno.length>10))
        {
          errs.phoneno="Please enter a valid phone number";
         //setErrs(errors);
        }
     
     
        if(password && password.length<8)
        {
          errs.password="Password must be atleast 8 characters";
         // setError(errors);
        }
     
     
     
   
    console.log(errors);
    if(Object.values(errors).length>=1)
      {
       
        return true;
       
      }
      else{
         // Clear error message if validation passes
       
        return false;
   
      }
   
  };
 
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post('http://localhost:8080/log', credentials);
      console.log('Login response:', response.data);
 
      if (response.data === 'success') {
        const userDataResponse = await axios.get(`http://localhost:8080/users/${credentials.phoneno}`);
        console.log('User data:', userDataResponse.data);
 
        // Save token or user data in local storage
        localStorage.setItem('token', response.data.token); // Adjust based on your response structure
 
        // Navigate to the dashboard
        navigate("/dash", { state: { userDetails: userDataResponse.data } });
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage("Login Failed, try again");
    }
  };
 
   
    const handleSignUpChange = (e) => {
      setError({});
      e.preventDefault();
          setFormData({
              ...formData,[e.target.name]:e.target.value
          });
    };
   
axios.defaults.withCredentials=true;
    const handleSignUpSubmit=async (e)=>{
        e.preventDefault();
        try{
        const val=validateForm(formData);
        console.log(val+" "+formData);
        if(val)
        {
        const response=await axios.post('http://localhost:8080/reg1',formData);
            console.log('registered',response.data);
            if (response.data === 'home' ) {
              setSuccessMessage("Sign up successful");
              setFormData({});
               // const userDataResponse = await axios.get(`http://localhost:8080/users/${formData.phoneno}`);
               // console.log('User data:', userDataResponse.data);
       
                // Navigate to another page after successful login and fetching user data
               // navigate("/userlist",{state:{userDetails:userDataResponse.data}});
            } else {
                console.error('Login failed');
              }
            }
            } catch (error) {
              console.error('Error during login:', error);
              setErrorMessage("Failed to sign up. Please try again.");
            }
          };
 
 
 
 
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
      >
        <div className="md:w-1/2 p-8 bg-[#F5F7FA] flex flex-col justify-center items-center">
        <img src="images/chat_9866061.png" alt="logo" className=" h-28 m-6"></img>
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl font-bold mb-4 text-center"
          >
            <span className="text-[#828282]">Welcome to</span>{" "}
            <span className="text-[#4A90E2]">Comniverse</span>
          </motion.h1>
          <motion.p
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="text-lg text-center text-[#828282]"
          >
            Connect with the world instantly
          </motion.p>
        </div>
        <div className="md:w-1/2 p-8">
          <div className="flex justify-center mb-6">
          <button
              className={`w-full px-6 py-2 font-semibold border-b-2 ${
                activeTab === "signUp"
                  ? "text-gray "
                  : "text-gray border-transparent"
              } `}
              onClick={() => handleTabSwitch("signUp")}
            >
              Sign Up
            </button>
            <button
              className={`w-full ml-4 px-6 py-2 font-semibold border-b-2 ${
                activeTab === "signIn"
                  ? "text-gray "
                  : "text-gray border-transparent"
              } `}
              onClick={() => handleTabSwitch("signIn")}
            >
              Sign In
            </button>
          </div>
         
          {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
          {errormsg && <div className="text-red-500 mb-4">{errormsg}</div>}
          {activeTab === "signUp" && (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSignUpSubmit}
              className="space-y-4"
              autocomplete="off"
            >
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="signUpUsername"
                >
                  Username
                </label>
                <input
                  className="text-base shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="signUpUsername"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleSignUpChange}
                  autocomplete="off"
                />
                {Object.values(errors) && <span className="text-red-500 mb-4">{errors.username}</span>}
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="signUpPhone"
                >
                  Phone Number
                </label>
               
                <input
                  className="text-base shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="signUpPhone"
                  name="phoneno"
                  type="number"
                  placeholder="Phone Number"
                  value={formData.phoneno}
                  onChange={handleSignUpChange}
                  autocomplete="off"
                />
                {errors && <span className="text-red-500 mb-4">{errors.phoneno}</span>}
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="signUpPassword"
                >
                  Password
                </label>
                <input
                  className="text-base shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="signUpPassword"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleSignUpChange}
                  autocomplete="off"
                />
                {errors && <span className="text-red-500 mb-4">{errors.password}</span>}
              </div>
              <div className="flex items-center ">
                <button
                  className="w-full bg-[#4A90E2] hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </motion.form>
          )}
          {activeTab === "signIn" && (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSignInSubmit}
              className="space-y-4"
              autocomplete="off"
            >
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="signInPhone"
                >
                  Phone Number
                </label>
                <input
                  className="text-base shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="signInPhone"
                  name="phoneno"
                  type="number"
                  placeholder="Phone Number"
                  value={credentials.phoneno}
                  onChange={handleSignInChange}
                  autocomplete="off"
                />
                {errs && <span className="text-red-500 mb-4">{errs.password}</span>}
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="signInPassword"
                >
                  Password
                </label>
                <input
                  className="text-base shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="signInPassword"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleSignInChange}
                  autocomplete="off"
                />
                {errs && <span className="text-red-500 mb-4">{errs.password}</span>}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="w-full bg-[#4A90E2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
                
                <Link to="/forget-password" className='block text-gray-700 text-sm font-bold mb-2 text-left'>Forgot Password?</Link>
      
               
              </div>
            </motion.form>
          )}
         
        </div>
      </motion.div>
    </div>
 
  );
};
export default Home;
