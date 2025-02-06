import React from "react";
import { Header } from "@/Layout/Header";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CustomImageButton from "@/Component/CustomImageButton";
import SocialShareIcons from "@/Layout/SocialShareIcons";
import ImageCommon from "@/Component/ImageComponent/ImageCommon";
import Slider from "react-slick";
import { AutoCompleteSearch } from "@/Component/AutoCompleteSearch";
import { useState } from "react";
import { useEffect } from "react";


export const HomeBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 const banners = [
   {
     id: 1,
     banner_image: "/assets/banner/banner.webp",
     title: " Meet With Your Best Doctor Here",
     des_banner:
       "Ridiculus elit amet sagittis arcu ornare, amet a ameturna, vitae cras, ipsum sociosqu.",
   },
   {
     id: 2,
     banner_image: "/assets/banner/banner.webp",
     title: "DDC GASTRO",
     des_banner:
       "Our specialist doctor trained in diseases of the Digestive system provides diagnosis and treatment of diseases of esophagus, stomach, pancreas, liver, gallbladder and bile duct, spleen and colon and rectum",
   },
   {
     id: 3,
     banner_image: "/assets/banner/banner.webp",
     title: "GASTRO TREATMENT",
     des_banner:
       "Gastrointestinal problems are one of the most distressing for the patient which seriously affects the quality of life. Treatment of such complex problems needs high expertise and multidisciplinary support .",
   },
 ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: banners?.length > 1,
    infinite: banners?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    lazyLoad: "ondemand",
    customPaging: () => <div className="reactslick-custom-dots" />,
    appendDots: dots => (
      <div style={{ bottom: isMobile ? '-20px' : '20px' }}> {/* Adjust the bottom position for mobile */}
        <ul> {dots} </ul>
      </div>
    ),
  };
  return (
    <>
     
      <section>
        <Box sx={{ position: "relative" }} className="banner-selections">
          <Slider {...settings} className="slider-white-dots">
            {banners.map((item) => (
              <Box key={item.id}>
                <ImageCommon
                  src={item.banner_image}
                  alt="banner"
                  aspectRatio={2.5}
                  objectFit="content"
                  priority
                  className="responsive-image"
                />
                <Container>
                  <Box
                    className="non-filter"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 4,
                      position: "absolute",
                      top: "20%",
                      '@media (max-width: 768px)': {
                        position: "relative", // Adjust the top position for mobile view
                        marginTop:"40px"
                      },
                    }}
                  >
                    <Box sx={{ width: { xs: "80%", md: "60%" } }}>
                      <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                          fontSize: { xs: "16px", sm: "40px", md: "54px" },
                          color: "#000",
                          fontWeight: 600,
                          lineHeight: "1.2em",
                          position: "relative",
                          fontFamily: "DM Sans",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Box sx={{ width: { xs: "300px", md: "40%" } }}>
                      <Typography
                        variant="p"
                        component="p"
                        sx={{
                          fontSize: { xs: "14px", md: "16px" },
                          color: "#000",
                          fontWeight: 400,
                          lineHeight: "1.2em",
                          position: "relative",
                          fontFamily: "DM Sans",
                          opacity: 0.8,
                        }}
                      >
                        {item.des_banner}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: { xs: 2, md: 5 }, pt: 1 }}>
                      <CustomImageButton
                      
                        label="Appointment"
                        sx={{
                          backgroundColor: "#07447e",
                          "&:hover": {
                            backgroundColor: "#87b94a",
                          },
                        }}
                        
                      />
                      <Button
                        sx={{
                          backgroundColor: "transparent",
                          color: "#07447e",
                          px: { xs: 3, md: 5 },
                          py: 2,
                          height: "48px",
                          fontFamily: "DM Sans",
                          fontSize: "14px",
                          fontWeight: 500,
                          borderRadius: "50px",
                          border: "1px solid #07447e",
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                    <Box sx={{ width: { xs: "100%", md: "600px" } }}>
                      <AutoCompleteSearch placeholder="Search for Doctors and Specialities" />
                    </Box>
                  </Box>
                </Container>
              </Box>
            ))}
          </Slider>
        </Box>
      </section>
    </>
  );
};
