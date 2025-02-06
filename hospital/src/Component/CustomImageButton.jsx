import { Button, Typography } from "@mui/material";
import React from "react";

function CustomImageButton(props) {
  const { label, sx } = props;

  return (
    <Button
      sx={{
        px: { xs: 3, md: 5 },
        py: 2,
        height: "48px",
        fontFamily: "DM Sans",
        fontSize: "14px",
        fontWeight: 500,
        borderRadius: "50px",
        textTransform: "capitalize",
        ...sx,
      }}
    >
      <Typography
        variant="p"
        component="p"
        sx={{
          fontSize: "14px",
          color: "#fff",
          fontWeight: 400,
          fontFamily: "DM Sans",
          opacity: 0.8,
          marginBottom:"0px !important"
        }}
      >
        {" "}
        {label}
      </Typography>
    </Button>
  );
}

export default CustomImageButton;
