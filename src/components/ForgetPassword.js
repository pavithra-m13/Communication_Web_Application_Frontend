// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const ForgotPassword = () => {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     phoneno: '',
// //     newPassword: '',
// //     confirmPassword: '',
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (formData.newPassword !== formData.confirmPassword) {
// //       console.error('Passwords do not match');
// //       return;
// //     }

// //     try {
// //       const response = await axios.put(`http://localhost:8080/forgot-password/${formData.phoneno}/${formData.newPassword}`);

// //       if (response.data === 'success') {
// //         navigate('/');
// //       } else {
// //         console.error('Password reset failed');
// //       }
// //     } catch (error) {
// //       console.error('Error during password reset:', error);
// //     }
// //   };

// //   return (
// //     <div className='Form'>
// //       <form onSubmit={handleSubmit} className='form'>
// //         <div className='dflex'>
// //           <div className='lable'>Phone Number</div>
// //           <input
// //             className="inp"
// //             type="text"
// //             name="phoneno"
// //             value={formData.phoneno}
// //             onChange={handleChange}
// //             placeholder=''
// //           />
// //           <div className='lable'>New Password</div>
// //           <input
// //             className="inp"
// //             type="password"
// //             name="newPassword"
// //             value={formData.newPassword}
// //             onChange={handleChange}
// //           />
// //           <div className='lable'>Confirm Password</div>
// //           <input
// //             className="inp"
// //             type="password"
// //             name="confirmPassword"
// //             value={formData.confirmPassword}
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <button type='submit' className='btn1'>Reset Password</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ForgotPassword;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import OtpInput from 'react-otp-input';
// import './forgot-password.css'

// const ForgotPassword = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     phoneno: '',
//     otp: '',
//     newPassword: '',
//     confirmPassword: '',
//   });
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleOTPChange = (otp) => {
//     setFormData({ ...formData, otp });
//   };

//   const handleSendOTP = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     try {
//       const response = await axios.post('http://localhost:8080/api/send-otp', { phoneno: formData.phoneno });
//       if (response.data.status === 'otp_sent') {
//         setStep(2);
//       } else {
//         setErrorMessage('Failed to send OTP');
//       }
//     } catch (error) {
//       setErrorMessage('Error during OTP send: ' + error.message);
//     }
//   };

//   const handleValidateOTP = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     try {
//       const response = await axios.post('http://localhost:8080/api/validate-otp', { phoneno: formData.phoneno, otp: formData.otp });
//       if (response.data.status === 'otp_valid') {
//         setStep(3);
//       } else {
//         setErrorMessage('Invalid OTP');
//       }
//     } catch (error) {
//       setErrorMessage('Error during OTP validation: ' + error.message);
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     if (formData.newPassword !== formData.confirmPassword) {
//       setErrorMessage('Passwords do not match');
//       return;
//     }
//     try {
//       const response = await axios.put(`http://localhost:8080/api/forgot-password/${formData.phoneno}/${formData.newPassword}`);
//       if (response.data.status === 'success') {
//         navigate('/');
//       } else {
//         setErrorMessage('Password reset failed');
//       }
//     } catch (error) {
//       setErrorMessage('Error during password reset: ' + error.message);
//     }
//   };

//   return (
//     <div className='Form'>
//       {errorMessage && <div className='error'>{errorMessage}</div>}
//       {step === 1 && (
//         <form onSubmit={handleSendOTP} className='form'>
//           <div className='dflex'>
//             <div className='lable'>Phone Number</div>
//             <input
//               className="inp"
//               type="text"
//               name="phoneno"
//               value={formData.phoneno}
//               onChange={handleChange}
//               placeholder=''
//             />
//           </div>
//           <button type='submit' className='btn1'>Send OTP</button>
//         </form>
//       )}
//       {step === 2 && (
//         <form onSubmit={handleValidateOTP} className='form'>
//           <div className='dflex'>
//             <div className='lable'>OTP</div>
//             <OtpInput
//               value={formData.otp}
//               onChange={handleOTPChange}
//               numInputs={6}
//               separator={<span>-</span>}
//               inputStyle="otp-input"
//             />
//           </div>
//           <button type='submit' className='btn1'>Validate OTP</button>
//         </form>
//       )}
//       {step === 3 && (
//         <form onSubmit={handleResetPassword} className='form'>
//           <div className='dflex'>
//             <div className='lable'>New Password</div>
//             <input
//               className="inp"
//               type="password"
//               name="newPassword"
//               value={formData.newPassword}
//               onChange={handleChange}
//             />
//             <div className='lable'>Confirm Password</div>
//             <input
//               className="inp"
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//           </div>
//           <button type='submit' className='btn1'>Reset Password</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ForgotPassword;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneno: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8080/forgot-password/${formData.phoneno}/${formData.newPassword}`);

      if (response.data === 'success') {
        navigate('/');
      } else {
        console.error('Password reset failed');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md justify-center">
      
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Reset Password</h1>

<form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-left">Phone Number:</label>
            <input 
              type="text" 
              value={formData.phoneno} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-left">New Password:</label>
            <input 
              type="text" 
              value={formData.newPassword} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-left">ConfirmPassword:</label>
            <input 
              type="password" 
              value={formData.confirmPassword}
              onChange={handleChange} 
              className="w-full px-4 py-2 border mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required
            />
            <button type="submit" className="w-full m-0 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Reset Password
          </button>
          </div>
      </form>
    </div>
    </div>
  );
};

export default ForgotPassword;