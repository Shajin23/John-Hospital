import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Box,
  Drawer,
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
      <Box>
        <Container>
          <Box sx={{ height: "100px", display: "flex", alignItems: "center" }}>
            <Grid container>
              <Grid item xs={6} md={3} lg={4}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
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
                  sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}
                  className="header-box"
                >
                  <div className="header-navmenu">
                    <Link
                      href="/"
                      className={`home-link ${
                        router.pathname === "/" ? "homeactive" : ""
                      }`}
                    >
                      <span>Home</span>
                    </Link>
                  </div>
                  <div className="header-navmenu">
                    <Link
                      href="/"
                      className={`home-link ${
                        router.pathname === "/about-us" ? "homeactive" : ""
                      }`}
                    >
                      <span>About</span>
                    </Link>
                  </div>
                  <div className="header-navmenu">
                    <Link
                      href="/specialities"
                      className={`home-link ${
                        router.pathname === "/specialities" ? "homeactive" : ""
                      }`}
                    >
                      <span>Specialities</span>
                    </Link>
                  </div>
                  <div className="header-navmenu">
                    <Link
                      href="/specialists"
                      className={`home-link ${
                        router.pathname === "/specialists" ? "homeactive" : ""
                      }`}
                    >
                      <span> Specialists </span>
                    </Link>
                  </div>
                  <div className="header-navmenu">
                    <Link
                      href="/blog"
                      className={`home-link ${
                        router.pathname === "/blog" ? "homeactive" : ""
                      }`}
                    >
                      <span> Blog </span>
                    </Link>
                  </div>
                  <div className="header-navmenu">
                    <Link
                      href="/contact-us"
                      className={`home-link ${
                        router.pathname === "/contact-us" ? "homeactive" : ""
                      }`}
                    >
                      <span> Contact</span>
                    </Link>
                  </div>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <Box className="menu-icon">
                    <Image
                      src={"/assets/icons/hambergermenu.png"}
                      unoptimized={true}
                      width={35}
                      height={15}
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
                    About
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
                    href="/specialists"
                    className={
                      router.pathname === "/specialists" ? "homeactive" : ""
                    }
                  >
                    <span> Specialists </span>
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
                    Contact
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
