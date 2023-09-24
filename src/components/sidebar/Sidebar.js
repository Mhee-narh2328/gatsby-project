// src/components/MobileSidebar.js
import React, { useState } from 'react';
import { Link, graphql } from "gatsby"
import './sidebar.css';
import { StaticImage } from "gatsby-plugin-image"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs"

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

          <div className="dropdown">
              <div className="dropdown-btn" onClick={(e) =>
                SetIsActive(!isActive)}>Categories
                <span><MdOutlineKeyboardArrowDown /></span>
              </div>
              {isActive && (
                <div className="dropdown-content">
                  {/* <div className="dropdown-item">
                    <div>
                      <StaticImage alt='logo' src='../../images/home.png' className="dropdown-Image" />
                    </div>
                    <span>All</span>
                  </div> */}
                  <div className="dropdown-item">
                    <div>
                      <StaticImage className="dropimage" alt='logo' src='../../images/home.png'/>   
                    </div>
                    <span>House</span>
                  </div>
                   <div className="dropdown-item">
                    <div>
                    <StaticImage className="dropimage" alt='logo' src='../../images/office.png'/>   
                    </div>
                    <span>Office</span>
                  </div>
                   <div className="dropdown-item">
                    <div>
                    <StaticImage className="dropimage" alt='logo' src='../../images/wardrobe.png'/>   
                    </div>
                    <span>Wardrobe</span>
                  </div>
                  <div className="dropdown-item">
                    <div>
                    <StaticImage className="dropimage" alt='logo' src='../../images/storage.png'/>   
                    </div>
                    <span>Storage</span>
                  </div>
                   <div className="dropdown-item">
                    <div>
                      <StaticImage className="dropimage" alt='logo' src='../../images/table.png'/>   
                    </div>
                    <span>Table</span>
                  </div>
                  <div className="dropdown-item">
                    <div>
                      <StaticImage className="dropimage" alt='logo' src='../../images/sofa.png'/>   
                    </div>
                    <span>Sofa</span>
                  </div>
                  <div className="dropdown-item">
                    <div>
                      <StaticImage className="dropimage" alt='logo' src='../../images/office chair (2).png'/>   
                    </div>
                    <span>Chair</span>
                  </div>
                  <div className="dropdown-item">
                    <div>
                      <StaticImage className="dropimage" alt='logo' src='../../images/stand.png'/>   
                    </div>
                    <span>Tv Stand</span>
                  </div>
                  <div className="dropdown-item">
                    <div>
                      <StaticImage className="dropimage" alt='logo' src='../../images/wall.png'/>   
                    </div>
                    <span>Wall Cladding</span>
                  </div>
                </div>
              )}
            </div>
            <div className="dropdown">
              <div className="dropdown-btn" onClick={(e) =>
                SetIsActive(!isActive)}>Price
                <span><MdOutlineKeyboardArrowDown /></span>
              </div>
              {isActive && (
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(null)} />
                    All
                  </div>
                  <div className="dropdown-item">
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(1)} />
                    Under 50,000
                  </div>
                  <div className="dropdown-item">
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(2)} />
                    50,000-100,000
                  </div>
                  <div className="dropdown-item">
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(3)} />
                    100,000-150,000
                  </div>
                  <div className="dropdown-item">
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(4)} />
                    150,000-200,000
                  </div>
                  <div className="dropdown-item">
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(5)} />
                    200,000-250,000
                  </div>
                  <div className="dropdown-item">
                    <input type="radio" name="priceFilter" onClick={() => setPriceFilter(6)} />
                    Over 250,000
                  </div>
                </div>
              )}
            </div>
          </div>
        <div className="mobile-menu-icon" onClick={toggleSidebar}>
          <StaticImage src= '../../images/filter.png' alt='menu'/>
        </div>
    </div>
  );
}


// export const query = graphql`
// query Homepage {
//   allContentfulProduct(limit :9) {
//     nodes {
//       category {
//         categoryName
//         contentful_id
//         id
//       }
//       id
//       productColor
//       productDescription {
//         raw
//       }
//       productImage1 {
//         url
//       }
//       productImage2 {
//         url
//       }
//       productImage3 {
//         url
//       }
//       productImage4 {
//         url
//       }
//       productMaterial
//       productName
//       productParagraph
//       productPrice
//       productSeatingCapacity
//       productSize
//     }
  
//   }
//   allContentfulCategory(limit: 10) {
//     nodes {
//       categoryName
//       categoryImage{
//         url
//       }
//     }
//   }
// }
// `;


export default MobileSidebar;
