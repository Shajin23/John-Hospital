import CustomImageButton from "@/Component/CustomImageButton";
import DatePickerExample from "@/Component/DatePickerFieldNew";
import DatePickerFieldNew from "@/Component/DatePickerFieldNew";
import ImageCommon from "@/Component/ImageComponent/ImageCommon";
import TextFormField from "@/Component/InputField";
import SelectField from "@/Component/selector";
import TitleComponent from "@/Component/TitleComponent";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const HomeBook = () => {
  const { control } = useForm();
  return (
    <Box
      sx={{
        pt: { xs: 3, sm: 4, md: "10px" },
        pb: { xs: 3, sm: 4, md: "25px" },
      }}
    >
      <Container
        maxWidth={"lg"}
        sx={{
          maxWidth: { xl: "77% !important", lg: "77% !important" },
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "start" },
            }}
            className="zoom-img-book"
          >
            <ImageCommon
              src={"/assets/dummy/book-img.webp"}
              alt="banner"
              aspectRatio={0.92}
              objectFit="content"
              priority
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <Box
              sx={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                borderRadius: "8px",
                py: {xs: 3, md:6},
                px: {xs: 2, md:4},
              }}
            >
              <Box>
                <TitleComponent title={"Book Appointment"} />
                <Box sx={{ width: {md: "380px"}, mt: "6px" }}>
                  <Box sx={{ marginBottom: "26px" }}>
                    <SelectField
                      name="Department"
                      control={control}
                      label="Select Department"
                      Controller={Controller}
                      className={"book-select-input"}
                    />
                  </Box>
                  <Box sx={{ marginBottom: "26px" }}>
                    <SelectField
                      name="Doctor"
                      control={control}
                      label="Select Doctor"
                      Controller={Controller}
                      className={"book-select-input"}
                    />
                  </Box>
                  <Box sx={{ marginBottom: "8px" }}>
                    <TextFormField
                      placeholder="Full Name"
                      name="fullname"
                      control={control}
                      Controller={Controller}
                      type="text"
                      className="textfield-homeform"
                    />
                  </Box>
                  <Box sx={{ marginBottom: "8px" }}>
                    <TextFormField
                      placeholder="Phone Number"
                      name="number"
                      control={control}
                      Controller={Controller}
                      type="text"
                      className="textfield-homeform"
                    />
                  </Box>
                  <Box sx={{ marginBottom: "26px" }}>
                    <DatePickerExample
                      placeholder={"Appointment Date"}
                      className={"datepicker-sections"}
                    />
                  </Box>

                  <CustomImageButton
                    label="Book your Appointment"
                    sx={{
                      backgroundColor: "#669934",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "#87b94a",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeBook;
