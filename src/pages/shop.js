import React,{useState} from "react"
import * as shoppingStyles from '../styling/style.module.css'

import Layout from "../components/layout/layout"
import { Link , graphql} from "gatsby"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import {BsArrowRight}  from "react-icons/bs";
import {  IoIosArrowBack,
          IoIosArrowForward} from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { StaticImage } from "gatsby-plugin-image"
// react Bootstrap Confirguration
import "../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import '../styling/sidebar.css'

import Seo from '../components/seo'

const Shopping = ({data}) =>{
    const [category, setCategory] = useState(null)
    const [priceFilter, setPriceFilter] = useState(null)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCategoryActive, setIsCategoryActive] = useState(false);
    const [isPriceActive, setIsPriceActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9; // Number of products to display per page


    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };

    const openCategoryDropdown = () => {
      setIsCategoryActive(!isCategoryActive);
    };
  
    const openPriceDropdown = () => {
      setIsPriceActive(!isPriceActive);
    };

    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
    return (
      <Layout>
        <section>
        <div className={shoppingStyles.productGrid}>
        <div> 
            <div className={shoppingStyles.searchForm}>
              <form>
                <input type="text" placeholder="Search.." name="search" className={shoppingStyles.searchInput} value={searchQuery} onChange={handleSearchInputChange}/>
                <button type="submit" className={shoppingStyles.searchButton}><AiOutlineSearch/></button>
              </form>
              <div className="mobile-menu-icon" onClick={toggleSidebar}>
                <StaticImage src= '../images/filter.png' alt='menu'/>
              </div>
              {/* <MobileSidebar /> */}
            </div>
            <div>
              <div className={shoppingStyles.dropdown}>
                <div className={shoppingStyles.dropdownBtn}  onClick={openCategoryDropdown} >Categories
                  <span><MdOutlineKeyboardArrowDown /></span>
                </div>
                {isCategoryActive && (
                  <div className={shoppingStyles.dropdownContent}>
                    <div className={shoppingStyles.dropdownItem}>
                      <div>
                        <StaticImage alt='logo' src='../images/home.png' className={shoppingStyles.dropdownImage} />
                      </div>
                      <span onClick={() => setCategory('All')}>All</span>
                    </div>
                    {data?.allContentfulCategory.nodes.map((node, i) => (
                      <div className={shoppingStyles.dropdownItem}>
                        <div>
                          <img alt='logo' src={node?.categoryImage.url} className={shoppingStyles.dropdownImage} />
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
              <div className={shoppingStyles.dropdown}>
                <div className={shoppingStyles.dropdownBtn} onClick={openPriceDropdown}>Price
                  <span><MdOutlineKeyboardArrowDown /></span>
                </div>
                {isPriceActive && (
                  <div className={shoppingStyles.dropdownContent}>
                    <div className={shoppingStyles.dropdownItem}>
                      <input type="radio" name="priceFilter" onClick={() => setPriceFilter(null)} />
                      All
                    </div>
                    <div className={shoppingStyles.dropdownItem}>
                      <input type="radio" name="priceFilter" onClick={() => setPriceFilter(1)} />
                      Under 50,000
                    </div>
                    <div className={shoppingStyles.dropdownItem}>
                      <input type="radio" name="priceFilter" onClick={() => setPriceFilter(2)} />
                      50,000-100,000
                    </div>
                    <div className={shoppingStyles.dropdownItem}>
                      <input type="radio" name="priceFilter" onClick={() => setPriceFilter(3)} />
                      100,000-150,000
                    </div>
                    <div className={shoppingStyles.dropdownItem}>
                      <input type="radio" name="priceFilter" onClick={() => setPriceFilter(4)} />
                      150,000-200,000
                    </div>
                    <div className={shoppingStyles.dropdownItem}>
                      <input type="radio" name="priceFilter" onClick={() => setPriceFilter(5)} />
                      200,000-250,000
                    </div>
                    <div className={shoppingStyles.dropdownItem}>
                      <input type="radio" name="priceFilter" onClick={() => setPriceFilter(6)} />
                      Over 250,000
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                  <button type="submit" onClick={closeSidebar} className={shoppingStyles.searchArrow}><StaticImage src= '../images/close.png' className={shoppingStyles.arrow} alt="close"/></button>
                  <div className="dropdown">
                      <div className="dropdown-btn"onClick={openCategoryDropdown}>Categories
                        <span><MdOutlineKeyboardArrowDown /></span>
                      </div>
                      {isCategoryActive && (
                        <div className="dropdown-content">
                          <div className="dropdown-item">
                            <div>
                              <StaticImage alt='logo' src='../images/home.png' className={shoppingStyles.dropdownImage} />
                            </div>
                            <span onClick={() => setCategory('All')}>All</span>
                          </div>
                          {data?.allContentfulCategory.nodes.map((node, i) => (
                          <div className="dropdown-item">
                            <div>
                              <img alt='logo' src={node?.categoryImage.url} className="dropimage" />
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
                    <div className="dropdown">
                      <div className="dropdown-btn" onClick={openPriceDropdown}>Price
                        <span><MdOutlineKeyboardArrowDown /></span>
                      </div>
                      {isPriceActive && (
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
                {/* <div className="mobile-menu-icon" onClick={toggleSidebar}>
                  <StaticImage src= '../../images/filter.png' alt='menu'/>
                </div> */}
            </div>
          </div>
          <div>
            <div className= {shoppingStyles.productImageGrid}>
            {data?.allContentfulProduct.nodes.filter((node) => {
                  if (category === null || category === 'All'){
                    return node
                  } else if( node?.category[0].categoryName.toLowerCase().includes(category.toLowerCase())) {
                        return node
                      } return false
                }).filter((node) => {
                if (priceFilter === null) {
                  return node
                } else {
                  const minPrice = (priceFilter - 1) * 50000 + 1
                  const maxPrice = priceFilter * 50000
                  return node.productPrice >= minPrice && node.productPrice <= maxPrice
                } 
              }).filter((node) => {
                if (searchQuery === '') {
                  return node; // If no search query, show all products
                } else {
                  return (
                    node.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    node.productParagraph.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                }
              }).slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage) // Pagination
              .map((node, i) => (
                  <div key ={node?.id}>
                    <div className= {shoppingStyles.productGridBox}>
                    <div className= {shoppingStyles.productGridBoxImageCon}>
                    <img 
                      alt='productImage'
                      src={ node?.productImage1.url }
                      className= {shoppingStyles.productGridBoxImage}
                    />
                    </div>
                    <h3 key={node.productName}>{node.productName}</h3>
                    <p key={node.productParagraph}>{node.productParagraph}</p>
                      <div className= {shoppingStyles.productBoxGrid}>
                        <h5 key={node.productPrice}>#{node.productPrice}</h5>
                        <Link to = {`/index/${node.id}`}><h6>BUY NOW <span><BsArrowRight/></span></h6></Link>
                      </div>
                      </div>
                      </div>
                ))}      
            </div>
          </div>
          
        </div>
        <div className={shoppingStyles.paginationButton}>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <IoIosArrowBack className={shoppingStyles.paginationIcon} />
            </button>
            {Array.from({ length: Math.ceil(data?.allContentfulProduct.nodes.length / productsPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? shoppingStyles.activePage : ''}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === Math.ceil(data?.allContentfulProduct.nodes.length / productsPerPage)}
            >
              <IoIosArrowForward className={shoppingStyles.paginationIcon} />
            </button>
          </div>

      </section>
      </Layout>
    );
  }
export const query = graphql`
query Homepage {
  allContentfulProduct{
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
  allContentfulCategory {
    nodes {
      categoryName
      categoryImage{
        url
      }
    }
  }

}
`;


  export default Shopping
  export const Head = () =><Seo title="Shop Page" />