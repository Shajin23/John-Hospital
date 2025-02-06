import { Header } from "@/Layout/Header";
import SocialShareIcons from "@/Layout/SocialShareIcons";
import { Typography } from "@mui/material";
import React from "react";


const HeaderBanner = (props) => {
    const { title, className } = props;
    return (
        <div>
            {/* <SocialShareIcons /> */}
            {/* <Header /> */}
            <div className={className}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontSize: { xs: "28px", sm: "40px", md: "54px" },
                        color: "#000",
                        fontWeight: 600,
                        lineHeight: "1.2em",
                        position: "relative",
                        fontFamily: "DM Sans",
                    }}
                    className="banner-title"
                >{title}</Typography>
            </div>
        </div>
    );
}

export default HeaderBanner;