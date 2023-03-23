import React, { useState } from "react";
import * as descriptionStyles from "../../styling/style.module.css";
import Layout from "../../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import { BsArrowRight } from "react-icons/bs";
import { Link, graphql } from "gatsby";
// react Bootstrap Configuration
import "../../../node_modules/react-bootstrap/dist/react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import '../../../src/styling/style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data
            return (
                <a href={uri} className="underline">
                    {children}
                </a>
            )
        },
        [BLOCKS.HEADING_2]: (node, children) => {
            return <h2>{children}</h2>
        },
    },
}

const DescriptionPage = (props) => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Layout>
            <section>
                <div className={descriptionStyles.descriptionSection}>
                    <div className={descriptionStyles.descriptionContainer}>
                        <div>
                            <img
                                src={props.data.contentfulProduct.productImage1.url}
                                alt = "frontview"
                                className={descriptionStyles.descriptionContainerImage}
                            />
                        </div>
                        <div className={descriptionStyles.descriptionImages}>
                            <img src={props.data.contentfulProduct.productImage2.url} alt = "backview" className={descriptionStyles.descriptionImage} />
                            <img src={props.data.contentfulProduct.productImage3.url} alt = "leftview" className={descriptionStyles.descriptionImage} />
                            <img src={props.data.contentfulProduct.productImage4.url} alt = "rightview" className={descriptionStyles.descriptionImage} />
                        </div>
                    </div>
                    <div className={descriptionStyles.descriptionContainerContent}>
                        <h1>{props.data.contentfulProduct.productName}</h1>
                        <p>{props.data.contentfulProduct.productParagraph}</p>
                        <h4>#{props.data.contentfulProduct.productPrice}</h4>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact Seller</button>
                        {isMenuOpen && (
                        <div
                            className={descriptionStyles.descriptionContainerContentImages}
                        >
                            <Link to="https://wa.link/chnxm1" target="_blank">
                                <StaticImage
                                    src="../../images/whatsapp.png"
                                    className={descriptionStyles.descriptionContainerContentImage}
                                />
                            </Link>

                            <Link to="https://ig.me/m/murpelmodernfurniture" target="_blank">
                                <StaticImage
                                    src="../../images/instagram.png"
                                    className={descriptionStyles.descriptionContainerContentImage}
                                />
                            </Link>

                            <StaticImage
                                src="../../images/phone.png"
                                className={descriptionStyles.descriptionContainerContentImage}
                            />

                            <Link >
                                <StaticImage
                                    src="../../images/gmail.png"
                                    className={descriptionStyles.descriptionContainerContentImage}
                                />
                            </Link>

                        </div>
                        )}
                    </div>
                </div>
                <div className={descriptionStyles.pageDescription}>
                    <h1>Description</h1>
                    <div className={descriptionStyles.pageDescriptionBoxes}>
                        <div className={descriptionStyles.pageDescriptionBox}>
                            <StaticImage
                                src="../../images/vector (3).png"
                                className={descriptionStyles.pageDescriptionBoxImage}
                            />
                            <p>Size</p>
                            <h4>{props.data.contentfulProduct.productSize}</h4>
                        </div>
                        <div className={descriptionStyles.pageDescriptionBox}>
                            <StaticImage
                                src="../../images/paint.png"
                                className={descriptionStyles.pageDescriptionBoxImage}
                            />
                            <p>Color</p>
                            <h4>{props.data.contentfulProduct.productColor}</h4>
                        </div>
                        <div className={descriptionStyles.pageDescriptionBox}>
                            <StaticImage
                                src="../../images/vector (4).png"
                                className={descriptionStyles.pageDescriptionBoxImage}
                            />
                            <p>Material</p>
                            <h4>{props.data.contentfulProduct.productMaterial}</h4>
                        </div>
                        <div className={descriptionStyles.pageDescriptionBox}>
                            <StaticImage
                                src="../../images/office chair.png"
                                className={descriptionStyles.pageDescriptionBoxImage}
                            />
                            <p>Seating Capacity</p>
                            <h4>{props.data.contentfulProduct.productSeatingCapacity}</h4>
                        </div>
                    </div>
                    <div className={descriptionStyles.pageDescriptionContent}>
                        <p>{renderRichText(props.data.contentfulProduct.productDescription, options)}</p>
                    </div>
                </div>

                <div className={descriptionStyles.similarProductsSection}>
                    <h2>You may also like</h2>

                    <Swiper
                        className="mySwiper"
                        spaceBetween={30}
                        loop={"true"}
                        navigation
                        modules={[Navigation]}
                        slidesPerView={4}
                        id='box-swiper'
                        breakpoints={{
                            320: {
                                slidesPerView: 2.2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3.2,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 25,

                            },
                        }}>
                        {props?.data.allContentfulProduct.nodes.map((node, i) => (
                            <SwiperSlide >
                                <div className={descriptionStyles.similarProducts}>
                                    <div className={descriptionStyles.productGridBoxImageCon}>
                                        <img
                                            alt="logo"
                                            src={node?.productImage1.url}
                                            className={descriptionStyles.productGridBoxImage}
                                        />
                                    </div>
                                    <h3>{node.productName}</h3>
                                    <p>
                                        {node.productParagraph}
                                    </p>
                                    <div className={descriptionStyles.productBoxGrid}>
                                        <h5>{node.productPrice}</h5>
                                        <Link to="">
                                            <h6>
                                                BUY NOW{" "}
                                                <span>
                                                    <BsArrowRight />
                                                </span>
                                            </h6>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </Layout>
    );
}


export const query = graphql`
query ($id: String){
    contentfulProduct(id: {eq: $id}) {
      productPrice
      productColor
      productName
      productMaterial
      productParagraph
      productSeatingCapacity
      productSize
      productDescription {
        raw
      }
      productImage1 {
        url
      }
      productImage2 {
        url
      }
      productImage3{
        url
      }
      productImage4{
        url
      }
    }
    allContentfulProduct(filter: {createdAt: {lt: "TODAY"}}) {
        nodes {
          id
          productName
          productPrice
          productParagraph
          createdAt
          productImage1 {
            url
          }
        }
      }
  }
`;

export default DescriptionPage
export const Head = () => <title>Description Page</title>;
