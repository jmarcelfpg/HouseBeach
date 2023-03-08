import { AppBar, Link, Tooltip } from "@mui/material"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Image from "mui-image"
import { Container, SxProps } from "@mui/system"
import logo from './logo.jpeg'
import FacebookIcon from '@mui/icons-material/Facebook';
import './Cabecera.css'
import { Theme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { FC } from 'react'

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window | Node;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const toolBarStyles: SxProps<Theme> = (theme) => ({
    minHeight: 0,
    [theme.breakpoints.down("xl")]: { minHeight: 0 },
    "&>*": { margin: "0 10px" }
})

const Cabecera: FC<{
    window?: () => Window | Node;
}> = (props) => {

    return (
        <HideOnScroll window={props.window}>
            <AppBar color="transparent" position="fixed" sx={{ mb: 4, maxWidth: "100vw", left: 0 }} >
                <Container maxWidth={false} disableGutters>
                    <Toolbar className="toolbar-Cabecera" sx={toolBarStyles} disableGutters >
                        <Link sx={(theme) => ({
                            marginLeft: "10px", cursor: "pointer", [theme.breakpoints.down("sm")]: {
                                display: 'none'
                            }
                        })} component="div" href="/">
                            <Image src={logo} height="60px" width="60px" className="logo-Cabecera" />
                        </Link>
                        <Typography color="Background" component="div" sx={{ marginLeft: "10px", flexGrow: 1 }} variant="h5" className="title-Cabecera" >
                            House Beach Manzanillo
                        </Typography>
                        <Tooltip title="Home Beach Manzanillo F" >
                            <Fab
                                size="small"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                href="https://www.facebook.com/2021yulicagalindo"
                                color="info"
                                target="_blank"
                                sx={(theme) => ({ mr: 2 })}
                            >
                                <FacebookIcon />
                            </Fab>
                        </Tooltip>

                        <Tooltip title="Llamanos, mensajes o whatsapp" >
                            <Fab
                                size="small"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                href="https://wa.me/+523335885280"
                                color="info"
                                target="_blank"
                                sx={(theme) => ({ mr: 2, backgroundColor: "green", [theme.breakpoints.down("sm")]: { display: "none" } })}
                            >
                                <WhatsAppIcon />
                            </Fab>
                        </Tooltip>
                    </Toolbar>
                </Container>
            </AppBar >
        </HideOnScroll>
    )
}

export default Cabecera