import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import NorthIcon from '@mui/icons-material/North';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const OverviewChart = () => {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const H1 = styled.h1`
    margin: 0;
    padding: 0;
    display: inline;
  `;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'lexend', // Your font family
            size: 14,
          },
        },
      },
      y: {
        suggestedMax: 1000,
        grid: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          stepSize: 250,
          font: {
            family: 'lexend', // Your font family
            size: 14,
          },
        },
      },
    },
  };

  const labels = [
    '1, Jan 2022',
    '2, Jan 2022',
    '3, Jan 2022',
    '4, Jan 2022',
    '5, Jan 2022',
    '6, Jan 2022',
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.4,
        label: 'Dataset 2',
        data: [700, 820, 750, 810, 900, 680],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
      <Typography variant="h6">Total Value</Typography>
      <Grid sx={{ mb: 3 }} container spacing={2}>
        <Grid item xs>
        <H1>$80,647.78</H1>
        <span className="green">
          <NorthIcon sx={{ padding: 0.5, pb: 0 }} />
          $75,234.96(+98%)
        </span>
        </Grid>
        <Grid item>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Last Week</MenuItem>
            <MenuItem value={20}>Last Month</MenuItem>
            <MenuItem value={30}>Last Year</MenuItem>
          </Select>
        </FormControl>
        </Grid>
      </Grid>
      <Line options={options} data={data} />
    </>
  );
};

export default OverviewChart;
