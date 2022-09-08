import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import blogs from '../../../resources/icons/blogs.svg';
import contactus from '../../../resources/icons/contact-us.svg';
import diversification from '../../../resources/icons/diversification.svg';
import feedback from '../../../resources/icons/feedback.svg';
import ideas from '../../../resources/icons/ideas.svg';
import logout from '../../../resources/icons/log-out.svg';
import monthlyharvest from '../../../resources/icons/monthly-harvest.svg';
import myfarm from '../../../resources/icons/my-farm.svg';
import overview from '../../../resources/icons/overview.svg';
import settings from '../../../resources/icons/settings.svg';
import watchlist from '../../../resources/icons/watchlist.svg';
import applogo2 from '../../../resources/app-logo-2.png';
import { styled as styledComp } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const drawerWidth = 240;

function LeftDrawer(props) {
  const { window, title, page } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Image = styled.img`
    margin: 3rem 0 3rem 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  `;

  const StyledLink = styledComp(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  `;

  const IOSSwitch = styledComp((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#0099F' : '#0099F',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  const drawer = (
    <div>
      <Toolbar>
        <Image src={applogo2} alt="logo" />
      </Toolbar>
      <List
        sx={{
          // selected and (selected + hover) states
          '&& .Mui-selected, && .Mui-selected:hover': {
            bgcolor: '#EEF8FD',
            '&, & .MuiListItemIcon-root': {
              color: '#00A3FF',
            },
          },
          // hover states
          '& .MuiListItemButton-root:hover': {
            bgcolor: '#EEF8FD',
            '&, & .MuiListItemIcon-root': {
              color: '#00A3FF',
            },
          },
        }}>
        {[
          { link: '/overview', text: 'Overview' },
          { link: '/my-farm', text: 'My Farm' },
          { link: '/monthly-harvest', text: 'Monthly Harvest' },
          { link: '/watchlist', text: 'Watchlist' },
          { link: '/ideas', text: 'Ideas' },
          { link: '/diversification', text: 'Diversification' },
          { link: '/blogs', text: 'Blogs' },
        ].map((data, index) => (
          <StyledLink to={data.link} key={index}>
            <ListItem sx={{ color: 'secondary.main' }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {
                    [
                      <img src={overview} alt="Overview" />,
                      <img src={myfarm} alt="My Farm" />,
                      <img src={monthlyharvest} alt="Monthly Harvest" />,
                      <img src={watchlist} alt="Watchlist" />,
                      <img src={ideas} alt="Ideas" />,
                      <img src={diversification} alt="Diversification" />,
                      <img src={blogs} alt="Blogs" />,
                    ][index]
                  }
                </ListItemIcon>
                <ListItemText primary={data.text} />
              </ListItemButton>
            </ListItem>
          </StyledLink>
        ))}
      </List>
      <Divider />
      <List
        sx={{
          // selected and (selected + hover) states
          '&& .Mui-selected, && .Mui-selected:hover': {
            bgcolor: '#EEF8FD',
            '&, & .MuiListItemIcon-root': {
              color: '#00A3FF',
            },
          },
          // hover states
          '& .MuiListItemButton-root:hover': {
            bgcolor: '#EEF8FD',
            '&, & .MuiListItemIcon-root': {
              color: '#00A3FF',
            },
          },
        }}
      >
        {[
          { link: '/settings', text: 'Settings' },
          { link: '/contact-us', text: 'Contact Us' },
          { link: '/feedback', text: 'Feedback' },
        ].map((data, index) => (
          <StyledLink to={data.link} key={index}>
            <ListItem sx={{ color: 'secondary.main' }} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {
                    [
                      <img src={settings} alt="Settings" />,
                      <img src={contactus} alt="Contact Us" />,
                      <img src={feedback} alt="Feedback" />,
                    ][index]
                  }
                </ListItemIcon>
                <ListItemText primary={data.text} />
              </ListItemButton>
            </ListItem>
          </StyledLink>
        ))}
      </List>
      <List
        sx={{
          mt: 5,
          // selected and (selected + hover) states
          '&& .Mui-selected, && .Mui-selected:hover': {
            bgcolor: '#EEF8FD',
            '&, & .MuiListItemIcon-root': {
              color: '#00A3FF',
            },
          },
          // hover states
          '& .MuiListItemButton-root:hover': {
            bgcolor: '#EEF8FD',
            '&, & .MuiListItemIcon-root': {
              color: '#00A3FF',
            },
          },
        }}>
        <StyledLink to="/logout">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={logout} alt="Logout" />
              </ListItemIcon>
              <ListItemText sx={{ color: 'secondary.main' }} primary="Logout" />
            </ListItemButton>
          </ListItem>          
        </StyledLink>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            {title}
          </Typography>
          <IOSSwitch sx={{ ml: 'auto' }} defaultChecked />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {page}
      </Box>
    </Box>
  );
}

LeftDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default LeftDrawer;
