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
import ProductPageHeader from "components/Headers/ProductPageHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

function ProductPage() {
  const [activePill, setActivePill] = React.useState("1");
  const [searchTerm, setSearchTerm] = React.useState("");

  const navigate = useNavigate();

  const warungs = [
    {
      category: "Pencuci Mulut",
      color: "warning",
      name: "Toko Kue Niken",
      description: "Penyedia Kue Ultah, Kue Kering, Snack dll.",
      img: "/img/detailmakanan/DetailMakanan1.jpg",
      slug: "detailmakanan1",
    },
    {
      category: "Pencuci Mulut",
      color: "primary",
      name: "Salad Buah 2r",
      description: "Menjual salad buah, Asinan, Es campur dll.",
      img: "/img/detailmakanan/DetailMakanan2.jpg",
      slug: "detailmakanan2",
    },
    {
      category: "Pencuci Mulut",
      color: "info",
      name: "UMKM nisa cake & bakery",
      description: "Menjual Kue Bolu.",
      img: "/img/detailmakanan/DetailMakanan3.jpg",
      slug: "detailmakanan3",
    },

    {
      category: "Camilan",
      color: "danger",
      name: "Keripik Pisang Jajanan",
      description: "Menjual berbagai rasa keripik.",
      img: "/img/detailmakanan/menu5makanan4.jpg",
      slug: "detailmakanan4",
    },
    {
      category: "Camilan",
      color: "success",
      name: "Mandai Paman Gundul",
      description: "Aneka oleh-oleh lokal khas Balangan.",
      img: "/img/detailmakanan/DetailMakanan5.jpg",
      slug: "detailmakanan5",
    },

    {
      category: "Makanan Berat",
      color: "info",
      name: "Bakso dan mie ayam Mang Uji",
      description: "Menjual makanan berat.",
      img: "/img/detailmakanan/DetailMakanan6.jpg",
      slug: "detailmakanan6",
    },
    {
      category: "Makanan Berat",
      color: "success",
      name: "Waroeng Jhuminten",
      description: "Menjual berbagai paketan murah.",
      img: "/img/detailmakanan/DetailMakanan7.jpg",
      slug: "detailmakanan7",
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
      2: "Pencuci Mulut",
      3: "Camilan",
      4: "Makanan Berat",
    };

    return matchSearch && w.category === categoryMap[activePill];
  });

  return (
    <>
      <ColorNavbar />
      <ProductPageHeader onSearch={(value) => setSearchTerm(value)} />

      <div style={{ textAlign: "center", marginTop: "60px" }}>
        {/* KATEGORI ATAS */}
        <Nav className="nav-pills-danger justify-content-center" pills>
          {[
            ["1", "Semua Kategori"],
            ["2", "Pencuci Mulut"],
            ["3", "Camilan"],
            ["4", "Makanan Berat"],
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

            {/* NOMOR KATEGORI + PANAH */}
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
<FooterBlack />;

export default ProductPage;
