import React from 'react';
import { Popover, Box, Button, Typography } from '@mui/material';
import { Divider } from 'antd';

const ProfilePopover = ({ anchorEl, onClose, onProfileClick, onLogoutClick }) => {
  const open = Boolean(anchorEl);
  const id = open ? 'profile-popover' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Box sx={{ p: 0 }}>
       
        <Button onClick={onProfileClick} fullWidth  sx={{p:2, backgroundColor:'transparent',color:'black','&:hover':{backgroundColor:'transparent',boxShadow:'none'},boxShadow:'none',color:'#828282'}} >
          Profile
        </Button>
       
        
     
        <Button onClick={onLogoutClick} fullWidth variant="contained" sx={{p:2,backgroundColor:'transparent',color:'black','&:hover':{backgroundColor:'transparent',boxShadow:'none'},boxShadow:'none',color:'#828282'}}>
          Logout
        </Button>
      </Box>
    </Popover>
  );
};

export default ProfilePopover;