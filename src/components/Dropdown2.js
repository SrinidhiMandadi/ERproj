import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const Dropdown2 = () => {
  return (
    <MDBDropdown>
    <MDBDropdownToggle caret color="primary" to="/products"> 
    Products    
    </MDBDropdownToggle>
    <MDBDropdownMenu basic>
      <MDBDropdownItem href="/products/page1">page1</MDBDropdownItem>
      <MDBDropdownItem href="/products/page2">page2</MDBDropdownItem>
      <MDBDropdownItem href="/products/page3">page3</MDBDropdownItem>
      <MDBDropdownItem href="/products/page4">page4</MDBDropdownItem>
      <MDBDropdownItem href="/products/page5">page5</MDBDropdownItem>
      <MDBDropdownItem href="/products/page6">page6</MDBDropdownItem>
    </MDBDropdownMenu> 
  </MDBDropdown>
  );
}




export default Dropdown2;