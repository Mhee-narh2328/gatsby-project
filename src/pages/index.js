
import React, { Component, useState } from "react"
import * as indexStyles from '../styling/style.module.css'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Sidebar from "../components/sidebar/Sidebar";

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
// import { AiOutlineSearch } from "react-icons/ai";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// // import { BsBuilding } from "react-icons/bs";

// import { BsArrowRight,BsFillFilterCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"

// react Bootstrap Confirguration
import "../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import Seo from '../components/seo'


const Home = ({ data }) => {
  // const [category, setCategory] = useState(null)
  // const [priceFilter, setPriceFilter] = useState(null)
  // const [isActive, SetIsActive] = useState(false)

  return (
    <Layout>
      <section>
        <div className={indexStyles.heroHeader}>
          <h1>Every <span>Furniture</span> has a <br /> beautiful story</h1>
        </div>
        <div className={indexStyles.heroGrid}>
          <div>
            <StaticImage alt='logo' src='../images/Group 10152.png'  className={indexStyles.heroGridImage} />
          </div>
          <div className={indexStyles.heroContent}>
            <p>We are the best furniture platform. We are already working on thousands of <br /> future home projects. Trust us, you will surely be satisfied.</p>
            <div className={indexStyles.heroContentGrid}>
              <StaticImage alt='logo' src='../images/vector.png' className={indexStyles.heroContentImage} />
              <button>Shop Now</button>
              <p>Contact Us <span><StaticImage alt='logo' src='../images/vectorr.png' className={indexStyles.heroContentArrow} /></span> </p>
            </div>
          </div>
          <div>
            <StaticImage alt='' src='../images/Group 10151.png' className={indexStyles.heroGridImage} />
          </div>

        </div>
        <div className={indexStyles.serviceGrid}>
          <div className={indexStyles.serviceGridBlue}>
            <StaticImage alt='logo' src='../images/car.png' className={indexStyles.serviceGridImg} />
            <div className={indexStyles.serviceGridContentBlue}>
              <h4>Fast Delivery</h4>
              <p>We offer you the best shopping experience of same day delivery to our customers</p>
            </div>
          </div>
          <div className={indexStyles.serviceGridRed}>
            <StaticImage alt='logo' src='../images/truck.png' className={indexStyles.serviceGridImg} />
            <div className={indexStyles.serviceGridContentRed}>
              <h4>Free Return</h4>
              <p>You can return all eligible item(s) within 15 days for Official Store</p>
            </div>
          </div>
          <div className={indexStyles.serviceGridYellow}>
            <StaticImage alt='logo' src='../images/support.png' className={indexStyles.serviceGridImg} />
            <div className={indexStyles.serviceGridContentYellow}>
              <h4>24/7 Support</h4>
              <p>We are here to ensure our customers' success and business productivity</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Sidebar />
      </section>
      <section>
        <div className={indexStyles.designGrid}>
          <div>
            <StaticImage src='../images/Group 35260.png' />
          </div>
          <div className={indexStyles.designGridContent}>
            <h5>Designing Modern, Unique & <span>Smart Furniture</span> </h5>
            <p>Unique furniture makes a statement. With modern furniture design, you can transform a space in ways that wall art can’t. If you want to impress your guests, eye-catching furniture will have a bigger impact.</p>
            <p>There isn’t a rule that says you can’t use unique furniture in a living room, dining room, or home office. However, such furniture is relegated to game rooms or backyard areas.</p>
          </div>
        </div>
      </section>
      <section>
        <div className={indexStyles.accordionContainer}>
          <h1>Frequently Asked <span>Questions</span> (FAQs)</h1>
          <div>
            <Accordion defaultActiveKey="0" flush variant="outline-light">
              {data?.allContentfulAccordion.nodes.map((node, i) => (
                <Accordion.Item eventKey={node.accordionId}>
                  <Accordion.Header>
                    <strong>
                      <h5>{node.header}</h5>
                    </strong>
                    </Accordion.Header>
                    <Accordion.Body>
                    < h6>{node.accordionParagraph.accordionParagraph}</h6>
                    </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );

}
export const query = graphql`
query Homepage {
  allContentfulProduct(limit :9) {
    nodes {
      category {
        categoryName
        contentful_id
        id
      }
      id
      productColor
      productDescription {
        raw
      }
      productImage1 {
        url
      }
      productImage2 {
        url
      }
      productImage3 {
        url
      }
      productImage4 {
        url
      }
      productMaterial
      productName
      productParagraph
      productPrice
      productSeatingCapacity
      productSize
    }
  
  }
  allContentfulAccordion(limit: 5){
    nodes {
      accordionId
      header
      id
      accordionParagraph {
        accordionParagraph
      }
    }
  }
  allContentfulCategory(limit: 10) {
    nodes {
      categoryName
      categoryImage{
        url
      }
    }
  }
}
`;

export default Home

export const Head = () => <Seo title="Home Page" />