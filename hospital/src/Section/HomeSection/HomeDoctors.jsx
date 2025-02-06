import CustomImageButton from "@/Component/CustomImageButton";
import ImageCommon from "@/Component/ImageComponent/ImageCommon";
import TitleComponent from "@/Component/TitleComponent";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HomeDoctors = () => {
  const doctiors = [
    {
      id: 1,
      image: "/assets/dummy/doctor-image.webp",
      title: " Dr: John Grifson",
      text: "Gastoroenterology, MBBS",
      dec: "Pharetra ultricies aenean, sit metus integer arcu turpis dnidimentum pellentesque world.",
    },
    {
      id: 2,
      image: "/assets/dummy/doctor-image.webp",
      title: " Dr: John Grifson",
      text: "Gastoroenterology, MBBS",
      dec: "Pharetra ultricies aenean, sit metus integer arcu turpis dnidimentum pellentesque world.",
    },
    {
      id: 3,
      image: "/assets/dummy/doctor-image.webp",
      title: " Dr: John Grifson",
      text: "Gastoroenterology, MBBS",
      dec: "Pharetra ultricies aenean, sit metus integer arcu turpis dnidimentum pellentesque world.",
    },
    {
      id: 4,
      image: "/assets/dummy/doctor-image.webp",
      title: " Dr: John Grifson",
      text: "Gastoroenterology, MBBS",
      dec: "Pharetra ultricies aenean, sit metus integer arcu turpis dnidimentum pellentesque world.",
    },
  ];
  return (
    <Box className="glory-sections" py={5}>
      <Container
        maxWidth="lg"
        sx={{ maxWidth: { xl: "77% !important", lg: "77% !important" } }}
      >
        <Box
          className="non-filter"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TitleComponent title={"Our Doctors"} />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                opacity: "0.8",
                color: "#454F5E",
                fontWeight: 400,
                lineHeight: "28px",
                textAlign: "center",
                width: "60%",
              }}
            >
              Condimentum rutrum placerat egestas condimentum mi eros. Eleifend
              cras quirntum Feugiat elit placert. Diam tempor malesuada.
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={2} sx={{ pt: 15 }}>
          {doctiors.map((item) => (
            <Grid item xs={6} md={3} key={item.id}>
              <Box
                sx={{
                  border: "3px solid #e2fac9",
                  borderRadius: "12px",
                  position: "relative",
                  // height: "200px",
                  padding: "10px",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "-150px",
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    left: "50%",
                    right: "50%",
                    // width: "100%",
                  }}
                >
                  <Box
                    className="zoom-img"
                    sx={{ backgroundColor: "#fff", padding: 2 }}
                  >
                    <ImageCommon
                      src={item.image}
                      original={true}
                      height="200px"
                      width="170px"
                      objectFit="cover"
                    />
                  </Box>
                </Box>
                <Box sx={{ marginTop: "100px" }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 600,
                      color: "#000",
                      lineHeight: { xs: "20px", md: "22px" },
                      fontSize: { xs: "16px", md: "18px" },
                      fontFamily: "DM Sans",
                      textAlign: "center",
                    }}
                    component="h2"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 400,
                      color: "#454F5E",
                      lineHeight: { xs: "20px", md: "22px" },
                      fontSize: { xs: "16px", md: "16px" },
                      fontFamily: "DM Sans",
                      my: { xs: 2, sm: 3, md: "10px" },
                      textAlign: "center",
                    }}
                    component="h2"
                  >
                    {item.text}
                  </Typography>

                  <Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 400,
                        color: "#454F5E",
                        lineHeight: { xs: "20px", md: "22px" },
                        fontSize: { xs: "16px", md: "16px" },
                        fontFamily: "DM Sans",
                        mb: { xs: 2, sm: 3, md: "20px" },
                        textAlign: "center",
                      }}
                      component="h2"
                    >
                      {item.dec}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{display: "flex", justifyContent: "center", pt: 5}}>
          <CustomImageButton
            label="VIEW ALL"
            sx={{ backgroundColor: "#07447e", "&:hover": {
      backgroundColor: "#0a68b0",
    },marginBottom:"0 !important" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HomeDoctors;
