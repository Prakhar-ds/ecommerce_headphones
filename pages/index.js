import Head from 'next/head'

import Image from 'next/image'
import HeroBanner from '../components/HeroBanner'
import styles from '../styles/Home.module.css'
import { client } from '../lib/client';
import Product from '../components/Product';
import FooterBanner from '../components/FooterBanner';
import React from 'react'

export default function Home({ products, bannerData }) {
  // console.log(bannerData)
  return (
    <div className={styles.container}>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Speaker There are many variations passages</p>
      </div>
      <div className='products-container'>
        {products.map((product) => <Product key={product._id} product={product}/>)}
      </div>
       <FooterBanner footerbanner={bannerData.length && bannerData[1]}/>
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}