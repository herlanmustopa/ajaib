import * as React from "react";

// Icon
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Stack, Typography } from "@mui/material";
//
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ----------------------------------------------------------------------

class AccountPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      idUser: "",
      userName: "",
    };
  }

  render() {

    const theme = createTheme({
      palette: {
        myBlue: {
          main: "#4FD1C5",
          contrastText: "#fff",
        },
        myGreen: {
          main: "#48BB78",
          contrastText: "#fff",
        },
        myRed: {
          main: "#F94A4A",
          contrastText: "#fff",
        },
        myYellow: {
          main: "#FFC700",
          contrastText: "#fff",
        },
      },
    });
    return (
      <ThemeProvider theme={theme}>
        <Stack direction="column">
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary" }}
            noWrap
          >
            Hai Gaes
            {/* {"Halo, " + username} */}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }} noWrap>
            {/* {role} */}
          </Typography>
        </Stack>
      </ThemeProvider>
    );
  }
}

export default AccountPopover;
