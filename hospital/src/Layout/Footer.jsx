import React from "react";
import { Header } from "@/Layout/Header";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ImageCommon from "@/Component/ImageComponent/ImageCommon";
import CustomImageButton from "@/Component/CustomImageButton";

export const HomeFooter = () => {
  return (
    <>
      <section className="footer">
        <Container
          maxWidth={"lg"}
          sx={{
            maxWidth: { xl: "77% !important", lg: "77% !important" },
          }}
        >
          <Grid container>
            <Grid item xs={4}>
              <Box>
                <Box>
                  <Link href="/">
                    <ImageCommon
                      src="/assets/logo/logo.svg"
                      original={true}
                      height="55px"
                      width="170px"
                      objectFit="cover"
                    />
                    <div className="glory-line">
                      <span></span>
                    </div>
                  </Link>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      fontSize: { xs: "14px", md: "14px" },
                      color: "#ffff",
                      fontWeight: 400,
                      lineHeight: "22px",
                      width: "90%",
                    }}
                  >
                    Condimentum rutrum placerat egestas condimentum mi eros.
                    Eleifend cras quintum. Feugiat elit placerat. Diam tempor
                    malesuada.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  fontFamily: '"DM Sans", sans-serif',
                  color: "#fff",
                }}
              >
                Useful Links
              </Typography>
              <div className="glory-line">
                <span></span>
              </div>
              <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <ImageCommon
                  src="/assets/icons/arrow-icons.svg"
                  height="15px"
                  width="15px"
                  objectFit="cover"
                />
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    fontSize: { xs: "14px", md: "14px" },
                    color: "#ffff",
                    fontWeight: 400,
                  }}
                >
                  About
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  fontFamily: '"DM Sans", sans-serif',
                  color: "#fff",
                }}
              >
                Our Services
              </Typography>
              <div className="glory-line">
                <span></span>
              </div>
              <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <ImageCommon
                  src="/assets/icons/arrow-icons.svg"
                  height="15px"
                  width="15px"
                  objectFit="cover"
                />
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    fontSize: { xs: "14px", md: "14px" },
                    color: "#ffff",
                    fontWeight: 400,
                  }}
                >
                  About
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
            <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  fontFamily: '"DM Sans", sans-serif',
                  color: "#fff",
                }}
              >
                Contact With Us
              </Typography>
              <div className="glory-line">
                <span></span>
              </div>
              <Box sx={{display:  'flex', gap: '8px', mb: '8px'}}>
              <input type="text" id="fname" name="fname" placeholder="first Name" className="footer-input"/>
              <input type="text" id="lname" name="lname" placeholder="Last Name" className="footer-input"/>
              </Box>
              <textarea name="message" rows="5"  placeholder="Write Message"  className="footer-message"/>

              <Box>
              <CustomImageButton
                        label="Send Message"
                        sx={{ backgroundColor: "#669934" , width: '100%', borderRadius: '0px !important'}}
                      />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
