import { Box, Typography } from '@mui/material';
import React from 'react'

const TitleComponent = (props) => {
  const { title } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: {xs:'18px', md: "26px !important"},
          fontWeight: 800,
          fontFamily: '"DM Sans", sans-serif',
        }}
      >
        {title}
      </Typography>
      <div className="glory-line">
        <span></span>
      </div>
    </Box>
  );
};

export default TitleComponent