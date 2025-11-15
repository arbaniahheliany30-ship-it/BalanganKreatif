import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
import { useNavigate } from "react-router-dom";

import ColorNavbar from "components/Navbars/ColorNavbar.js";
import ProductMinumanHeader from "components/Headers/ProductMinumanHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

function ProductMinumanPage() {
  const [activePill, setActivePill] = React.useState("1");
  const [searchTerm, setSearchTerm] = React.useState("");

  const navigate = useNavigate();

  // DATA LIST MINUMAN
  const warungs = [
    {
      category: "Kopi",
      color: "primary",
      name: "Hulo kopi",
      description: "Menyajikan kopi di Balangan.",
      img: require("assets/img/detailminuman/DetailMinuman1.jpg"),
      slug: "detailminuman1",
    },
    {
      category: "Kopi",
      color: "danger",
      name: "Tolil Drink Batumandi",
      description: "Kopi drink yang berada di Batumandi.",
      img: require("assets/img/detailminuman/DetailMinuman2.jpg"),
      slug: "detailminuman2",
    },
    {
      category: "Jus Buah",
      color: "success",
      name: "Juice Sultan Premium",
      description: "Jus segar premium.",
      img: require("assets/img/detailminuman/DetailMinuman3.jpg"),
      slug: "detailminuman3",
    },
    {
      category: "Teh",
      color: "secondary",
      name: "Kini cheese tea",
      description: "Menjual Berbagai Minuman Tea Kekinian.",
      img: require("assets/img/detailminuman/DetailMinuman4.jpg"),
      slug: "detailminuman4",
    },
  ];

  // FILTER
  const filteredWarungs = warungs.filter((w) => {
    const matchSearch =
      searchTerm.trim() === "" ||
      w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.category.toLowerCase().includes(searchTerm.toLowerCase());

    if (activePill === "1") return matchSearch;

    const categoryMap = {
      2: "Kopi",
      3: "Jus Buah",
      4: "Teh",
    };

    return matchSearch && w.category === categoryMap[activePill];
  });

  return (
    <>
      <ColorNavbar />
      <ProductMinumanHeader onSearch={(value) => setSearchTerm(value)} />

      <div style={{ textAlign: "center", marginTop: "60px" }}>
        {/* KATEGORI ATAS */}
        <Nav className="nav-pills-danger justify-content-center" pills>
          {[
            ["1", "Semua Kategori"],
            ["2", "Kopi"],
            ["3", "Jus Buah"],
            ["4", "Teh"],
          ].map(([key, label]) => (
            <NavItem key={key}>
              <NavLink
                className={activePill === key ? "active" : ""}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePill(key);
                  setSearchTerm("");
                }}
              >
                {label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        {/* LIST PRODUK */}
        <div className="blog-4" style={{ marginTop: "120px" }}>
          <Container>
            <Row>
              {filteredWarungs.length > 0 ? (
                filteredWarungs.map((item, index) => (
                  <Col md="6" key={index} className="mb-5">
                    <Card
                      className="card-plain card-blog text-center"
                      style={{ transition: "0.3s" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "translateY(-6px)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "translateY(0)")
                      }
                    >
                      <div className="card-image">
                        <img
                          alt={item.name}
                          className="img img-raised"
                          src={item.img}
                        />
                      </div>

                      <CardBody>
                        <CardTitle tag="h4">{item.name}</CardTitle>
                        <p className="card-description">{item.description}</p>

                        <Button
                          className="btn-round"
                          color={item.color}
                          onClick={() => navigate(`/${item.slug}`)}
                        >
                          Lihat Detail
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col>
                  <p style={{ marginTop: "50px", fontSize: "18px" }}>
                    Tidak ada hasil ditemukan.
                  </p>
                </Col>
              )}
            </Row>

            {/* NOMOR KATEGORI + PANAH DI BAWAH */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginTop: "40px",
              }}
            >
              {/* Panah kiri */}
              <button
                onClick={() => {
                  if (parseInt(activePill) > 1) {
                    setActivePill((prev) => String(parseInt(prev) - 1));
                  }
                }}
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "#8B5A2B",
                  color: "white",
                  opacity: activePill === "1" ? 0.3 : 1,
                  cursor: activePill === "1" ? "not-allowed" : "pointer",
                  fontSize: "18px",
                  border: "none",
                }}
              >
                ‹
              </button>

              {/* Nomor kategori */}
              {["1", "2", "3", "4"].map((num) => (
                <button
                  key={num}
                  onClick={() => setActivePill(num)}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor:
                      activePill === num ? "#8B5A2B" : "rgba(0,0,0,0.15)",
                    color: activePill === num ? "white" : "#333",
                    fontSize: "14px",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {num}
                </button>
              ))}

              {/* Panah kanan */}
              <button
                onClick={() => {
                  if (parseInt(activePill) < 4) {
                    setActivePill((prev) => String(parseInt(prev) + 1));
                  }
                }}
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: "#8B5A2B",
                  color: "white",
                  opacity: activePill === "4" ? 0.3 : 1,
                  cursor: activePill === "4" ? "not-allowed" : "pointer",
                  fontSize: "18px",
                  border: "none",
                }}
              >
                ›
              </button>
            </div>
          </Container>
        </div>
      </div>

      {/* CONTACT */}
      <div className="separator" />
      <div className="social-line social-line-black">
        <Container>
          <Row className="align-items-center">
            <Col md="4" sm="12">
              <h4 className="title mb-0">Hubungi Kami</h4>
            </Col>
            <Col
              md="8"
              sm="12"
              className="d-flex justify-content-end align-items-center"
              style={{
                gap: "20px",
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
              }}
            >
              <Button
                className="btn-neutral"
                color="link"
                href="tel:081345863693"
              >
                <i className="fa fa-phone mr-1" /> 0813-4586-3693
              </Button>

              <Button
                className="btn-neutral"
                color="link"
                href="tel:081250069255"
              >
                <i className="fa fa-phone mr-1" /> 0812-5006-9255
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <FooterBlack />
    </>
  );
}

export default ProductMinumanPage;
