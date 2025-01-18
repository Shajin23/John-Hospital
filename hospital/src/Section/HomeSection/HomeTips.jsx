import CustomImageButton from "@/Component/CustomImageButton";
import ImageCommon from "@/Component/ImageComponent/ImageCommon";
import TitleComponent from "@/Component/TitleComponent";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const HomeTips = () => {

    const tips = [
        {
          id: 1,
          image: "/assets/dummy/image-doctor.webp",
          data: '24 March 2019',
          title: " Medical and Love Have 4 Things In Common",
          text: "Consequat vulputate eget metumpeng magna commodo purus etiam.",
          dec: "Doctor, Clinic",
        },
        {
          id: 2,
          image: "/assets/dummy/image-doctor.webp",
          data: '24 March 2019',
          title: " Medical and Love Have 4 Things In Common",
          text: "Consequat vulputate eget metumpeng magna commodo purus etiam.",
          dec: "Doctor, Clinic",
        },
        {
          id: 3,
          image: "/assets/dummy/image-doctor.webp",
          data: '24 March 2019',
          title: " Medical and Love Have 4 Things In Common",
          text: "Consequat vulputate eget metumpeng magna commodo purus etiam.",
          dec: "Doctor, Clinic",
        },
        {
          id: 4,
          image: "/assets/dummy/image-doctor.webp",
          data: '24 March 2019',
          title: " Medical and Love Have 4 Things In Common",
          text: "Consequat vulputate eget metumpeng magna commodo purus etiam.",
          dec: "Doctor, Clinic",
        },
        {
          id: 5,
          image: "/assets/dummy/image-doctor.webp",
          data: '24 March 2019',
          title: " Medical and Love Have 4 Things In Common",
          text: "Consequat vulputate eget metumpeng magna commodo purus etiam.",
          dec: "Doctor, Clinic",
        },
      ];

      const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        swipe: tips?.length > 4,
        infinite: tips?.length > 4,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        lazyLoad: "ondemand",
        customPaging: () => <div className="reactslick-custom-dots" />,
      };
  return (
    <Box sx={{ pt: { xs: 3, sm: 4, md: "20px" }, pb: {md: 10} }}>
      <Container
        maxWidth={"lg"}
        sx={{
          maxWidth: { xl: "77% !important", lg: "77% !important" },
        }}
      >
        <Box
          className="non-filter"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TitleComponent title={"Latest News & Tips"} />
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
              cras quintum. Feugiat elit placerat. Diam tempor malesuada.
            </Typography>
          </Box>

          <Box>
          <Slider {...settings} className="comments-slider tips-slider">
          {tips.map((item) => (
            <Box sx={{ border: "1px solid #afafaf", borderRadius: "8px" }} key={item.id} className='card-box'>
              <Box sx={{ position: "relative" }} >
                <ImageCommon
                  src={"/assets/dummy/image-doctor.webp"}
                  width='100%'
                  height={200}
                />
                <Box sx={{ position: "absolute", bottom: "-15px", left: '15%' }}>
                  <CustomImageButton
                    label="24 March 2019"
                    sx={{ backgroundColor: "#07447e",  height: "30px !important", }}
                  />
                </Box>
              </Box>
              <Box sx={{ padding: 2 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 400,
                    color: "#454F5E",
                    lineHeight: { xs: "20px", md: "20px" },
                    fontSize: { xs: "16px", md: "16px" },
                    fontFamily: "DM Sans",
                    mb: { xs: 2, sm: 3, md: "20px" },
                    textAlign: "end",
                    pt: 2
                  }}
                  component="h2"
                >
                  doctor, clinic
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 600,
                    color: "#000",
                    lineHeight: { xs: "20px", md: "20px" },
                    fontSize: { xs: "16px", md: "18px" },
                    fontFamily: "DM Sans",
                    mb: "12px" ,
                  }}
                  component="h2"
                >
                  Medical and Love Have 4 Things In Common
                </Typography>
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
                  Consequat vulputate eget metumpeng magna commodo purus etiam.
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "transparent",
                    color: "#afafaf",
                    px: { xs: 3, md: 3 },
                    py: 2,
                    height: "40px",
                    fontFamily: "DM Sans",
                    fontSize: "12px",
                    fontWeight: 500,
                    borderRadius: "50px",
                    border: "1px solid #afafaf",
                  }}
                >
                  READ MORE
                </Button>
              </Box>
            </Box>
            ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeTips;
