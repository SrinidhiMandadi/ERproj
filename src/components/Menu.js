import React,{ useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
// import '../css/dropdownstyle.css';
// import ReactDOM from 'react-dom';
import Dropdown from '../components/Dropdown';
import Dropdown2 from './Dropdown2';


const Menu = props => {
  // ReactDOM.render(<Dropdown />, document.getElementById('root'));
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
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
    <div id="main-menu" className="main-menu">
      <ul>
        {data.allMainMenuJson.edges.map(({ node }) => (
          <li key={node.name}>
            <Link to={node.url} activeClassName="active">{node.name}</Link>
          </li>
        ))}
        <Dropdown />
        <Dropdown2/>
       </ul>
     </div>
  );
};

export default Menu;
