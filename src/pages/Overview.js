import React, { lazy } from 'react';
import DrawerLeft from '../components/layout/sidebar/DrawerLeft';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Card, Grid, Chip, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { grey } from '@mui/material/colors';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { retry } from '../utils/CommonFunctions';
import { styled } from '@mui/material/styles';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
const OverviewChart = lazy(() =>
  retry(() => import('../components/charts/OverviewChart')),
);

const Overview = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1EAEFF' : '#308fe8',
    },
  }));

  const renderData = (
    <>
      <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid item xs>
            <Card>
              <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Total Anuual Income
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1.5 }}>
                $ 10994.78
              </Typography>
              <Chip
                sx={{ mt: 1.5 }}
                icon={<TrendingUpIcon />}
                color="success"
                label="+ 15%"
              />
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Total Monthly Income
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1.5 }}>
                $ 137.43
              </Typography>
              <Chip
                sx={{ mt: 1.5 }}
                icon={<TrendingUpIcon />}
                color="success"
                label="+ 12%"
              />
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Total Per Day Income
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1.5 }}>
                $ 4.67
              </Typography>
              <Chip
                sx={{ mt: 1.5 }}
                icon={<TrendingUpIcon />}
                color="success"
                label="+ 8%"
              />
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Yield
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1.5 }}>
                2.67 %
              </Typography>
              <Chip
                sx={{ mt: 1.5 }}
                icon={<TrendingUpIcon />}
                color="success"
                label="+ 1.26%"
              />
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <Grid container>
                <Grid item xs>
                  <Typography
                    sx={{ color: 'primary.main', fontWeight: 'bold' }}
                  >
                    Your Annual Goal
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton sx={{ mt: -1, mr: -2 }}>
                    <DriveFileRenameOutlineIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Typography sx={{ mt: 2, color: grey[500] }}>
                60% Reached ($6000)
              </Typography>
              <BorderLinearProgress variant="determinate" value={50} />
              <Grid container>
                <Grid item xs>
                  <Typography sx={{ fontWeight: 'bold' }}>$ 0</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ color: 'primary.main', fontWeight: 'bold' }}
                  >
                    $ 10000
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          sx={{ mt: 3 }}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Grid item xs={12} lg={8}>
            <Card>
              <OverviewChart />
            </Card>
          </Grid>
          <Grid item xs={12} lg>
            <Card>
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
              />
            </Card>
          </Grid>
        </Grid>
      </div>
      <div>
        <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>
          STOCK HOLDING
        </Typography>
      </div>
    </>
  );

  return <DrawerLeft title="OVERVIEW" page={renderData} />;
};

export default Overview;
