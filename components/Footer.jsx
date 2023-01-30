// import a from 'next/a'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Connect With Us & Save
      </p>
      <p className='footer-subscription-text'>
        Sign Up for Email and Get 10% off
      </p>
      <div className='input-areas'>
        <form>
          <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
          />
          <button className='footer-btn'>Subscribe</button>
        </form>
      </div>
    </section>
    <div className='footer-links'>
      <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>Company</h2>
          <a href='/sign-up'>How it works</a>
          <a  href='#'>About Us</a>
          <a  href='#'>Donations & Sponsorships</a>
          <a  href='#'>Investor Relations</a>
          <a  href='#'>Terms of Service</a>
        </div>
        <div className='footer-link-items'>
          <h2>Services</h2>
          <a  href='#'>My Account</a>
          <a  href='#'>Support</a>
          <a  href='#'>Contact Customer Service</a>
          <a  href='#'>Track Your Order</a>
          <a  href='#'>Gift Cards</a>
        </div>
      </div>
      <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2>Shop</h2>
          <a  href='#'>Team Websites & Uniforms</a>
          <a  href='#'>Find A Store</a>
          <a  href='#'>Store Services</a>
          <a  href='#'>Promos and Coupons</a>
          <a  href='#'>Top Brands</a>
        </div>
        <div className='footer-link-items'>
          <h2>Resources</h2>
          <a  href='#'>Returns and Exchanges</a>
          <a  href='#'>Shipping Rates</a>
          <a  href='#'>Best Price Guarantee</a>
          <a  href='#'>Recalls</a>
          <a  href='#'>Promo Exclusions</a>
        </div>
      </div>
    </div>
    <section className='social-media'>
      <div className='social-media-wrap'>
        <div className='footer-logo'>
          <a  href='#' className='social-logo'>
            boAt 2.0
            <i className='fab fa-typo3' />
          </a>
        </div>
        <small className='website-rights'>boAt 2.0 © 2020</small>
        <div className='social-icons'>
          <a
            className='social-icon-link facebook'
             href='#'
            target='_blank'
            aria-label='Facebook'
          >
          
           <AiFillFacebook/>
          </a>
          <a
            className='social-icon-link instagram'
             href='#'
            target='_blank'
            aria-label='Instagram'
          >
             <AiFillInstagram/>
          </a>
          <a
            className='social-icon-link youtube'
             href='#'
            target='_blank'
            aria-label='Youtube'
          >
             <AiFillYoutube/>
          </a>
          <a
            className='social-icon-link twitter'
             href='#'
            target='_blank'
            aria-label='Twitter'
          >
            <AiOutlineTwitter/>
          </a>
          <a
            className='social-icon-link twitter'
             href='#'
            target='_blank'
            aria-label='LinkedIn'
          >
             <AiFillLinkedin/>
          </a>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Footer
