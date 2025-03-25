'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/ProductCarousel.module.css";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const images = [
    "https://blog.getketch.com/wp-content/uploads/2022/09/LMOS000390_2.jpg",
    "https://i.pinimg.com/474x/34/3f/f9/343ff94ec04ae88a257a30101dbfbd4c.jpg",
    "https://image.made-in-china.com/2f0j00GeDlZVoJlBgS/Fashion-Plaid-Mens-Clothing-Fancy-Check-Casual-Shirts-for-Men.webp",
    "https://i.pinimg.com/474x/34/3f/f9/343ff94ec04ae88a257a30101dbfbd4c.jpg",
    "https://blog.getketch.com/wp-content/uploads/2022/09/LMOS000390_2.jpg",
    "https://i.pinimg.com/474x/34/3f/f9/343ff94ec04ae88a257a30101dbfbd4c.jpg",
    "https://image.made-in-china.com/2f0j00GeDlZVoJlBgS/Fashion-Plaid-Mens-Clothing-Fancy-Check-Casual-Shirts-for-Men.webp",
    "https://i.pinimg.com/474x/34/3f/f9/343ff94ec04ae88a257a30101dbfbd4c.jpg",
];

const ProductCarousel = () => {
    return (
        <div className={styles.carouselContainer}>
            <Carousel
                responsive={responsive}
                infinite={false}
                autoPlay
                autoPlaySpeed={3000}
                className={styles.carousel}
            >
                {images.map((src, index) => (
                    <div key={index} className={styles.imageContainer}>
                        {/* <img
              src={src}
              alt={`Product ${index + 1}`}
              width={300}
              height={200}
              className={styles.image}
            ></img> */}
                        {/* <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={src}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Exclusive Deal Products
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Explore the wide range of collections
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Shop Now</Button>
                            </CardActions>
                        </Card> */}
                        <Card sx={{ maxWidth: 500, height: 600 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="440"
                                    width="340"
                                    image={src}
                                    alt="green iguana"
                                />
                                <CardContent sx={{ height:"100%", background:"#01b8b4"}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Exclusive Deal Products
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        Wide range of collections
                                    </Typography>

                                </CardContent>
                                
                            </CardActionArea>
                            <CardActions sx={{ background:"#01b8b4", height: "36px"}}>
                            <Button sx={{ color:"white"}} className="shopbutton">SHOP NOW ▸</Button>
                            </CardActions>

                        </Card>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ProductCarousel;