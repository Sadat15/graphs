import { AppBar, Toolbar, Typography } from "@mui/material";
import CameraIcon from "@mui/icons-material/PhotoCamera";

function Navigation() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Graphs
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
