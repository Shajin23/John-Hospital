import ImageCommon from "@/Component/ImageComponent/ImageCommon";
import TitleComponent from "@/Component/TitleComponent";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const HomeComments = () => {
  const comments = [
    {
      id: 1,
      title:
        "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integracu lectus id maecenas.",
      name: "Marina Tusa",
      text: "Housewief",
    },
    {
      id: 2,
      title:
        "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integracu lectus id maecenas.",
      name: "Marina Tusa",
      text: "Housewief",
    },
    {
      id: 3,
      title:
        "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integracu lectus id maecenas.",
      name: "Marina Tusa",
      text: "Housewief",
    },
    {
      id: 4,
      title:
        "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integracu lectus id maecenas.",
      name: "Marina Tusa",
      text: "Housewief",
    },
  ];
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: comments?.length > 3,
    infinite: comments?.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    lazyLoad: "ondemand",
    customPaging: () => <div className="reactslick-custom-dots" />,
  };
  return (
    <Box sx={{ pt: { xs: 3, sm: 4, md: "20px" } }}>
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
          <TitleComponent title={"WHAT OUR PATIENTS ARE SAYING"} />
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
        </Box>

        <Box sx={{ py: 5 }}>
          <Slider {...settings} className="comments-slider">
            {comments.map((item) => (
              <>
                <Box
                 key={item.id}
                  sx={{
                    p: 3.5,
                    boxShadow:
                      "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                    borderRadius: "12px",
                  }}
                >
                  <Box>
                    <ImageCommon
                      src={""}
                      height="20px"
                      width="20px"
                      objectFit="cover"
                    />
                    <Typography
                      variant="p"
                      component="p"
                      sx={{
                        fontSize: { xs: "14px", md: "14px" },
                        opacity: "0.8",
                        color: "#333",
                        fontWeight: 700,
                        lineHeight: "24px",
                        fontFamily: "Prata",
                        pt: 1
                      }}
                      className="text-truncate"
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ paddingTop: 2, paddingLeft: 5 }}>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#000",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    Marin Tusa
                  </Typography>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      fontSize: { xs: "14px", md: "14px" },
                      opacity: "0.8",
                      color: "#333",
                      fontWeight: 400,
                      lineHeight: "18px",
                    }}
                  >
                    Marin Tusa
                  </Typography>
                </Box>
              </>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeComments;
