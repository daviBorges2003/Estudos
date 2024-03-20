import * as React from 'react';
import {Box, List, Divider,ListItem,ListItemButton ,ListItemIcon,ListItemText,}from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Close from '@mui/icons-material/Close'

export default function SideBar ({CloseSideBar}) {

    console.log(CloseSideBar);
  return (
    <Box 
        sx={{ width: 250 }}
        role="presentation">
      <List>
          <ListItem disablePadding>
            <ListItemButton onClick={CloseSideBar}>
              <ListItemIcon >
                <Close/>
              </ListItemIcon>
              <ListItemText primary="Close"/>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}