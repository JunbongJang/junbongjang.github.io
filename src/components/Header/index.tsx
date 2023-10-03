import { Link, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navigation_styles.css';


export function Header() {
    const location = useLocation();
    let currentPath = location.pathname;

    let aboutme_navlink
    let projects_navlink
    let talks_navlink
    if (currentPath == '/') {
        aboutme_navlink = <a className="nav-link" href="#about">About Me</a>;
        projects_navlink = <a className="nav-link" href="#projects">Projects</a>;
        talks_navlink = <a className="nav-link" href="#talks">Talks</a>;
    } else {
        aboutme_navlink = <Link to="/" className="nav-link">About Me</Link>
        projects_navlink = <Link to="/" className="nav-link">Projects</Link>
        talks_navlink = <Link to="/" className="nav-link">Talks</Link>
    }


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#about" className="navbar-brand logo-text page-scroll">Junbong Jang</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {aboutme_navlink}
            {projects_navlink}
            <Link to="/blog" className="nav-link" >Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}
