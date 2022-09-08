import React from 'react';
import DrawerLeft from '../components/layout/sidebar/DrawerLeft';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Card, Grid, Chip, Typography } from '@mui/material';

const Overview = () => {
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
              <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Your Annual Goal
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
            <Card>Chart</Card>
          </Grid>
          <Grid item xs={12} lg>
            <Card>Calender</Card>
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
