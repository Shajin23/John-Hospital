import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Box,
  Drawer,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ImageCommon from "@/Component/ImageComponent/ImageCommon";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResidential, setIsResidential] = useState(false);
  const router = useRouter();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    handleModalClose();
  }, [router]);

  const handleResidentialChange = () => {
    setIsResidential((prevExpanded) => !prevExpanded);
  };


  return (
    <>
      <Box sx={{position:"sticky",top:0,zIndex:"1000",backgroundColor:"white",width:"100%"}}>
        <Container>
        <Box sx={{ backgroundColor: "white", padding: "10px 0" }}>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <div className="header-navmenu top-menu">
              <Link href="/about-us" underline="none">
                <span variant="body1">About Us</span>
              </Link>
              </div> 
            </Grid>
            <Grid item>
            <div className="header-navmenu top-menu">
              <Link href="/contact-us" underline="none">
                <span variant="body1">Contact Us</span>
              </Link>
            </div>
            </Grid>
            <Grid item>
            <div className="header-navmenu top-menu">
              <Link href="/blog" underline="none">
                <span variant="body1">Blog</span>
              </Link>
            </div>
            </Grid>
            <Grid item>
            <div className="header-navmenu top-menu" >
              <Link href="/emergency" underline="none" style={{color:"#c71d22"}}>
                <span variant="body1" >EMERGENCY +91 9384398392</span>
              </Link>
            </div>
            </Grid>
            {/* <Grid item>
            <div className="header-navmenu top-menu" >
              <Link href="/ambulance" underline="none" style={{color:"#c71d22"}}>
                <span variant="body1">AMBULANCE +91 8220724541</span>
              </Link>
            </div>
            </Grid> */}
          </Grid>
        </Container>
        </Box>
          <Box sx={{ height: "100px", display: "flex", alignItems: "center" }}>
            <Grid container>
              <Grid item xs={6} md={3} lg={4}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Link href="/">
                    <ImageCommon
                      src="/assets/logo/logo.svg"
                      original={true}
                      height="55px"
                      width="170px"
                      objectFit="cover"
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                md={9}
                lg={8}
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{ display: { xs: "none", md: "flex" }, gap: 4 , alignItems: "center" }}
                  className="header-box"
                >
                  <div className="header-navmenu">
                    <Link
                      href="/"
                      className={`home-link ${router.pathname === "/" ? "homeactive" : ""
                        }`}
                    >
                      <span>Home</span>
                    </Link>
                  </div>
                  {/* <div className="header-navmenu">
                    <Link
                      href="/about-us"
                      className={`home-link ${router.pathname === "/about-us" ? "homeactive" : ""
                        }`}
                    >
                      <span>About</span>
                    </Link>
                  </div> */}
                  <div className="header-navmenu">
                    <Link
                      href="/specialities"
                      className={`home-link ${router.pathname === "/specialities" ? "homeactive" : ""
                        }`}
                    >
                      <span>Specialities</span>
                    </Link>
                  </div>
                  <div className="header-navmenu">
                    <Link
                      href="/ip"
                      className={`home-link ${router.pathname === "/ip" ? "homeactive" : ""
                        }`}
                    >
                      <span>International Patients</span>
                    </Link>
                  </div>
                  <div className="header-navmenu">
                    <Link
                      href="/ic"
                      className={`home-link ${router.pathname === "/ic" ? "homeactive" : ""
                        }`}
                    >
                      <span>Insurance Corner</span>
                    </Link>
                  </div>
                  {/* <div className="header-navmenu">
                    <Link
                      href="/sp"
                      className={`home-link ${router.pathname === "/sp" ? "homeactive" : ""
                        }`}
                    >
                      <span>Surgery Package</span>
                    </Link>
                  </div> */}
                  {/* <div className="header-navmenu">
                    <Link
                      href="/blog"
                      className={`home-link ${router.pathname === "/blog" ? "homeactive" : ""
                        }`}
                    >
                      <span> Blog </span>
                    </Link>
                  </div> */}
                  {/* <div className="header-navmenu">
                    <Link
                      href="/contact-us"
                      className={`home-link ${router.pathname === "/contact-us" ? "homeactive" : ""
                        }`}
                    >
                      <span> Contact</span>
                    </Link>
                  </div> */}
                  {/* <Button
                    sx={{
                      backgroundColor: "#669934" ,
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
                  </Button> */}
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <Box className="menu-icon">
                    <Image
                      src={"/assets/icons/hambergermenu.png"}
                      unoptimized={true}
                      width={38}
                      height={22}
                      alt="menu"
                      onClick={handleModalOpen}
                      style={{ cursor: "pointer" }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Drawer open={isModalOpen} onClose={handleModalClose} anchor="right">
            <Box sx={{ width: "300px", px: 2 }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  item
                  xs={7}
                  sm={6}
                  md={6}
                  mt={2}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", sm: "start" },
                  }}
                >
                  <Link href="/"></Link>
                </Grid>
                <Grid
                  item
                  xs={5}
                  sm={6}
                  md={6}
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ pt: 2 }}>
                    <Image
                      src="/assets/icons/cross.png"
                      unoptimized={true}
                      width={10}
                      height={10}
                      alt="menu"
                      className="closeIcon"
                      onClick={handleModalClose}
                      style={{ cursor: "pointer" }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ pt: 2 }}>
                <div
                  className="header-navmenu-mubile"
                  style={{ marginBottom: 10 }}
                >
                  <Link
                    href="/"
                    className={router.pathname === "/" ? "homeactive" : ""}
                  >
                    Home
                  </Link>
                </div>
                <div
                  className="header-navmenu-mubile"
                  style={{ marginBottom: 10 }}
                >
                  <Link
                    href="/about-us"
                    className={
                      router.pathname === "/about-us" ? "homeactive" : ""
                    }
                  >
                    About Us
                  </Link>
                </div>
                <div
                  className="header-navmenu-mubile"
                  style={{ marginBottom: 10 }}
                >
                  <Link
                    href="/specialities"
                    className={
                      router.pathname === "/specialities" ? "homeactive" : ""
                    }
                  >
                    <span>Specialities</span>
                  </Link>
                </div>
                <div
                  className="header-navmenu-mubile"
                  style={{ marginBottom: 10 }}
                >
                  <Link
                    href="/ip"
                    className={
                      router.pathname === "/ip" ? "homeactive" : ""
                    }
                  >
                    <span> International Patients </span>
                  </Link>
                </div>
                <div className="header-navmenu">
                    <Link
                      href="/ic"
                      className={`home-link ${router.pathname === "/ic" ? "homeactive" : ""
                        }`}
                    >
                      <span>Insurance Corner</span>
                    </Link>
                  </div>
                  <div className="header-navmenu">
                    <Link
                      href="/book-appointment"
                      className={`home-link ${router.pathname === "/book-appointment" ? "homeactive" : ""
                        }`}
                    >
                      <span>Book Appoinment</span>
                    </Link>
                  </div>
                <div
                  className="header-navmenu-mubile"
                  style={{ marginBottom: 10 }}
                >
                  <Link
                    href="/blog"
                    className={router.pathname === "/blog" ? "homeactive" : ""}
                  >
                    <span> Blog </span>
                  </Link>
                </div>
                <div
                  className="header-navmenu-mubile"
                  style={{ marginBottom: 10 }}
                >
                  <Link
                    href="/clients"
                    className={
                      router.pathname === "/contact-us" ? "homeactive" : ""
                    }
                  >
                    Contact Us
                  </Link>
                </div>
              </Box>
            </Box>
          </Drawer>
        </Container>
      </Box>
    </>
  );
};
