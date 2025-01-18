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

export const HomeFooter = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Grid
            container
            py={{ xs: 0, sm: 4, md: 4, lg: 5 }}
            px={{ xs: 1, sm: 3, md: 3, lg: 8 }}
            pt={{ xs: 4, md: 0 }}
            display={{ xs: "flex", md: "none" }}
          >
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: { xs: "start", sm: "center" },
                  gap: { xs: 3, md: 1 },
                }}
                flexDirection={{ xs: "column", md: "unset" }}
              >
                <Link href="/residential-ongoing" className="footer-linkNew">
                  About
                </Link>
                <Link href="/commercial-ongoing" className="footer-linkNew">
                Sermons
                </Link>
                <Link href="/commercial-ongoing" className="footer-linkNew">
                Events
                </Link>
                <Link href="/residential-ongoing" className="footer-linkNew">
                Our Story
                </Link>
                <Link href="/commercial-ongoing" className="footer-linkNew">
                Contact Us
                </Link>
              </Box>
            </Grid>
           
          </Grid>
          <Grid
            container
            py={{ xs: 3, sm: 4, md: 4, lg: 5 }}
            px={{ xs: 3, sm: 3, md: 3, lg: 3 }}
            className="footor-column"
          >
            <Grid xs={12} sm={12} md={4} lg={5}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  width: { md: "70%", lg: "80%" },
                }}
                pb={{ xs: 2, sm: 4 }}
              >
                <Image
                  src="/assets/icons/locationIcon.png"
                  width={18}
                  height={21}
                  alt="location"
                  className="footer-bg-img"
                />
                <Typography component="p" variant="p" className="footer-link">
                  Global gospel bethastha church, Aralvaimozhi, Tamil Nadu -
                  629302.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: { lg: "50%" },
                  gap: 2,
                  alignItems: "center",
                }}
                pb={{ xs: 2, sm: 4 }}
              >
                <Image
                  src="/assets/icons/Phoneicon.png"
                  width={18}
                  height={21}
                  alt="call"
                  className="footer-bg-img-call"
                />
                <Stack direction={{ xs: "column", md: "column" }} spacing={1}>
                  <Typography component="p" variant="p" className="footer-link">
                    <Link
                      href="tel:+91-44-6919 9999"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      +91-44-6919 999
                    </Link>
                  </Typography>
                  <Typography component="p" variant="p" className="footer-link">
                    <Link
                      href="tel: +91 97913 22497 "
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      +91 97913 22497
                    </Link>
                  </Typography>
                </Stack>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: "55%",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Image
                  src="/assets/icons/messageicon.png"
                  width={25}
                  height={21}
                  alt="message"
                  className="footer-bg-img-msg"
                />
                <Typography component="p" variant="p" className="footer-link">
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    info@oceans.net.in
                  </a>
                </Typography>
              </Box>
            </Grid>

            <Grid xs={12} sm={12} md={8} lg={7} className="footer-link">
              <Grid
                item
                xs={12}
                className="footer-link-border"
                display={{ xs: "none", md: "block" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: { xs: 3, md: 3, lg: 2 },
                  }}
                  flexDirection={{ xs: "column", md: "unset" }}
                >
                  <Link href="/residential-ongoing" className="footer-linkNew">
                    About
                  </Link>
                  <Link href="/commercial-ongoing" className="footer-linkNew">
                  Sermons
                  </Link>
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Link href="/layoutplot" className="footer-linkNew">
                    Events
                    </Link>
                  </Box>
                  <Link href="/company-profile" className="footer-linkNew">
                    Our Story
                  </Link>
                  <Link href="/contactus" className="footer-linkNew">
                  Contact Us
                  </Link>
                </Box>
              </Grid>

              <Grid item md={12} mt={5}>
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  gap={2}
                  display={{ xs: "none", md: "flex" }}
                >
                  <Link
                    target="_blank"
                    href=""
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src="/assets/icons/fbicon.png"
                      width={27}
                      height={30}
                      alt="fb"
                    />
                  </Link>
                  <Image
                    src="/assets/icons/instaicon.png"
                    width={27}
                    height={30}
                    alt="x-twier"
                  />
                  <Link
                    target="_blank"
                    href=""
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src="/assets/icons/youtube-icons.png"
                      width={28}
                      height={30}
                      alt="x-twier"
                    />
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid container px={{ xs: 3, md: 0 }} pb={{ xs: 2, md: 0 }}>
            <Grid item xs={12}>
              <Stack
                direction="row"
                justifyContent="start"
                gap={2}
                display={{ xs: "flex", md: "none" }}
              >
                <Link
                  target="_blank"
                  href="https://www.facebook.com/oceanlifespaces/"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src="/assets/icons/fbicon.png"
                    width={20}
                    height={22}
                    alt="fb"
                  />
                </Link>
                <Image
                  src="/assets/icons/instaicon.png"
                  width={20}
                  height={22}
                  alt="x-twier"
                />
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/ocean-life-spaces-private-limited/"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Image
                   src="/assets/icons/youtube-icons.png"
                    width={20}
                    height={22}
                    alt="x-twier"
                  />
                </Link>
              </Stack>
            </Grid>
          </Grid>

          <Divider style={{ backgroundColor: "white" }}></Divider>
          <Grid md={12}>
            <Typography
              className="footer-copyright"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Copyright @ 2024 Global gospel bethastha church
            </Typography>
          </Grid>
        </Container>
      </section>
    </>
  );
};
