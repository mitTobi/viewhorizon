import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material'

import { DateRange } from '@mui/icons-material';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 13,
                        fontWeight: 'bold',
                    }
                }
            ]
        }
    }
})

const MyPaper = ({tour, index}) => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
            <Paper elevation={4}>
                <img src={tour.image}
                alt="" 
                className='img'/>
                <Box paddingX={1}>
                    <Typography variant="h6" component="h2">
                        {tour.name}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <DateRange sx={{ width: 18}}/>
                        <Typography variant="body3" component="p" marginLeft={0.5}>
                            {tour.duration}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }} marginTop={2}>
                        <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }} marginTop={1} paddingBottom={1}>
                        <Typography variant="h6">
                            Zuständigkeit
                        </Typography>
                    </Box>
                </Box>
            </Paper>
            </ThemeProvider>
        </Grid>
    )
};

export default MyPaper;