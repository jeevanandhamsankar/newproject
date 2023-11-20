import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Pro =styled(Paper)(({theme}) => ({
    padding:theme.spacing(20),
    textAlign:'center',
    color:'red',
}));

function Horizontalscrollgrid() {
    return(
        <div style={{ overflow:'scroll', whiteSpace:'nowrap'}}>
            <Box style={{display:'flex'}}>
                {[1,2,3,4,5].map((item) => (
                    <Pro key={item}>Item{item}</Pro>
                ))}
            </Box>
        </div>
    );
}

export default Horizontalscrollgrid;