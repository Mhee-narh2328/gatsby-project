// src/components/MobileSidebar.js
import React, { useState } from 'react';
import { Link, graphql } from "gatsby"
// import { FaBars } from 'react-icons/fa';
import {filter,
        dropdown,
        dropdownBtn,
        dropdownContent,
        dropdownImage,
        dropdownItem} from './Sidebar.css';
import { StaticImage } from "gatsby-plugin-image"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MobileSidebar = ({ data }) =>{
  const [category, setCategory] = useState(null)
  const [priceFilter, setPriceFilter] = useState(null)
  const [isActive, SetIsActive] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Your sidebar content goes here */}
        <div className={dropdown}>
              <div className={dropdownBtn} onClick={(e) =>
                SetIsActive(!isActive)} >Categories
                <span><MdOutlineKeyboardArrowDown /></span>
              </div>
              {isActive && (
                <div className={dropdownContent}>
                  <div className={dropdownItem}>
                    <div>
                      <StaticImage alt='logo' src='../../images/home.png' className={dropdownImage} />
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
      <div className="mobile-menu-icon" onClick={toggleSidebar}>
        <StaticImage src= '../../images/filter.png' className={filter}></StaticImage>
      </div>
    </div>
    </div>
  );
}

export const query = graphql`
query Homepage {
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
;

export default MobileSidebar;
