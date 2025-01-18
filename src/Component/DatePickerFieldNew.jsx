import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Box from "@mui/material/Box";


export default function DatePickerExample({ className, placeholder }) {
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <DesktopDatePicker
          sx={{ width: "100%" }}
          slotProps={{
            field: { clearable: true, onClear: () => setCleared(true) },
            textField: {
              placeholder: placeholder,
              fullWidth: true,
              size: "small",
              onKeyDown: (e) => e.preventDefault(),
              className: className,
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
}
