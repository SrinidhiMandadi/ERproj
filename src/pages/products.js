import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import proimg from '../images/product.jpg';
import { Link, graphql } from 'gatsby';


const Products = props => {
        const products = props.data.products.edges;
        const { intro } = props.data;
       
    return (
        <Layout bodyClass="page-services">
        <SEO title="Products" />
        <div style={{ color: `white` }} align='center'>
          <img src={proimg} alt="this is my service img"/>
      </div>
      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
              <div dangerouslySetInnerHTML={{ __html: intro.html }} />
            </div>
          </div>
        </div>
     </div>
     <div className="container pb-6">
        <div className="row">
          {products.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  </div> 

      </Layout>
    );
};
export const query = graphql`
query ProductQuery {
    products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products\/.*/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    intro: markdownRemark(fileAbsolutePath: {regex: "/(products.md)/"}) {
      html
      frontmatter {
        title
        image
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
      }
    }
  }
`;
export default Products;
