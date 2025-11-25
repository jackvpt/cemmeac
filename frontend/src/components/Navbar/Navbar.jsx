// CSS
import "./Navbar.scss"

import { useState } from "react"
import { NavLink } from "react-router-dom"

import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { label: "Accueil", path: "/" },
    { label: "Activités", path: "/activities" },
    { label: "Accès", path: "/access" },
    { label: "Horaires", path: "/openinghours" },
    { label: "Contact", path: "/contact" },
    { label: "Tarifs", path: "/prices" },
    { label: "Blog", path: "/blog" },
  ]

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          {/* Desktop version */}
          <Box className="navbar-desktop">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={NavLink}
                to={item.path}
                end={item.path === "/home"}
                className="navbar-item"
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "1.2rem",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    color: "#ffd480",
                    borderBottom: "2px solid #ffd480",
                  },
                  "&.active": {
                    borderBottom: "2px solid white",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile burger menu */}
          <Box className="navbar-mobile">
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon sx={{ fontSize: 36 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  sx={{
                    "&.active .MuiListItemText-root": {
                      fontWeight: "bold",
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
