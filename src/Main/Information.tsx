import * as React from 'react';
import Container from '@mui/material/Container';
import { alpha } from '@mui/material/styles';
import Gallery from './Gallery';
import CallContainer from './CallContainer';
import AmenitiesContainer from './AmenitiesContainer';
import InitialContainer from './InitialContainer';
import FooterContainer from './FooterContainer';
import './information.css'

// const tiers = [
//     {
//         title: 'Free',
//         price: '0',
//         description: [
//             '10 users included',
//             '2 GB of storage',
//             'Help center access',
//             'Email support',
//         ],
//         buttonText: 'Sign up for free',
//         buttonVariant: 'outlined',
//     },
//     {
//         title: 'Pro',
//         subheader: 'Most popular',
//         price: '15',
//         description: [
//             '20 users included',
//             '10 GB of storage',
//             'Help center access',
//             'Priority email support',
//         ],
//         buttonText: 'Get started',
//         buttonVariant: 'contained',
//     },
//     {
//         title: 'Enterprise',
//         price: '30',
//         description: [
//             '50 users included',
//             '30 GB of storage',
//             'Help center access',
//             'Phone & email support',
//         ],
//         buttonText: 'Contact us',
//         buttonVariant: 'outlined',
//     },
// ];


function InformationContent() {
    return (
        <React.Fragment>
            <InitialContainer />
            <Container className="information-container" maxWidth={false} component="main" sx={{ maxWidth: "100vw", minHeight: "100vh", m: 0, p: 0 }}>
                <AmenitiesContainer />
            </Container>
            <Container className="information-container" maxWidth={false} component="main" sx={{ maxWidth: "100vw", minHeight: "100vh", m: 0, p: 0, backgroundColor: "darkcyan" }}>
                <CallContainer />
            </Container>

            <Container className="information-container" maxWidth={false} component="main" sx={{
                maxWidth: "100vw",
                minHeight: "100vh",
                m: 0,
                p: 0,
            }}>
                <Gallery />
            </Container>

            <Container className="information-container" maxWidth={false} component="main" sx={{
                maxWidth: "100vw", minHeight: "100vh", m: 0, p: 0,
                backgroundColor: alpha("#000", 0.02),
            }}>
                <FooterContainer />
            </Container>

        </React.Fragment >
    );
}

export default function Information() {
    return <InformationContent />;
}