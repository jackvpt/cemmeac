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
    { label: "Avis", path: "/testimonials" },
  ]

  return (
    <nav>
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
                fontFamily:"Inter",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                borderBottom: "3px solid transparent",
                textShadow: "0 2px 6px rgba(0, 0, 0, 0.6)",
                "&:hover": {
                  color: "#ffd480",
                  borderBottom: "3px solid #ffd480",
                },
                "&.active": {
                  borderBottom: "3px solid white",
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

      {/* Drawer mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="navbar-mobile__burger-menu">
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
    </nav>
  )
}

export default Navbar
