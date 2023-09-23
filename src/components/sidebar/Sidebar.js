// src/components/Sidebar.js
import React, {useState } from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {productGrid,
        searchInput,
        searchButton,
        searchFilter,
        dropdown,
        dropdownBtn,
        dropdownContent,
        dropdownItem,
        dropdownImage,
        productBoxGrid,
        productImageGrid,
        productGridBox,
        productGridBoxImageCon,
        productGridBoxImage,
        productGridButton,

      }from  "./Sidebar.css"; 

import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight,BsFillFilterCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs"

const Sidebar = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // const Home = ({ data }) => {
  const [category, setCategory] = useState(null)
  const [priceFilter, setPriceFilter] = useState(null)
  const [isActive, SetIsActive] = useState(false)

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <section>
        <div className={productGrid}>
          <div>
            <div>
              <form>
                <input type="text" placeholder="Search.." name="search" className={searchInput} />
                <button type="submit"  className={searchButton}><AiOutlineSearch />
                </button>
                <button  className={searchFilter}><BsFillFilterCircleFill/><BsFillArrowLeftCircleFill/></button>
                <div id="filter">
                  
                </div>
              </form>
            </div>
            <div className={dropdown}>
              <div className={dropdownBtn} onClick={(e) =>
                SetIsActive(!isActive)} >Categories
                <span><MdOutlineKeyboardArrowDown /></span>
              </div>
              {isActive && (
                <div className={dropdownContent}>
                  <div className={dropdownItem}>
                    <div>
                      <StaticImage alt='logo' src='../images/home.png' className={dropdownImage} />
                    </div>
                    <span onClick={() => setCategory('All')}>All</span>
                  </div>
                  {data?.allContentfulCategory.nodes.map((node, i) => (
                    <div className={dropdownItem}>
                      <div>
                        <img alt='logo' src={node?.categoryImage.url} className={dropdownImage} />
                      </div>
                      <span key={node?.id}
                        onClick={() => setCategory(node?.categoryName)}
                      >
                        {node?.categoryName}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={dropdown}>
              <div className={dropdownBtn} onClick={(e) =>
                SetIsActive(!isActive)}>Price
                <span><MdOutlineKeyboardArrowDown /></span>
              </div>
              {isActive && (
                <div className={dropdownContent}>
                  <div className={dropdownItem}>
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(null)} />
                    All
                  </div>
                  <div className={dropdownItem}>
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(1)} />
                    Under 50,000
                  </div>
                  <div className={dropdownItem}>
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(2)} />
                    50,000-100,000
                  </div>
                  <div className={dropdownItem}>
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(3)} />
                    100,000-150,000
                  </div>
                  <div className={dropdownItem}>
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(4)} />
                    150,000-200,000
                  </div>
                  <div className={dropdownItem}>
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(5)} />
                    200,000-250,000
                  </div>
                  <div className={dropdownItem}>
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(6)} />
                    Over 250,000
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className={productImageGrid}>
              {data?.allContentfulProduct.nodes.filter((node) => {
                if (category === null || category === 'All') {
                  return node
                } else if (node?.category[0].categoryName.toLowerCase().includes(category.toLowerCase())) {
                  return node
                }
                return false
              }).filter((node) => {
                if (priceFilter === null) {
                  return node
                } else {
                  const minPrice = (priceFilter - 1) * 50000 + 1
                  const maxPrice = priceFilter * 50000
                  return node.productPrice >= minPrice && node.productPrice <= maxPrice
                } 
              }).map((node, i) => (
                <div key={node?.id}>
                  <div className={productGridBox}>
                    <div className={productGridBoxImageCon}>
                      <img
                        alt='productImage'
                        src={node?.productImage1.url}
                        className={productGridBoxImage}
                      />
                    </div>
                    <h3 key={node.productName}>{node.productName}</h3>
                    <p key={node.productParagraph}>{node.productParagraph}</p>
                    <div className={productBoxGrid}>
                      <h5 key={node.productPrice}>#{node.productPrice}</h5>
                      <Link to={`/index/${node.id}`}><h6>BUY NOW <span><BsArrowRight /></span></h6></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={productGridButton}>
              <Link to="/shop"><button>View more</button></Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};


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

export default Sidebar;
