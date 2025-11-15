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
import { Link } from "react-router-dom";

import ColorNavbar from "components/Navbars/ColorNavbar.js";
import ProductMinumanHeader from "components/Headers/ProductJasaHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

function ProductPageJasa() {
  const [activePill, setActivePill] = React.useState("1");
  const [searchTerm, setSearchTerm] = React.useState("");

  const jasas = [
    {
      category: "Penjahit",
      color: "primary",
      name: "Penjahit Simpati",
      description:
        "Menjahit pakaian, seragam, dan kebaya dengan hasil rapi dan cepat.",
      img: "/img/detailjasa/DetailJasa1.jpg",
      slug: "detailjasa1",
    },
    {
      category: "Penjahit",
      color: "info",
      name: "Fran Shoes care",
      description: "Spesialis Jahit dan Cuci Sepatu.",
      img: "/img/detailjasa/DetailJasa2.jpg",
      slug: "detailjasa2",
    },
    {
      category: "Servis",
      color: "primary",
      name: "Bengkel Rahmad",
      description: "Perbaikan Motor dan Servis.",
      img: "/img/detailjasa/DetailJasa3.jpg",
      slug: "detailjasa3",
    },
    {
      category: "Servis",
      color: "success",
      name: "Ikhsan Service",
      description: "Servis Berbagai Alat Elektronik.",
      img: "/img/detailjasa/DetailJasa4.jpg",
      slug: "detailjasa4",
    },
    {
      category: "Cuci Kendaraan",
      color: "warning",
      name: 'KUBE "MAJU BERSAMA" PENCUCIAN KENDARAAN',
      description: "Layanan cuci cepat bersih untuk mobil & motor.",
      img: "/img/detailjasa/DetailJasa5.jpg",
      slug: "detailjasa5",
    },
  ];

  // FILTER
  const filteredJasas = jasas.filter((j) => {
    const matchSearch =
      searchTerm.trim() === "" ||
      j.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      j.category.toLowerCase().includes(searchTerm.toLowerCase());

    if (activePill === "1") return matchSearch;

    const categoryMap = {
      2: "Penjahit",
      3: "Servis",
      4: "Cuci Kendaraan",
    };

    return matchSearch && j.category === categoryMap[activePill];
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
            ["2", "Penjahit"],
            ["3", "Servis"],
            ["4", "Cuci Kendaraan"],
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

        {/* LIST JASA */}
        <div className="blog-4" style={{ marginTop: "120px" }}>
          <Container>
            <Row>
              {filteredJasas.length > 0 ? (
                filteredJasas.map((item, index) => (
                  <Col md="6" key={index} className="mb-5">
                    <Card
                      className="card-plain card-blog text-center"
                      style={{ transition: "transform 0.3s ease" }}
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
                          style={{ width: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <CardBody>
                        <CardTitle tag="h4">{item.name}</CardTitle>
                        <p className="card-description">{item.description}</p>

                        {item.slug ? (
                          <Link to={`/${item.slug}`}>
                            <Button className="btn-round" color={item.color}>
                              Lihat Detail
                            </Button>
                          </Link>
                        ) : (
                          <Button
                            className="btn-round"
                            color={item.color}
                            onClick={() =>
                              alert("Halaman detail belum tersedia 😅")
                            }
                          >
                            Lihat Detail
                          </Button>
                        )}
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

            {/* NOMOR + PANAH */}
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
                  cursor: "not-allowed",
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

      {/* kontak */}
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

      {/* FOOTER */}
      <FooterBlack />
    </>
  );
}

export default ProductPageJasa;
