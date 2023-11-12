import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import '../styles/header.module.css'

import { usePathname } from 'next/navigation'

export default function Header() {
    const currentPath = usePathname()

    let brandname_navlink
    let aboutme_navlink
    let projects_navlink
    if (currentPath === '/') {
        brandname_navlink = <Navbar.Brand href="#about" className="navbar-brand logo-text">Junbong Jang</Navbar.Brand>;
        aboutme_navlink = <a className="nav-link" href="#about">About Me</a>;
        projects_navlink = <a className="nav-link" href="#projects">Projects</a>;
        // talks_navlink = <a className="nav-link" href="#talks">Talks</a>;
    } else {
        brandname_navlink = <Link href="/" className="navbar-brand logo-text">Junbong Jang</Link>;
        aboutme_navlink = <Link href="/" className="nav-link">About Me</Link>
        projects_navlink = <Link href="/" className="nav-link">Projects</Link>
        // talks_navlink = <Link href="/" className="nav-link">Talks</Link>
    }


  return (

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        {brandname_navlink}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: "flex-end"}}>
          <Nav className="ml-auto">
            {aboutme_navlink}
            {projects_navlink}
            <Link href="/blog" className="nav-link" >Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
