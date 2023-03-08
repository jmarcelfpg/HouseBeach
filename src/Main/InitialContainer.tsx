import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import Image from 'mui-image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect } from 'react'
import logo from '../logo.jpeg'

const InitialContainer = () => {
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down("md"))
    const [size, setSize] = useState(isSm ? "64px" : "17vh")
    useEffect(() => {
        setSize(isSm ? "64px" : "17vh")
    }, [isSm])
    return <Container className="information-container" disableGutters component="main" maxWidth={false} sx={{
        display: "flex", alignItems: "flex-end", m: 0, pt: 8, pb: 0, backgroundImage: "url(/images/Piscina_2.jpeg)", minHeight: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", [theme.breakpoints.down("md")]: {
            backgroundPositionX: -500
        }, [theme.breakpoints.down("sm")]: {
            backgroundPositionX: -550
        }
    }}>
        <Box sx={{ display: "flex", flex: 1, backgroundColor: alpha("#000", 0.5), height: "20vh" }}>
            <Box maxWidth="sm" sx={{ display: "flex", flexDirection: "column", flex: 10, alignItems: "center", justifyContent: "space-evenly" }}>
                <Typography fontWeight={700} color="ButtonShadow" variant='h5' sx={{ ml: 2, mt: 2, mr: "auto", }} >Precio $1250 x noche</Typography>
                <Typography maxWidth="sm" color="ButtonShadow" variant='subtitle1' sx={{ ml: "auto", }} >Para 6 personas</Typography>
                <Typography maxWidth="sm" color="ButtonShadow" variant='subtitle1' sx={{ ml: "auto" }} >Flexibilidad para Check In - Check Out</Typography>
            </Box>
            <Box sx={{ display: "flex", flex: 3, alignItems: "center", justifyContent: "right", mr: 2 }}>
                <Image src={logo} height={size} width={size} distance="100px" sx={{ borderRadius: size }} />
            </Box>
        </Box>
    </Container>
}

export default InitialContainer