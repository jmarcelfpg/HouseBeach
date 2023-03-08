import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from '@mui/material';
import { darken } from '@mui/material/styles'
import Paper from '@mui/material/Paper'


const CallContainer = () => {

    return <Container
        sx={(theme) => ({
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            minHeight: "100vh",
            [theme.breakpoints.down("sm")]: {
                flexDirection: "column-reverse",
                justifyContent: "center"
            }
        })}
        maxWidth="md"
        component="main"
    >

        <Box component="div" sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
                textAlign: "center"
            }
        })}>
            <Typography fontWeight={700} mr={2} variant="h3" component="div">Reserva al</Typography>
            <Link sx={(theme) => ({
                color: theme.palette.getContrastText("#008b8b"),
                textDecorationColor: theme.palette.getContrastText("#008b8b")
            })}
                href="https://wa.me/+523335885280">
                <Typography fontWeight={700} mr={2} variant="h3" component="div">+52 33 3588 5280</Typography>
            </Link>
        </Box>
        <Box sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
                mb: 8
            }
        })}
        >
            <Tooltip title="Llamanos, mensajes o whatsapp">
                <Paper elevation={5} sx={{ borderRadius: "100%" }}>
                    <Fab
                        size="large"
                        aria-label="call number"
                        aria-haspopup="true"
                        href="https://wa.me/+523335885280"
                        color="info"
                        target="_blank"

                        sx={({
                            backgroundColor: "#008000",
                            height: "120px",
                            width: "120px",
                            "&:hover": {
                                backgroundColor: darken("#008000", 0.2)
                            }
                        })}
                    >
                        <WhatsAppIcon sx={{ fontSize: 80 }} />
                    </Fab>
                </Paper>
            </Tooltip>
        </Box>
    </Container >
}

export default CallContainer