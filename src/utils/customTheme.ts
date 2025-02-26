"use client";
import { alpha, createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: "#ffffff",
            WebkitTextFillColor: "#ffffff",
            opacity: 1, // Ensure full visibility
          },
        },
      },
      defaultProps: {
        slotProps: {
          input: {
            sx: (theme) => ({
              backgroundColor: "#fff", // Background color matching design
              borderRadius: theme.spacing(1),
              color: theme.palette.common.black, // Text color
              border: "none", // Remove border
              outline: "none", // Remove outline
              "& input::placeholder": {
                color: alpha(theme.palette.common.black, 1),
              },
            }),
          },
        },
        sx: (theme) => ({
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Remove border
              outline: "none",
            },
            "&:hover fieldset": {
              border: "none", // Remove hover border
              outline: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none", // Remove focus border
              outline: "none",
            },
            "& input": {
              padding: theme.spacing(1.5),
              outline: "none",
              border: "none",
            },
          },
        }),
      },
    },
  },
});

export default customTheme;
