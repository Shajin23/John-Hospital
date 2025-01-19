import CustomImageButton from "@/Component/CustomImageButton";
import ImageCommon from "@/Component/ImageComponent/ImageCommon";
import TitleComponent from "@/Component/TitleComponent";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Homespecialities = () => {
  const specialities = [
    {
      id: 1,
      image: "/assets/dummy/esophagus.png",
      title: "Esophagus",
    },
    {
      id: 2,
      image: "/assets/dummy/stomach.png",
      title: "Stomach",
    },
    {
      id: 3,
      image: "/assets/dummy/liver.png",
      title: "liver",
    },
    {
      id: 4,
      image: "/assets/dummy/gallbladder.png",
      title: "Gallbladder",
    },
    {
      id: 5,
      image: "/assets/dummy/pancreas.png",
      title: "Colon and Rectum ",
    },
    {
      id: 6,
      image: "/assets/dummy/smallintestine.png",
      title: "Small Intestine",
    },
  ];
  return (
    <Box sx={{ py: { xs: 3, sm: 4, md: "150px" }, background: "#f0f0f0" }}>
      <Container
        maxWidth={"lg"}
        sx={{
          maxWidth: { xl: "77% !important", lg: "77% !important" },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <TitleComponent title={"Our Specialities"} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 400,
                  color: "#454F5E",
                  lineHeight: { xs: "20px", md: "22px" },
                  fontSize: { xs: "16px", md: "16px" },
                  fontFamily: "DM Sans",
                  mb: { xs: 2, sm: 3, md: "20px" },
                }}
                component="h2"
              >
                Condimentum rutrum placerat egestas condimentum mi eros.
                Eleifend cras quirntum Feugiat elit placert. Diam tempor
                malesuada.
              </Typography>
              <CustomImageButton
                label="VIEW ALL"
                sx={{ backgroundColor: "#669934", "&:hover": {
                        backgroundColor: "#87b94a",
                      },}}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              {specialities.map((item) => (
                <Grid item xs={4} key={item.id}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                     className="zoom-img"
                  >
                    <ImageCommon
                      src={item.image}
                      original={true}
                      height="84px"
                      width="84px"
                      objectFit="cover"
                    />
                    <Box sx={{ my: 3 }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontWeight: 600,
                          color: "#000",
                          lineHeight: { xs: "20px", md: "22px" },
                          fontSize: { xs: "16px", md: "18px" },
                          fontFamily: "DM Sans",
                        }}
                        component="h2"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Homespecialities;
