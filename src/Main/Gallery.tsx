import React from 'react'
import { Tab } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Image from 'mui-image';
import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import { FC, SyntheticEvent, useCallback, useState } from 'react';

type ChangeFn = (event: SyntheticEvent<Element, Event>, value: any) => void

interface CarrouselImagesProps {
    value?: any;
    onSelectImage?: ChangeFn
}

const CarrouselImages: FC<CarrouselImagesProps> = (props) => {
    const [value, setValue] = useState(props.value)
    const onSelectImage = useCallback<ChangeFn>((event, value) => {
        if (props.onSelectImage) {
            props.onSelectImage(event, value)
        }
        setValue(value)
    }, [props.value])
    return (
        <Tabs
            value={value}
            onChange={onSelectImage}
            visibleScrollbar
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable auto tabs example"
            sx={{ width: "100%" }}
        >

            {itemData.map((item) => (
                <Tab
                    key={item.id}
                    value={item}
                    sx={(theme: Theme) => ({
                        minWidth: 0, padding: "2.5px", marginBottom: theme.spacing(0.5)

                    })} label={<Image
                        height="120px" width="120px"
                        fit='scale-down'
                        src={`${item.img}?w=64&h=64&fit=crop&auto=format`}
                        // srcSet={`${item.img}?w=64&h=64&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        sx={(theme) => ({ backgroundColor: alpha(theme.palette.getContrastText(theme.palette.background.paper), 0.12) })}
                    />} />
            ))}
        </Tabs>

    );
}

const itemData = [
    {
        id: "alacena_refri",
        img: '/images/Alacena_Refri.jpeg',
        title: 'Alacena Refri',
    },
    {
        id: "balcon",
        img: '/images/Balcon.jpeg',
        title: 'Balcon',
    },
    {
        id: "bano_pasillo",
        img: '/images/Bano_pasillo.jpeg',
        title: 'Bano Pasillo',
    },
    {
        id: "comedor_cocina",
        img: '/images/Comedor_Cocina.jpeg',
        title: 'Comedor Cocina',
    },
    {
        id: "cuarto_principal",
        img: '/images/Cuarto_principal.jpeg',
        title: 'Cuarto Principal',
    },
    {
        id: "Cuarto_principal_2",
        img: '/images/Cuarto_principal_2.jpeg',
        title: 'Cuarto Principal',
    },
    {
        id: "departamentos",
        img: '/images/Departamentos.jpeg',
        title: 'Departamentos',
    },
    {
        id: "literas",
        img: '/images/Literas.jpeg',
        title: 'Literas',
    },
    {
        id: "literas_2",
        img: '/images/Literas_2.jpeg',
        title: 'Literas',
    },
    {
        id: "Literas_3",
        img: '/images/Literas_3.jpeg',
        title: 'Literas',
    },
    {
        id: "piscina",
        img: '/images/Piscina.jpeg',
        title: 'Piscina',
    },
    {
        id: "piscina_2",
        img: '/images/Piscina_2.jpeg',
        title: 'Piscina',
    },
    {
        id: "piscina_3",
        img: '/images/Piscina_3.jpeg',
        title: 'Piscina',
    },
    {
        id: "piscina_4",
        img: '/images/Piscina_4.jpeg',
        title: 'Piscina',
    },
    {
        id: "sofa_cama",
        img: '/images/Sofa_Cama.jpeg',
        title: 'Sofa Cama',
    },
];

const Gallery = () => {
    const [item, setItem] = useState(itemData[0])
    const onSelectImage: ChangeFn = (event, value) => {
        setItem(value)
    }
    return (
        <Container
            sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "100vh",
            })}
            maxWidth="xl"
            component="main"
        >
            <Box sx={{ height: "65vh", m: 3, width: "100%", backgroundColor: alpha("#000", 0.1) }} >
                <Image src={item.img} fit="contain" />
            </Box>
            <CarrouselImages value={item} onSelectImage={onSelectImage} />
        </Container >
    )
}

export default Gallery