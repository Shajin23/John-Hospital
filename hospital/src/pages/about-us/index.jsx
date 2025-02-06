import HeaderBanner from "@/Component/HeaderBanner";
import ImageCommon from "@/Component/ImageComponent/ImageCommon";
import TitleComponent from "@/Component/TitleComponent";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Collapse, Container, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography,Card,CardContent,CardHeader,SvgIcon } from "@mui/material";
import { Visibility, BusinessCenter, ThumbUp } from '@mui/icons-material';
import Image from "next/image";
import React from "react";
import { HomeFooter } from "@/Layout/Footer";
import { Header } from "@/Layout/Header";



const AboutUs = () => {
  const [open, setOpen] = React.useState(true);
  const [opens, setOpens] = React.useState(false);
  const [openss, setOpenss] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicks = () => {
    setOpens(!opens);
  };

  const handleClickss = () => {
    setOpenss(!openss);
  };

  const about = [
    {
      id: 1,
      title: "Kerala state Pollution Control Board Award 2004,2006",
      //description: 'Gastro Intestinal Cancer Gastro-Intestinal (GI) cancer is a term for the group of cancers that affect the digestive system.',
    },
    {
      id: 2,
      title: "Health Tourism award (2005)",
      //description: 'Esophageal cancer is cancer arising from the esophagus the food pipe that runs between the throat and the stomach.',
    },
    {
      id: 3,
      title: "Financial Reporting 2005",
      //description: 'Stomach cancer, also called gastric cancer, is a cancer that starts in the stomach. To understand stomach cancer',
    },
    {
      id: 4,
      title: "Entrepreneur of year 2006",
      //description: 'Liver cancer, also known as hepatic cancer, is a cancer which starts in the liver',
    },
    {
      id: 5,
      title: "A-/ Stable rating by CRISIL Ltd.2008",
      //description: 'There are many variations of lorem passagei of Lorem Ipsum available but the majority have',
    },
    {
      id: 6,
      title: "Best Customer Site Award from HCL infosystems Ltd",
      //description: 'Gastro Intestinal Cancer Gastro-Intestinal (GI) cancer is a term for the group of cancers that affect the digestive system.',
    },
  ]
  return (
    <section>
      <Header />
      <HeaderBanner className='about-header-banner' title='About Us' />
      <Box className="glory-sections aboutus" py={5}>
        <Container
          maxWidth="lg"
          sx={{ maxWidth: { xl: "77% !important", lg: "77% !important" } }}
        >
          <Grid container spacing={5} sx={{justifyContent: "center"}}>
            <Grid item xs={12} md={10} >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: "20px", sm: "26px", md: "38px" },
                  color: "#000",
                  fontWeight: 600,
                  lineHeight: "1.2em",
                  fontFamily: "DM Sans",
                }}
              >About John Gastro Hospital</Typography>
              <div className="glory-line">
                <span></span>
              </div>
              <Box>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    opacity: "0.8",
                    color: "#454F5E",
                    fontWeight: 400,
                    lineHeight: "28px",
                  }}
                >
                  John Gastro Hospital (JGH) is one of the leading Gastro and Laparoscopic surgery center in South Tamil Nadu with unique and modern facilities and advanced treatment facilities. , With advanced treatment facilities our Centre has emerged as one of the best Centre in South Asia offering state of the art treatment in Gastroenterology and Gastrointestinal surgery .Our center is equipped with state of the art facilities including Ventilators, ICU, Cardiac monitors, Advanced life support equipment's, modular operation theater, advanced laboratory and diagnostic services including endoscopy suite and capsule endoscopy . We also have facilities for gastrointestinal physiologic and dynamic studies in our institution in addition to all other available services.
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    opacity: "0.8",
                    color: "#454F5E",
                    fontWeight: 400,
                    lineHeight: "28px",
                  }}
                >
                  The department of surgical Gastroenterology at JGH offers comprehensive health care for diseases of Liver, Pancreas, Stomach, intestine, Esophagus and Gallbladder. The department has now facilities to handle the most challenging cases with the availability of Therapeutic endoscopic unit, Thoraco- laparoscopic surgery, ERCP. Advanced Laparoscopic surgery and Hepato- Pancreatico Biliary Surgery.
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    opacity: "0.8",
                    color: "#454F5E",
                    fontWeight: 400,
                    lineHeight: "28px",
                  }}
                >
                  JGH is one of the earliest centers in South Tamil Nadu to provide laparoscopic cancer surgery and Thoracoscopic surgery.
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    opacity: "0.8",
                    color: "#454F5E",
                    fontWeight: 400,
                    lineHeight: "28px",
                  }}
                >
                  Specialist from all specialties are available round the clock to provide comprehensive patient care .
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    opacity: "0.8",
                    color: "#454F5E",
                    fontWeight: 400,
                    lineHeight: "28px",
                  }}
                >
                  JGH has 24 hours Emergency services and ALS Ambulance Service.
                </Typography>
              </Box>

            </Grid>
          </Grid>

          <Box py={5}>
            <Box
              className="non-filter"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TitleComponent title={"Awards & Achievements"}/>

              <Box>
                <Grid container spacing={2}>
                  {about.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                      <Box sx={{ display: 'flex', gap: 2,alignItems:'center' }} className='box-card-section'>
                        <Box>
                          <Image src={'/assets/dummy/cup.png'} width={50} height={50} alt="image" />
                        </Box>
                        <Box sx={{ padding: 2 }}>
                          <Typography
                            variant="h2"
                            sx={{
                              fontWeight: 600,
                              color: "#000",
                              lineHeight: { xs: "20px", md: "28px" },
                              fontSize: { xs: "16px", md: "18px" },
                              fontFamily: "DM Sans",
                              mb: "12px",
                            }}
                            component="h2"
                          >
                            {item.title}
                          </Typography>
                          {/* <Typography
                            variant="h2"
                            sx={{
                              fontWeight: 400,
                              color: "#454F5E",
                              lineHeight: { xs: "20px", md: "28px" },
                              fontSize: { xs: "16px", md: "18px" },
                              fontFamily: "DM Sans",
                              mb: { xs: 2, sm: 3, md: "20px" },
                              opacity: '0.8'
                            }}
                            component="h2"
                          >
                            {item.description}
                          </Typography> */}
                          {/* <Button
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
                          </Button> */}
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>

        </Container>

      </Box>
      
      <Container className="vmv"
          maxWidth="lg" 
          sx={{ maxWidth: { xl: "77% !important", lg: "77% !important", paddingBottom:"60px"} }}
        >
          <TitleComponent title="Our Vision, Mission, and Values" variant="h4" component="h1" align="center" mb={4}>
            Our Vision, Mission, and Values
          </TitleComponent>
          <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{ backgroundColor: '#c0f689db',boxShadow: '3px 4px 15px #00000026;',border:'none'}} className='box-card-section'>
          <Box display="flex" justifyContent="center" p={2}>
            <SvgIcon component={Visibility} fontSize="large" />
          </Box>
          <CardContent>
            <Typography variant="h5" component="h2" align="center" mb={2} sx={{fontFamily:"DM Sans sans-serif !important",fontWeight:"600"}}>
              Our Vision
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="center" className="vm-desc">
              To be the leading provider of innovative solutions, delivering exceptional value to our customers.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ backgroundColor: '#9cc4eb',boxShadow: '3px 4px 15px #00000026;',border:'none' }} className='box-card-section'>
          <Box display="flex" justifyContent="center" p={2}>
            <SvgIcon component={BusinessCenter} fontSize="large" />
          </Box>
          <CardContent>
            <Typography variant="h5" component="h2" align="center" mb={2} sx={{fontFamily:"DM Sans sans-serif !important",fontWeight:"600"}}>
              Our Mission
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="center" className="vm-desc">
              To empower our customers, partners, and employees to achieve their goals through our cutting-edge products and services.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{ backgroundColor: '#c0f689db',boxShadow: '3px 4px 15px #00000026;',border:'none' }} className='box-card-section'>
          <Box display="flex" justifyContent="center" p={2}>
            <SvgIcon component={ThumbUp} fontSize="large" />
          </Box>
          <CardContent>
            <Typography variant="h5" component="h2" align="center" mb={2} sx={{fontFamily:"DM Sans sans-serif !important",fontWeight:"600"}}>
              Our Values
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" align="center" className="vm-desc">
              Integrity, Innovation, Customer Focus, Teamwork, and Excellence.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
          </Grid>
      </Container>
      <HomeFooter />
      
    </section>
    
  );
};

export default AboutUs;
