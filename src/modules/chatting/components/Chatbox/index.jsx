import React, { useState } from 'react';
import { Box } from '../../../../../node_modules/@mui/material/index';
import Header from './Header';
import Body from './Body';
import Tools from './Tools';
import CommentIcon from '@mui/icons-material/Comment';

const Chatbox = () => {
  const [openChatBox, setOpenChatBox] = useState(false);

  const handleSendMessage = (msg) => {
    console.log(msg);
  };

  const handleClickChat = () => {
    setOpenChatBox((prev) => !prev);
  };

  return (
    <>
      {openChatBox && (
        <Box
          sx={{
            width: '328px',
            height: '455px',
            backgroundColor: 'white',
            position: 'fixed',
            bottom: '0',
            right: '90px',
            zIndex: 100,
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Header />
          <Body messages={[]} />
          <Tools onSendMessage={handleSendMessage} />
        </Box>
      )}

      <Box
        sx={{
          width: '50px',
          height: '50px',
          backgroundColor: 'white',
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 100,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          filter: 'drop-shadow(rgba(255, 255, 255, 0.8) 0px 0px 20px)',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onClick={handleClickChat}
      >
        <CommentIcon />
      </Box>
    </>
  );
};

export default Chatbox;
