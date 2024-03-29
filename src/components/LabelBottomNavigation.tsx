import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import Paper from "@mui/material/Paper";
import { Link, useLocation } from "react-router-dom";

export default function LabelBottomNavigation() {
  const currentLocation = useLocation().pathname;
  const [value, setValue] = React.useState(currentLocation);

  React.useEffect(() => {
    setValue(currentLocation)
  }, [currentLocation])

  return (
    <Paper
      sx={{
        position: "fixed",
        display: { xs: "block", sm: "none" },
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ width: "fullWidth", background: "#000" }}
        value={value}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          sx={{ color: "#fff" }}
          value="/"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/favorites"
          label="Favorites"
          sx={{ color: "#fff" }}
          value="/favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/about"
          label="About"
          sx={{ color: "#fff" }}
          value="/about"
          icon={<InfoIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
