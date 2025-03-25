// import React from 'react'

// function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer

import React from "react";
import { Box, Container, Grid, Typography, Link, TextField, Button, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#000000", color: "white", py: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Customer Service
                        </Typography>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Contact Us
                        </Link>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Order Status
                        </Link>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Shipping & Delivery
                        </Link>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Returns & Exchanges
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Our Story
                        </Link>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Careers
                        </Link>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Press & News
                        </Link>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Sustainability
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Policies
                        </Typography>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Privacy Policy
                        </Link>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Terms & Conditions
                        </Link>
                        <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                            Accessibility
                        </Link>
                    </Grid>

                    {/* Column 4: Newsletter & Socials */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Stay Connected
                        </Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter your email"
                            sx={{
                                backgroundColor: "white",
                                borderRadius: 1,
                                mb: 2,
                            }}
                        />
                        <Button variant="contained" color="secondary" fullWidth>
                            Sign Up
                        </Button>

                        {/* Social Media Icons */}
                        <Box sx={{ mt: 2 }}>
                            <IconButton color="inherit">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit">
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit">
                                <YouTube />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <br></br>
                <Box sx={{ textAlign: "center", mt: 4, opacity: 0.6 }}>
                    <Typography variant="body2">© {new Date().getFullYear()}Easy e-commerce. All Rights Reserved.</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;