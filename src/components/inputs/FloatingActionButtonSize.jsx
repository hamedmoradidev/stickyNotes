import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ColoredButtons from './ColoredButtons';
import { useState } from 'react';

export default function FloatingActionButtonSize() {
  const [showColoredButtonsState, setShowColoredButtonsState] = useState(false)
  const ShowColoredButtonsChange = () => setShowColoredButtonsState(true)
  return (
    <Box className='fixed top-0 right-0' sx={{m: 5}}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon onClick={ShowColoredButtonsChange} />
      </Fab>
        { showColoredButtonsState ? <ColoredButtons /> : null }
    </Box>
  );
}