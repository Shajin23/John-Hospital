import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

function TextFormField(props) {
  const {
    label,
    placeholder,
    control,
    name,
    error,
    type,
    size,
    variant,
    disabled,
    sx,
    formType,
    className,
    id,
    multiline,
    rows,
    InputProps,
  } = props;
  return (
    <>
      <Controller
        defaultValue={""}
        name={name}
        control={control}
        render={({ field }) => (
          <Box>
            <TextField
              className={className}
              fullWidth
              size={size ? size : "small"}
              placeholder={placeholder}
              error={error}
              type={type}
              helperText={error}
              {...field}
              disabled={disabled}
              sx={sx}
              id={id}
              multiline={multiline}
              rows={rows}
              InputProps={InputProps}
            />
          </Box>
        )}
      />
    </>
  );
}

export default TextFormField;
