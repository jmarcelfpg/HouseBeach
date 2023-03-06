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

const toolBarStyles: SxProps<Theme> = (theme) => ({
    minHeight: 0,
    [theme.breakpoints.down("xl")]: { minHeight: 0 },
    "&>*": { margin: "0 10px" }
})

const Cabecera = () => {

    return <AppBar color="transparent" position="fixed" sx={{ mb: 4, maxWidth: "100vw", left: 0 }} >
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
                        href="https://www.facebook.com/profile"
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
}

export default Cabecera