import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import DryOutlinedIcon from '@mui/icons-material/DryOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import CoffeeOutlinedIcon from '@mui/icons-material/CoffeeOutlined';
import BlenderOutlinedIcon from '@mui/icons-material/BlenderOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';

const amenities = [
    {
        subheader: "Espacios",
        items: [
            { text: "Recamara King Size", icon: <KingBedOutlinedIcon fontSize="inherit" /> },
            { text: "Recamara con Litera Matrimonial", icon: <KingBedOutlinedIcon fontSize="inherit" /> },
            { text: "Sofa Cama en sala", icon: <ChairOutlinedIcon /> },
            { text: "Escritorio Home Office", icon: <TableRestaurantOutlinedIcon fontSize="inherit" /> },
            { text: "Baño completo (2)", icon: <BathtubOutlinedIcon fontSize="inherit" /> },
            { text: "Camastros", icon: <BeachAccessOutlinedIcon fontSize="inherit" /> },
            { text: "Alberca", icon: <PoolOutlinedIcon fontSize="inherit" /> },
        ]
    },
    {
        subheader: "Electrodomesticos",
        items: [
            { text: "Aire Acondicionado Sala y Recamara", icon: <AcUnitOutlinedIcon fontSize="inherit" /> },
            { text: "TV 55\" TV 43\" TV 32\"", icon: <TvOutlinedIcon fontSize="inherit" /> },
            { text: "Wifi", icon: <WifiOutlinedIcon fontSize="inherit" /> },
            { text: "Cafetera", icon: <CoffeeMakerOutlinedIcon fontSize="inherit" /> },
            { text: "Refrigerador", icon: <KitchenOutlinedIcon fontSize="inherit" /> },
            { text: "Secador", icon: <DryOutlinedIcon fontSize="inherit" /> },
        ]
    },
    {
        subheader: "Articulos y Utensilios",
        items: [
            { text: "Toallas para baño 6pz", icon: <DryCleaningOutlinedIcon fontSize="inherit" /> },
            { text: "Toallas para baño 4pz", icon: <DryCleaningOutlinedIcon fontSize="inherit" /> },
            { text: "Vajilla", icon: <CoffeeOutlinedIcon fontSize="inherit" /> },
            { text: "Utensilios de cocina", icon: <BlenderOutlinedIcon fontSize="inherit" /> },
            { text: "Cajones de estacionamiento (2)", icon: <LocalParkingOutlinedIcon fontSize="inherit" /> },
        ]
    },
]

const AmenitiesContainer = () => {
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down("md"))


    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: isSm ? "column" : "row",
                justifyContent: "space-around",
                alignItems: "center",
                minHeight: "100vh",
                pt: 8,
                pb: 8,
            }}
            maxWidth="xl"
            component="main"
        >
            {amenities.map(({ subheader, items }, indexList) => (
                <List
                    key={indexList}
                    sx={(theme) => ({
                        flex: 1,
                        width: '100%',
                        minHeight: "500px",
                        bgcolor: 'background.paper',
                        [theme.breakpoints.down("md")]: {
                            minHeight: "100px",
                            mb: "15px",
                        }
                    })}
                    subheader={<ListSubheader sx={() => ({
                        fontSize: "1.5rem",
                        [theme.breakpoints.down("xl")]: {
                            fontSize: "1rem",
                        }
                    })
                    }>{subheader}</ListSubheader>}
                >
                    {items.map(({ text, icon }: any, indexItem: any) => <ListItem key={indexItem} >
                        <ListItemIcon sx={(theme) => ({
                            fontSize: "2rem",
                            [theme.breakpoints.down("xl")]: {
                                fontSize: "1.2rem",
                            }
                        })
                        }>{icon}</ListItemIcon>
                        <ListItemText primaryTypographyProps={{
                            sx: () => ({
                                fontSize: "2rem",
                                [theme.breakpoints.down("xl")]: {
                                    fontSize: "1.2rem",
                                }
                            })
                        }} >{text}</ListItemText>
                    </ListItem>)}
                </List>
            )
            )}
        </Container >)
}

export default AmenitiesContainer