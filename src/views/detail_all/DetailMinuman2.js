import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterGray from "components/Footers/FooterGray.js";
import FooterBlack from "components/Footers/FooterBlack.js";

//  Custom icon map
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
});

//  Lokasi
const LAT = -2.426583;
const LNG = 115.424068;

function DetailMinuman2() {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.body.classList.add("blog-posts");
    window.scrollTo(0, 0);
    return () => document.body.classList.remove("blog-posts");
  }, []);

  return (
    <>
      <DangerNavbar />

      {/* Tombol keluar */}
      <div
        style={{
          position: "absolute",
          top: "85px",
          left: "25px",
          zIndex: 10,
        }}
      >
        <Button
          color="link"
          onClick={() => navigate(-1)}
          style={{
            color: "#222",
            fontSize: "22px",
            fontWeight: "bold",
            background: "transparent",
            border: "none",
          }}
        >
          ✕
        </Button>
      </div>

      <div className="wrapper" style={{ backgroundColor: "#fff" }}>
        <div className="main" style={{ marginTop: "60px" }}>
          <div className="section section-white">
            <Container>
              {/* Judul */}
              <Row>
                <Col className="ml-auto mr-auto text-center title" md="8">
                  <h2
                    style={{
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "25px",
                    }}
                  >
                    Tolil Drink Batumandi
                  </h2>
                </Col>
              </Row>

              {/* Gambar utama */}
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <Card className="card-blog card-plain text-center">
                    <div className="card-image">
                      <img
                        alt="Story"
                        className="img img-raised"
                        src={require("assets/img/detailminuman/DetailMinuman2.jpg")}
                        style={{
                          borderRadius: "14px",
                          maxHeight: "440px",
                          width: "100%",
                          objectFit: "cover",
                          marginBottom: "25px",
                        }}
                      />
                    </div>
                    <CardBody>
                      <CardTitle
                        tag="h3"
                        style={{
                          marginTop: "10px",
                          fontWeight: "500",
                          color: "#444",
                        }}
                      >
                        Deskrispsi UMKM
                      </CardTitle>
                      <p
                        style={{
                          lineHeight: "1.8",
                          color: "#666",
                          fontSize: "16px",
                        }}
                      >
                        Tolil Drink Batumandi adalah kedai minuman es yang
                        menyajikan berbagai pilihan rasa dengan harga yang tetap
                        terjangkau. Menggunakan bahan yang segar dan dibuat saat
                        dipesan, setiap minuman memiliki cita rasa yang
                        menyegarkan dan pas dinikmati kapan saja. Cocok untuk
                        semua kalangan yang ingin menikmati es minuman lezat
                        tanpa menguras kantong.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              {/* Daftar Menu */}
              <Row>
                <div
                  className="related-articles text-center"
                  style={{ width: "100%", marginTop: "70px" }}
                >
                  <h3 className="title" style={{ fontWeight: "600" }}>
                    Daftar Menu
                  </h3>
                  <legend
                    style={{
                      width: "60px",
                      margin: "0 auto 30px",
                      borderColor: "#c68b59",
                      borderWidth: "2px",
                    }}
                  />

                  <Container>
                    {/* BARIS 1 */}
                    <Row className="justify-content-center">
                      {[
                        {
                          img: "menu1minuman2.jpg",
                          title: "Choco series",
                          price: "Rp 13.000",
                        },
                        {
                          img: "menu2minuman2.jpg",
                        },
                        {
                          img: "menu3minuman2.jpg",
                          title: "Taro Capucino",
                          price: "Rp 13.000",
                        },
                      ].map((item, i) => (
                        <Col md="4" sm="6" key={i} className="mb-4">
                          <img
                            alt={item.title}
                            className="img-rounded img-responsive"
                            src={require(`assets/img/detailminuman/${item.img}`)}
                            style={{
                              width: "100%",
                              height: "220px",
                              objectFit: "cover",
                              borderRadius: "14px",
                              marginBottom: "10px",
                            }}
                          />

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "0 4px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#444",
                                margin: 0,
                              }}
                            >
                              {item.title}
                            </p>
                            <p
                              style={{
                                fontSize: "15px",
                                color: "#c68b59",
                                fontWeight: "600",
                                margin: 0,
                              }}
                            >
                              {item.price}
                            </p>
                          </div>
                        </Col>
                      ))}
                    </Row>

                    {/* BARIS 2 */}
                    <Row className="justify-content-center">
                      {[
                        {
                          img: "menu4minuman2.jpg",
                          title: "Brown sugar series",
                          price: "Rp 12.000",
                        },
                        {
                          img: "menu5minuman2.jpg",
                          title: "Milkshake Series",
                          price: "Rp 10.000",
                        },
                      ].map((item, i) => (
                        <Col md="4" sm="6" key={i} className="mb-4">
                          <img
                            alt={item.title}
                            className="img-rounded img-responsive"
                            src={require(`assets/img/detailminuman/${item.img}`)}
                            style={{
                              width: "100%",
                              height: "220px",
                              objectFit: "cover",
                              borderRadius: "14px",
                              marginBottom: "10px",
                            }}
                          />

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "0 4px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "16px",
                                color: "#444",
                                margin: 0,
                              }}
                            >
                              {item.title}
                            </p>
                            <p
                              style={{
                                fontSize: "15px",
                                color: "#c68b59",
                                fontWeight: "600",
                                margin: 0,
                              }}
                            >
                              {item.price}
                            </p>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </div>
              </Row>

              {/* MAP */}
              <Row className="mt-5">
                <Col md="12" className="text-center">
                  <h3 style={{ fontWeight: "600" }}>Titik Lokasi</h3>
                </Col>

                {/* MAP DITURUNKAN */}
                <Col md="12" style={{ marginTop: "35px" }}>
                  <div
                    style={{
                      height: "400px",
                      width: "100%",
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  >
                    <MapContainer
                      center={[LAT, LNG]}
                      zoom={13}
                      scrollWheelZoom={true}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                      <Marker position={[LAT, LNG]} icon={customIcon}>
                        <Popup>
                          Komplek Maritam Seberang Pos Polisi, Jl. A. Yani, Kec
                          Paringin
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </div>

                  {/* Tombol Google Maps */}
                  <div className="text-center mt-4">
                    <Button
                      className="btn-round"
                      size="md"
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps?q=${LAT},${LNG}`,
                          "_blank"
                        )
                      }
                      style={{
                        fontWeight: "500",
                        color: "#fff",
                        backgroundColor: "#c68b59",
                        border: "none",
                        padding: "8px 22px",
                        borderRadius: "25px",
                      }}
                    >
                      Lihat Peta Lengkap
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      {/* Hubungi Kami */}
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
              style={{ gap: "20px", flexWrap: "nowrap", whiteSpace: "nowrap" }}
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
      <FooterGray />
    </>
  );
}

export default DetailMinuman2;
