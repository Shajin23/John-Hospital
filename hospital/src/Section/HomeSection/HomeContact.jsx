import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HomeContact = () => {
  return (
    <Box sx={{ backgroundColor: "#669934", padding: 5 }}>
      <Container
        maxWidth={"lg"}
        sx={{
          maxWidth: { xl: "77% !important", lg: "77% !important" },
        }}
      >
        <Grid container>
          <Grid item xs={9}>
            <Box sx={{ pl: 4 }}>
              <Typography
                sx={{
                  fontSize: { xs: "28px", sm: "40px", md: "38px" },
                  color: "#fff",
                  fontWeight: 600,
                  lineHeight: "1.4em",
                  position: "relative",
                  fontFamily: "DM Sans",
                }}
              >
                30% Off Any Djagnestic Let's Check
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  color: "#fff",
                  fontWeight: 400,
                  lineHeight: "1.2em",
                  position: "relative",
                  fontFamily: "DM Sans",
                  opacity: 0.8,
                  mt: 2,
                }}
              >
                You can get upto 30% off for 45 days in here! So Contact with Us
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100%'}}>
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "#07447e",
                px: { xs: 3, md: 5 },
                py: 2,
                height: "50px",
                fontFamily: "DM Sans",
                fontSize: "18px",
                fontWeight: 700,
                borderRadius: "50px",
              }}
            >
              Book Now
            </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeContact;
