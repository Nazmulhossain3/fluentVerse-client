import { Navbar, TextInput } from "keep-react";
import {
  
 
 
  MagnifyingGlass,
  
} from "phosphor-react";
const Header = () => {
    return (
        <div>
             <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-evenly ">
       

        <Navbar.Container className="flex items-center gap-10">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-4"
          >
            <TextInput
              id="#id-10"
              placeholder="Search anything"
              color="gray"
              sizing="sm"
              type="text"
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="left"
            />
            <Navbar.Link
            
             linkName="Home"
             href="/"
           
            
            />
            <Navbar.Link
             linkName="Instructors"
             href="/Instructors"
            />
            <Navbar.Link
              linkName="Classes"
              href="/classes"
            />
          </Navbar.Container>
          <Navbar.Container className="flex gap-1">
            <Navbar.Toggle className="block" />
            Menu
          </Navbar.Container>
        </Navbar.Container>
        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
        >
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link
              linkName="Home"
             
              className="!py-0"
              to="/"
            />
            <Navbar.Link
              linkName="Classes"
             
              className="!py-0"
              href="/classes"
            />
            <Navbar.Link
              linkName="Dashboard"
             
              className="!py-0"
              href="/dashboard"
            />
            <Navbar.Link linkName="News" className="!py-0" />
            <Navbar.Link linkName="Instructors" href='/Instructors' className="!py-0" />
          </Navbar.Container>
        </Navbar.Collapse>
      </Navbar.Container>
    </Navbar>
            
            
        </div>
    );
};

export default Header;