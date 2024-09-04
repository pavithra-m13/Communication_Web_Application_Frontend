

// import React, { useState, useEffect } from 'react';
// import InputEmoji from 'react-input-emoji';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Typography } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faImage } from '@fortawesome/free-solid-svg-icons';

// const ChatWindow = ({ connid, conname, userid, username, onUpdateUnreadMessages }) => {
//   const [ws, setWs] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState('');
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:8080/messages/conversation/${userid}/${connid}`)
//       .then(response => response.json())
//       .then(data => {
//         if (Array.isArray(data)) {
//           setMessages(data);
//         } else {
//           console.error("Fetched data is not an array:", data);
//         }
//       })
//       .catch(error => console.error('Error fetching messages:', error));

//     const wsUrl = `ws://localhost:8080/hello?userid=${encodeURIComponent(userid)}`;
//     const newWs = new WebSocket(wsUrl);

//     newWs.onmessage = function (e) {
//       const messageData = JSON.parse(e.data);
//       console.log(messageData);
//       if (
//         (messageData.receiver === userid && messageData.sender === connid) ||
//         (messageData.receiver === connid && messageData.sender === userid)
//       ) {
//         setMessages((prevMessages) => [...prevMessages, messageData]);
//       } else if (messageData.receiver !== connid) {
//         setNotification(messageData);
//       }
//     };

//     setWs(newWs);

//     return () => {
//       if (newWs) {
//         newWs.close();
//       }
//     };
//   }, [connid, userid]);

//   const setNotification = (messageData) => {
//     const notificationMessage = (
//       <div>
//         <span>{messageData.sendername}: {decodeURIComponent(messageData.message)}</span>
//         {messageData.image && (
//           <FontAwesomeIcon icon={faImage} style={{ marginLeft: '8px', color: '#000' }} />
//         )}
//       </div>
//     );

//     toast.info(notificationMessage, {
//       autoClose: 5000,
//       closeButton: true,
//       icon: false
//     });

//     onUpdateUnreadMessages(messageData.sender, messageData.message);
//   };

//   const sendMessage = () => {
//     if (!ws || (!text.trim() && !imageUrl)) return;

//     const messageObject = {
//       receiver: connid,
//       receivername: conname,
//       sender: userid,
//       message: encodeURIComponent(text),
//       sendername: username,
//       timestamp: formatTimestamp(new Date().toISOString()),
//       edit: false,
//       image: imageUrl || null
//     };

//     setMessages((prevMessages) => [...prevMessages, messageObject]);
//     ws.send(JSON.stringify(messageObject));
//     console.log(messageObject);

//     setText(''); // Clear the input field after sending
//     setImage(null); // Clear the image after sending
//     setImageUrl(null);
//     setPreviewUrl(null); // Clear the preview URL after sending
//   };

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const previewUrl = URL.createObjectURL(file);
//       setPreviewUrl(previewUrl);

