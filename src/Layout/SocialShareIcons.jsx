import { Box, Button, Container } from '@mui/material';
import React from 'react'


const SocialShareIcons = () => {

  return (
    <Box sx={{ backgroundColor: "#669934" }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "end", py: 3 }}>
          <Box sx={{ width: "150px", borderRadius: "50px" }}>
            <select name="pets" id="pet-select" className="language-select">
              <option value="dog">English</option>
              <option value="cat">Tamil</option>
            </select>
          </Box>
          <Button
            sx={{
              backgroundColor: "transparent",
              color: "#FFF",
              px: { xs: 3, md: 5 },
              py: 2,
              height: "48px",
              fontFamily: "DM Sans",
              fontSize: "14px",
              fontWeight: 500,
              borderRadius: "50px",
              border: "1px solid #FFF",
            }}
          >
            PATIENT LOGIN
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default SocialShareIcons