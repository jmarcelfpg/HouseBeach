import React from 'react'
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box/Box';

// const footers = [
//     {
//         title: 'Company',
//         description: ['Team', 'History', 'Contact us', 'Locations'],
//     },
//     {
//         title: 'Features',
//         description: [
//             'Cool stuff',
//             'Random feature',
//             'Team feature',
//             'Developer stuff',
//             'Another one',
//         ],
//     },
//     {
//         title: 'Resources',
//         description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//     },
//     {
//         title: 'Legal',
//         description: ['Privacy policy', 'Terms of use'],
//     },
// ];



// function Copyright(props: any) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const FooterContainer = () => {
//     return <Container
//         maxWidth="md"
//         component="footer"
//         sx={(theme) => ({
//             height: "100vh",
//             borderTop: `1px solid ${theme.palette.divider}`,
//             py: [10, 10],
//             [theme.breakpoints.down("xl")]: {
//                 py: [10, 10],
//             }
//         })}
//     >
//         {/* Footer */}
//         < Grid container spacing={4} justifyContent="space-evenly" >
//             {
//                 footers.map((footer) => (
//                     <Grid item xs={6} sm={3} key={footer.title}>
//                         <Typography variant="h6" color="text.primary" gutterBottom>
//                             {footer.title}
//                         </Typography>
//                         <ul>
//                             {footer.description.map((item) => (
//                                 <li key={item}>
//                                     <Link href="#" variant="subtitle1" color="text.secondary">
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </Grid>
//                 ))
//             }
//         </Grid >
//         <Copyright sx={{ mt: 5 }} />
//         {/* End footer */}
//     </Container >
// }

const FooterContainer = () => {
    return <Container
        maxWidth="lg"
        component="footer"
        sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "100vh",
            borderTop: `1px solid ${theme.palette.divider}`,
            py: [10, 10],
            [theme.breakpoints.down("xl")]: {
                py: [10, 10],
            }
        })}
    >
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography variant="h4" >
                Ven a manzanillo
            </Typography>
            <Typography variant="h4" >
                Disfruta tu estadia en nuestro departamento
            </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography variant="h4" >
                Ambiente  y comodidad
            </Typography>
            <Typography variant="h4" >
                A tu servicio
            </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography variant="h4" >
                Relajate
            </Typography>
            <Typography variant="h4" >
                Te mereces unas vacaciones
            </Typography>
        </Box>
    </Container>
}


export default FooterContainer