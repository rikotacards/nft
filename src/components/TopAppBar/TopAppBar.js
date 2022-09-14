import React from 'react';
import {useNavigate} from 'react-router-dom'
import {AppBar, Toolbar, Button, Typography} from '@mui/material'
export const TopAppBar = () => {

  const navigate = useNavigate();
  const onClick = React.useCallback(
    () => navigate(`/`, { replace: true }),
    [navigate]
  );
  return (
    <AppBar position="fixed">
    <Toolbar><Button sx={{color: 'white'}} onClick={onClick}>
      <Typography >FTX NFT</Typography>
      </Button>
      </Toolbar>
  </AppBar>
  )
}