//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         const response = await fetch('http://localhost:8080/uploads', {
//           method: 'POST',
//           body: formData
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log(data.url);
//           setImageUrl(data.url); // Set the URL for the image
//         } else {
//           console.error('Image upload failed:');
//         }
//       } catch (error) {
//         console.error('Error uploading image:', error);
//       }
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === 'Enter') {
//       sendMessage();
//     }
//   };

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
//   };

//   return (
//     <div className="flex flex-col h-full bg-white shadow-md rounded-lg">
//       {/* Contact Header */}
//       <div className="contact-header bg-[#4A90E2] text-white p-4 rounded-t-lg">
//         <h2 className="text-lg">{conname}</h2>
//       </div>

//       {/* Messages Area */}
//       <div className="flex-1 p-4 overflow-y-auto bg-white">
//         {messages.map((msg, index) => (
//           <div key={index} className={`flex ${msg.sender === userid ? 'justify-end' : ''}`}>
//             <div>
//               {msg.sender === userid ? (
//                 <div className="w-7 h-7 bg-[#4A90E2] text-white rounded-full items-center justify-center text-lg font-bold mr-auto">
//                   {username.charAt(0).toUpperCase()}
//                 </div>
//               ) : (
//                 <div className="w-7 h-7 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-lg font-bold">
//                   {conname.charAt(0).toUpperCase()}
//                 </div>
//               )}
//             </div>

//             <div className={`message rounded-lg p-2 my-2 ${msg.sender === userid ? 'bg-[#E6F7FF] text-[#333333] text-right' : 'bg-[#f6f6f6] text-[#333333] mr-auto text-left'}`}>
//               <div className="message-content">
//                 {msg.message && <p>{decodeURIComponent(msg.message)}</p>}
//                 {msg.image && (
//                   <img
//                     src={msg.image}
//                     alt="Uploaded"
//                     className="uploaded-image"
//                     style={{ maxWidth: '500px', maxHeight: '400px', display: 'block' }}
//                   />
//                 )}
//                 <Typography variant="caption" color="textSecondary" style={{ fontSize: '0.8rem', color: "#888", display: 'block' }}>
//                   {msg.timestamp}
//                 </Typography>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="input-container flex items-center p-2 border-t border-[#E0E0E0] bg-white">
//         <label htmlFor="image-upload" className="cursor-pointer">
//           <FontAwesomeIcon icon={faImage} size="lg" />
//           <input
//             id="image-upload"
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="hidden"
//           />
//         </label>
//         {previewUrl && (
//           <img
//             src={previewUrl}
//             alt="Preview"
//             className="image-preview"
//             style={{ maxWidth: '100px', maxHeight: '100px', marginLeft: '10px' }}
//           />
//         )}
//         <InputEmoji
//           value={text}
//           onChange={setText}
//           cleanOnEnter
//           onEnter={sendMessage}
//           placeholder="Type a message"
//           className="flex-1 border rounded-lg px-3 py-2"
//           onKeyPress={handleKeyPress}
//         />
//         <button
//           onClick={sendMessage}
//           className="ml-2 px-4 py-2 bg-[#4A90E2] text-white rounded-lg"
//         >
//           Send
//         </button>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default ChatWindow;

import React, { useState, useEffect } from 'react';
import InputEmoji from 'react-input-emoji';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import {useSpeechRecognition} from 'react-speech-kit';
import { Avatar } from 'antd';

const ChatWindow = ({ connid, conname, userid, username,userimg, onUpdateUnreadMessages,conimg }) => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const {listen,stop}=useSpeechRecognition({
    onResult: (result)=>{
      setText(result);
    }
  }) ; 

  useEffect(() => {
    fetch(`http://localhost:8080/messages/conversation/${userid}/${connid}`)
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch(error => console.error('Error fetching messages:', error));

    const wsUrl = `ws://localhost:8080/hello?userid=${encodeURIComponent(userid)}`;
    const newWs = new WebSocket(wsUrl);

    newWs.onmessage = function (e) {
      const messageData = JSON.parse(e.data);
      console.log(messageData);
      if (
        (messageData.receiver === userid && messageData.sender === connid) ||
        (messageData.receiver === connid && messageData.sender === userid)
      ) {
        setMessages((prevMessages) => [...prevMessages, messageData]);
      } else if (messageData.receiver !== connid) {
        setNotification(messageData);
      }
    };

    setWs(newWs);

    return () => {
      if (newWs) {
        newWs.close();
      }
    };
  }, [connid, userid]);

  const setNotification = (messageData) => {
    const notificationMessage = (
      <div>
        <span>{messageData.sendername}: {decodeURIComponent(messageData.message)}</span>
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

    onUpdateUnreadMessages(messageData.sender, messageData.message);
  };

  const sendMessage = () => {
    if (!ws || (!text.trim() && !imageUrl)) return;

    const messageObject = {
      receiver: connid,
      receivername: conname,
      sender: userid,
      message: encodeURIComponent(text),
      sendername: username,
      timestamp: formatTimestamp(new Date().toISOString()),
      edit: false,
      image: imageUrl || null
    };

    setMessages((prevMessages) => [...prevMessages, messageObject]);
    ws.send(JSON.stringify(messageObject));
    console.log(messageObject);

    setText('');
    setImage(null);
    setImageUrl(null);
    setPreviewUrl(null);
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
          console.log(data.url);
          setImageUrl(data.url);
        } else {
          console.error('Image upload failed:');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-md rounded-lg">
     <div className="contact-header bg-[#4A90E2] text-white p-4 rounded-t-lg flex">
      {conimg?
        (<img src={`data:image/png;base64,${conimg}`} className='w-12 h-12 rounded-full'></img>):<div><Avatar>{}</Avatar></div>}
        <h2 className="text-lg ml-4">{conname}</h2>
      </div>

      <div className="flex-1 p-4 overflow-y-auto bg-white">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === userid ? 'justify-end' : ''}`}>
            <div>
              {msg.sender === userid ? (
                <div className="w-7 h-7 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-lg font-bold">
 {userimg?
        (<img src={`data:image/png;base64,${userimg}`} className='w-12 h-12 rounded-full'></img>):<div>{username.charAt(0)}</div>}                </div>
              ) : (
                <div className="w-7 h-7 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-lg font-bold">
                   {conimg?
        (<img src={`data:image/png;base64,${conimg}`} className='w-14 h-12 rounded-full'></img>):<div>{msg.sendername.charAt(0)}</div>}
                </div>
              )}
            </div>

            <div className={`message rounded-lg p-2 my-2 ${msg.sender === userid ? 'bg-[#E6F7FF] text-[#333333] text-right' : 'bg-[#f6f6f6] text-[#333333] mr-auto text-left'}`}>
              <div className="message-content">
                {msg.message && <p>{decodeURIComponent(msg.message)}</p>}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="Uploaded"
                    className="uploaded-image"
                    style={{ maxWidth: '500px', maxHeight: '400px', display: 'block' }}
                  />
                )}
                <Typography variant="caption" color="textSecondary" style={{ fontSize: '0.8rem', color: "#888", display: 'block' }}>
                  {msg.timestamp}
                </Typography>
              </div>
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
    </div>
  );
};

export default ChatWindow;


