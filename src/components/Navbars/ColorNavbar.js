import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Headroom from "headroom.js";
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [textColor, setTextColor] = React.useState("text-white"); // ✨ warna teks
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();

    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 80 ||
        document.body.scrollTop > 80
      ) {
        setNavbarColor("bg-white shadow-sm");
        setTextColor("text-dark"); // ubah teks jadi hitam waktu discroll
      } else {
        setNavbarColor("navbar-transparent");
        setTextColor("text-white"); // ubah teks jadi putih di atas
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);

  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}

      <Navbar
        className={classnames("fixed-top", navbarColor)}
        expand="lg"
        id="navbar-main"
        style={{ transition: "all 0.3s ease" }}
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" className={textColor}>
              BalanganKreatif
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              BalanganKreatif
            </UncontrolledTooltip>

            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>

          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className={`nav-link ${textColor}`} to="/balangan">
                  Beranda
                </Link>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className={`mr-2 ${textColor}`} caret nav>
                  Kategori
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/product-page" tag={Link}>
                    Makanan
                  </DropdownItem>
                  <DropdownItem to="/product-minuman" tag={Link}>
                    Minuman
                  </DropdownItem>
                  <DropdownItem to="/product-jasa" tag={Link}>
                    Jasa
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorNavbar;
