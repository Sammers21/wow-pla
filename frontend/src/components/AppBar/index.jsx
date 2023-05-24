import * as React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {generatePath} from 'react-router';

import {AppBar, Box, Container, Grid, IconButton, Toolbar, Typography} from '@mui/material';
import {styled} from '@mui/system';

import {borderColor, containerBg} from '../../theme';
import {EuIcon, UsIcon} from '../icons';
import HeaderMenu from '../HeaderMenu';
import {publicUrls} from '../../config';

import {TABS, TABS_MENU} from '../../constants/header';
import {REGIONS} from '../../constants/region';
import {getRegion} from '../../utils/urlparts';
import {BRACKETS} from '../../constants/pvp-activity';
import SearchBar from "../SearchBar";

const pages = Object.values(TABS);

const StyledAppBar = styled(AppBar)({
  backgroundImage: 'none',
  backgroundColor: `${containerBg} !important`,
  boxShadow: '0 0 #0000,0 0 #0000,0px 0px 15px 0 rgba(0, 0, 0, 1)',
  borderColor: borderColor,
});

const StyledToolbar = styled(Toolbar)({
  minHeight: '48px !important',
});

const PageHeader = () => {
  let navigate = useNavigate();
  const {
    region: regionFromUrl,
    activity = 'activity',
    bracket = BRACKETS.shuffle,
  } = useParams();
  const region = getRegion(regionFromUrl);

  const handleSetRegion = (region) => {
    const newPath = generatePath(publicUrls.page, { region, activity, bracket });
    navigate(newPath);
  };

  const handleOpenPage = ({ activity, bracket }) => {
    console.log('activity, bracket', activity, bracket);
    const newPath = generatePath(publicUrls.page, { region, activity, bracket });
    navigate(newPath);
  };
  const host = window.location.host.toUpperCase();
  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
              marginRight: '40px',
            }}
          >
            {host}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <HeaderMenu
                key={page}
                label={page}
                options={TABS_MENU[page]}
                handleOpenPage={handleOpenPage}
              />
            ))}
          </Box>

          <Grid direction="column">
            <IconButton
              aria-label="eu"
              sx={region !== REGIONS.eu ? { filter: 'grayscale(100%)' } : {}}
              disableRipple
              onClick={() => handleSetRegion(REGIONS.eu)}
            >
              <EuIcon />
            </IconButton>
            <IconButton
              aria-label="us"
              sx={region !== REGIONS.us ? { filter: 'grayscale(100%)' } : {}}
              disableRipple
              onClick={() => handleSetRegion(REGIONS.us)}
            >
              <UsIcon color="red" />
            </IconButton>
            <SearchBar>
            </SearchBar>
          </Grid>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default PageHeader;
