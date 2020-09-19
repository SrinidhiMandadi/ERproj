import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const Dropdown = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary" to="/services"> 
      Services     
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem href="/services/accounting">Accounting</MDBDropdownItem>
        <MDBDropdownItem href="/services/business-advisory">Business-Advisory</MDBDropdownItem>
        <MDBDropdownItem href="/services/business-sales">Business-Sales</MDBDropdownItem>
        <MDBDropdownItem href="/services/mergers">Mergers</MDBDropdownItem>
        <MDBDropdownItem href="/services/superannuation">Super Annuation</MDBDropdownItem>
        <MDBDropdownItem href="/services/tax-preperation">Tax-Preperation</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

//  export default DropdownPage;






// import React, { useState } from 'react';
// import '../css/dropdownstyle.css';
// import { Link } from 'react-router-dom';



// class Dropdown extends React.Component {
// constructor(){
//  super();
 
//  this.state = {
//        displayMenu: false,
//      };

//   this.showDropdownMenu = this.showDropdownMenu.bind(this);
//   this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

// };

// showDropdownMenu(event) {
//     event.preventDefault();
//     this.setState({ displayMenu: true }, () => {
//     document.addEventListener('click', this.hideDropdownMenu);
//     });
//   }

//   hideDropdownMenu() {
//     this.setState({ displayMenu: false }, () => {
//       document.removeEventListener('click', this.hideDropdownMenu);
//     });

//   }

//   render() {
//     return (
//         <div  className="dropdown" style = {{background:"red",width:"200px"}} >
//          <div className="button" onClick={this.showDropdownMenu} to= "/services"> {"/services/"} </div>

//           { this.state.displayMenu ? (
//           <ul>
//          <li><a className="active" href="#Create Page">Create Page</a></li>
//          <li><a href="/services/accounting">Accounting</a></li>
//          <li><a href="/services/business-advisory">Business-Advisory</a></li>
//          <li><a href="/services/business-sales">Business-Sales</a></li>
//          <li><a href="/services/mergers">Mergers</a></li>
//          <li><a href="/services/superannuation">Super Annuation</a></li>
//          <li><a href="/services/tax-preperation">Tax-Preperation</a></li>
//           </ul>
//         ):
//         (
//           null
//         )
//         }

//        </div>

//     );
//   }
// }
                       //another code
// function Dropdown() {
//     const [click, setClick] = useState(false);
  
//     const handleClick = () => setClick(!click);
  
//     return (
//       <>
        
//           onClick={handleClick}
//           className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
//         >
//              {services.map(edge=> {
//           return (
//               <li key={edge.node.id}>
//                   <Link
//                 // className={item.cName}

//                 to={edge.node.fields.slug}
//                 onClick={() => setClick(false)}
//               >
//                 {edge.node.frontmatter.title}
//               </Link>
//             </li>
//           );
//         })}
//     </>
//   );
// }





export default Dropdown;