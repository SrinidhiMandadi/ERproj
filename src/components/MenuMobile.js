import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Dropdown from '../components/Dropdown';
import Dropdown2 from './Dropdown2';

const MobileMenu = props => {
  const data = useStaticQuery(graphql`
    query MainMobileMenuQuery {
      allMainMenuJson {
        edges {
          node {
            name
            url
            weight
          }
        }
      }
    }
  `);
  return (
    <div id="main-menu-mobile" className={`main-menu-mobile ${props.active ? 'open' : ''}`}>
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.name}>
            <Link to={node.url} activeClassName="active">{node.name}</Link>
          </li>
        ))}
               <Dropdown />
               <Dropdown2 />

      </ul>
    </div>
  );
};

export default MobileMenu;
