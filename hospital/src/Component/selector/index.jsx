import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SelectField({
  label, // Added label prop
  Controller,
  control,
  name,
  error,
  data,
  onChange,
  className,
}) {
  const renderValue = (selected) => {
    if (!selected) {
      return (
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: '"DM Sans", sans-serif',
            color: "#777676",
          }}
        >{` ${label}`}</Typography>
      );
    }
    const selectedItem = data?.find((item) => item.value === selected);
    return selectedItem?.title || selected; 
  };

  return (
    <Controller
      name={name} // Use dynamic name
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <Select
            {...field}
            value={field.value || ""}
            displayEmpty
            IconComponent={ExpandMoreIcon}
            error={!!error?.message}
            onChange={(event) => {
              field.onChange(event);
              onChange && onChange(event.target.value);
            }}
            renderValue={(selected) => renderValue(selected)}
            className={className}
          >
            {data?.map((item) => (
              <MenuItem
                value={item.value}
                key={item.id}
                sx={{
                  fontFamily: "DM Sans",
                }}
              >
                {item.title}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText
            sx={{
              color: "#d32f2f",
              fontFamily: "DM Sans",
              marginTop: "-20px",
              fontSize: "14px",
            }}
          >
            {error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}

export default SelectField;
