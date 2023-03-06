import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


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
            <Typography fontWeight={700} mr={2} variant="h3" component="div">+52 33 3588 5280</Typography>
        </Box>
        <Box sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
                mb: 8
            }
        })}
        >
            <Tooltip title="Llamanos, mensajes o whatsapp">
                <Fab
                    size="large"
                    aria-label="call number"
                    aria-haspopup="true"
                    href="https://wa.me/+523335885280"
                    color="info"
                    target="_blank"

                    sx={({
                        backgroundColor: "green",
                        height: "120px",
                        width: "120px",

                    })}
                >
                    <WhatsAppIcon sx={{ fontSize: 80 }} />
                </Fab>
            </Tooltip>
        </Box>
    </Container >
}

export default CallContainer