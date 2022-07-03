import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material'

const NavTheme = createTheme({
  components: {
    MuiButton: {
      variants: [{
        props: {
          variant: 'text'
        },
        style: {
          color: 'white',
          fontSize: 13
        }
      }]
      }      
    }
})

function MyNavi(){
  const linkStyle = {
    color: 'inherit',
    textDecoration: 'inherit',
  }

  return (
    <Box sx={{ flexGrow: 1 }} paddingBottom={1}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            myTickets
          </Typography>
          <ThemeProvider theme={NavTheme}>
          <Breadcrumbs color='grey'>
            <RouterLink to='/'  style={linkStyle}>
              <Link underline='hover' color='white'>
                Alpha
              </Link>
            </RouterLink>
            
            <Link  underline='hover' color='white'>
              <RouterLink to='/tour'  style={linkStyle}>
                 Bravo
              </RouterLink>
            </Link>
            
            <Button>
              <RouterLink to='/tour'  style={linkStyle}>
                 Bravo
              </RouterLink>
            </Button>
            
          </Breadcrumbs>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </Box>
    )
};

export default MyNavi;
