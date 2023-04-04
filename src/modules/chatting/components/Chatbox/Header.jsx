import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import { grey } from '@mui/material/colors';

const Header = () => {
  return (
    <Box
      sx={{
        width: 'inherit',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px',
      }}
    >
      {/* user name */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            width: '32px',
            height: '32px',
            marginRight: '8px',
          }}
          alt='Remy Sharp'
          src='/static/images/avatar/1.jpg'
        />
        <Typography>Duong Doan</Typography>
      </Box>
      {/* actions */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginRight: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '25px',
            height: '25px',
            padding: '2px',
            cursor: 'pointer',
            marginLeft: '4px',
          }}
        >
          <CallIcon
            color='disabled'
            sx={{
              '&:hover': {
                color: grey[800],
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '25px',
            height: '25px',
            padding: '2px',
            cursor: 'pointer',
            marginLeft: '4px',
          }}
        >
          <VoiceChatIcon
            color='disabled'
            sx={{
              '&:hover': {
                color: grey[800],
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '25px',
            height: '25px',
            padding: '2px',
            cursor: 'pointer',
            marginLeft: '4px',
          }}
        >
          <MinimizeIcon
            color='disabled'
            sx={{
              '&:hover': {
                color: grey[800],
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '25px',
            height: '25px',
            padding: '2px',
            cursor: 'pointer',
            marginLeft: '4px',
          }}
        >
          <CloseIcon
            color='disabled'
            sx={{
              '&:hover': {
                color: grey[800],
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
