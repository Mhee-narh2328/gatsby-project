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

import Seo from '../components/seo'

const Shopping = ({data}) =>{
    const [category, setCategory] = useState(null)
    const [priceFilter, setPriceFilter] = useState(null)
    const [isActive, SetIsActive] = useState(false)
    return (
      <Layout>
        <section>
        <div className={shoppingStyles.productGrid}>
        <div>
            <div>
              <form>
                <input type="text" placeholder="Search.." name="search" className={shoppingStyles.searchInput}/>
                <button type="submit" className={shoppingStyles.searchButton}><AiOutlineSearch/></button>
              </form>
            </div>
            <div className= {shoppingStyles.dropdown}>
                  <div className={shoppingStyles.dropdownBtn} onClick ={(e) =>
                  SetIsActive(!isActive)}>Categories
                  <span><MdOutlineKeyboardArrowDown/></span>
                  </div>
                  {isActive && (
                      <div className={shoppingStyles.dropdownContent}>
                        <div className={shoppingStyles.dropdownItem}>
                          <div>
                            <StaticImage alt='logo' src= '../images/home.png' className= {shoppingStyles.dropdownImage}/>
                          </div>
                          <span onClick={ () => setCategory('All') }>All</span>
                        </div>
                        { data?.allContentfulCategory.nodes.map((node, i) => (
                          <div className={shoppingStyles.dropdownItem}>
                          <div>
                          <img alt='logo' src={ node?.categoryImage.url } className= {shoppingStyles.dropdownImage}/>
                          </div>
                          <span  key={ node?.id } 
                           onClick={ () => setCategory(node?.categoryName) } 
                           >
                            { node?.categoryName }
                          </span>
                          </div>
                        ))}
                          
                      </div>
                  )}
            </div>

            <div className= {shoppingStyles.dropdown}>
                  <div className={shoppingStyles.dropdownBtn} onClick ={(e) =>
                  SetIsActive(!isActive)}>Price
                  <span><MdOutlineKeyboardArrowDown/></span>
                  </div>
                  {isActive && (
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
              }).map((node, i) => (
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
          <button><IoIosArrowBack className={shoppingStyles.paginationIcon}/></button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button><IoIosArrowForward className={shoppingStyles.paginationIcon}/></button>
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