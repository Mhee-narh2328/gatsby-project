import React from "react"
import MobileMenu from "./MobileMenu";
import { useMediaQuery } from "react-responsive";
import{navbar,
        nav,
        container,
        navList,
        navItems,
        icons,
        mobileLogo,
        footer} from'./layout.module.css'
import { StaticImage } from "gatsby-plugin-image"
import {AiOutlineInstagram}  from "react-icons/ai"
import {SlSocialTwitter} from "react-icons/sl"
import {HiOutlinePhone} from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import { Link , useStaticQuery, graphql} from "gatsby"

export default function Layout({pageTitle, children}) {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  //   `)
  return (
    <div className={container}>
      {/* <header  className={siteTitle}>{data.site.siteMetadata.title}</header> */}
        <header>
            <div className={navbar}>
               <div>
                  <h2> <Link to = "/">Murpel Modern Furniture</Link></h2>
               </div>
               <div className={nav}>
                <ul className= {navList}>
                    <Link to ="/" className={navItems} >Home</Link>
                    <Link to = "/shop" className={navItems}>Shop</Link>
                    <Link to="" className={navItems}>About</Link>
                </ul>
               </div>
               <MobileMenu />
               <div className={mobileLogo}>
               <StaticImage 
                        alt='logo'
                        src='../../images/Rectangle 7.png'
                    />
               </div>
            </div>
        </header>
      {children}
      <footer>
        <div className= {footer}>
          <p>Contact us</p>
          <div>
            <span><AiOutlineInstagram className={icons}/></span>
            <span><FiFacebook className={icons}/></span>
            <span><SlSocialTwitter className={icons}/></span>
            <span><HiOutlinePhone className={icons}/></span>
          </div>
          <h6>Copyright Murpelmodenfurniture (c)2022</h6>
        </div>
      </footer>
    </div>
  )
}