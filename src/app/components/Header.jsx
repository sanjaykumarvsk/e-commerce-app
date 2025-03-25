"use client"
import React, { useEffect, useState } from 'react'

import { FaShoppingBag, FaUser, FaSearch } from "react-icons/fa";
import styles from "../styles/Header.module.css";
import { Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import SmallMenuCard from './UIElements/SmallMenuCard';

function Header() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent SSR mismatch

  const navItems = ["New", "Skincare", "Hair", "Fragrance", "Brands", "Makeup", "Tools & Utilities", "Mini Size", "Bath & body", "Beauty under $20", "Brushes", "offers", "Sales", "Gifts"];

  return (
    <div>


      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          Easy E-commerce
        </Link>

        <div className={styles.HeaderMiddleSection}>
          <div className={styles.searchBar}>
            <FaSearch className={styles.icon} />
            <input type="text" placeholder="Search for products..." />
          </div>

          <div>
            <SmallMenuCard />
          </div>

        </div>

        <div className={styles.icons}>
        <Link 
              // href={`/${item.toLowerCase()}`} 
              href={`/category/Signup`} 
            >
          <FaUser className={styles.icon} />
          </Link>
          <Link
              // href={`/${item.toLowerCase()}`} 
              href={`/category/Marketplace`} 
            >
          <FaShoppingBag className={styles.icon} />
          </Link>
        </div>


      </header>
      <div >

        <Toolbar sx={{ justifyContent: "center", gap: 4 }} className={styles.horizontalNav}>
          {navItems.map((item, index) => (
            <Link key={index} 
              // href={`/${item.toLowerCase()}`} 
              href={`/category/${item.toLowerCase().replace(/ /g, "-")}`} 
            >
              <Typography>
                {item}
              </Typography>
            </Link>
          ))}
        </Toolbar>
      </div>

    </div>
  )
}

export default Header;
