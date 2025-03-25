'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/ProductCarousel.module.css";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const products = [
    {
        name: "Blue Denim Shirt",
        price: "$39.99",
        src: "https://blog.getketch.com/wp-content/uploads/2022/09/LMOS000390_2.jpg",
        desc:"premium mens denim",
        rating:3
    },
    {
        name: "Casual Black T-Shirt",
        price: "$19.99",
        src: "https://i.pinimg.com/474x/34/3f/f9/343ff94ec04ae88a257a30101dbfbd4c.jpg",
        desc:"premium mens denim",
        rating:4
    },
    {
        name: "Plaid Casual Shirt",
        price: "$29.99",
        src: "https://image.made-in-china.com/2f0j00GeDlZVoJlBgS/Fashion-Plaid-Mens-Clothing-Fancy-Check-Casual-Shirts-for-Men.webp",
        desc:"premium mens denim",
        rating:5
    },
    {
        name: "Casual Black T-Shirt",
        price: "$19.99",
        src: "https://i.pinimg.com/474x/34/3f/f9/343ff94ec04ae88a257a30101dbfbd4c.jpg",
        desc:"premium mens denim",
        rating:3
    },
    {
        name: "Blue Denim Shirt",
        price: "$39.99",
        src: "https://blog.getketch.com/wp-content/uploads/2022/09/LMOS000390_2.jpg",
        desc:"premium mens denim",
        rating:3
    },
    {
        name: "Casual Black T-Shirt",
        price: "$19.99",
        src: "https://i.pinimg.com/474x/34/3f/f9/343ff94ec04ae88a257a30101dbfbd4c.jpg",
        desc:"premium mens denim",
        rating:3
    },
    {
        name: "Plaid Casual Shirt",
        price: "$29.99",
        src: "https://image.made-in-china.com/2f0j00GeDlZVoJlBgS/Fashion-Plaid-Mens-Clothing-Fancy-Check-Casual-Shirts-for-Men.webp",
        desc:"premium mens denim",
        rating:3
    },
    {
        name: "Casual Black T-Shirt",
        price: "$19.99",
        src: "https://i.pinimg.com/474x/34/3f/f9/343ff94ec04ae88a257a30101dbfbd4c.jpg",
        desc:"premium mens denim",
        rating:3
    },
    {
        name: "Blue Denim Shirt",
        price: "$39.99",
        src: "https://blog.getketch.com/wp-content/uploads/2022/09/LMOS000390_2.jpg",
        desc:"premium mens denim",
        rating:3
    },
    {
        name: "Casual Black T-Shirt",
        price: "$19.99",
        src: "https://i.pinimg.com/474x/34/3f/f9/343ff94ec04ae88a257a30101dbfbd4c.jpg",
        desc:"premium mens denim",
        rating:3
    },
    {
        name: "Plaid Casual Shirt",
        price: "$29.99",
        src: "https://image.made-in-china.com/2f0j00GeDlZVoJlBgS/Fashion-Plaid-Mens-Clothing-Fancy-Check-Casual-Shirts-for-Men.webp",
        desc:"premium mens denim",
        rating:3
    },
    {
        name: "Casual Black T-Shirt",
        price: "$19.99",
        src: "https://i.pinimg.com/474x/34/3f/f9/343ff94ec04ae88a257a30101dbfbd4c.jpg",
        desc:"premium mens denim",
        rating:3
    }
];

const ProductList = () => {
    return (

        <div className={styles.productListPage}>
            <h3 className={styles.productListPageTitle}>
            Exclusively Chosen For you
            </h3>
        <div className={styles.carouselContainer}>
            <Carousel
                responsive={responsive}
                infinite={false}
                autoPlaySpeed={3000}
                className={styles.carousel}
            >
                {products.map((element,index) => (
                    <div key={index} className={styles.imageContainer}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={element.src}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {element.name}
                                </Typography>
                                
                                <Typography variant="body2" className={styles.productPrice}>
                                    {element.desc}
                                </Typography>
                                <Rating value={element.rating} precision={0.5} readOnly />
                                <Typography variant="h6" className={styles.productPrice}>
                                    {element.price}
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </Carousel>
        </div>
        </div>
    );
};

export default ProductList;