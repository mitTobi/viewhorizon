import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

/* Eigene Komponenten */
import MyPaper from './../components/MyPaper.js';

/* Daten Einbettung */
import cities from './../cities.json'
import { Typography } from '@mui/material';

const Home =() => (
    <div>
      <Container>
        {cities.map((city) => (
          <>
          <Typography variant='h4' component='h2' marginTop={2} marginBottom={2}>
            Top {city.name} Whalla
          </Typography>
          
          <Grid container spacing={3}>
            {city.tours.map((tour,index) => <MyPaper tour={tour} key={index}></MyPaper> )}
          </Grid>
          </>
        ))}
      </Container>
    </div>
)

export default Home;