import React from "react";

// komponen reactstrap
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import MultiDropdownNavbar from "components/Navbars/MultiDropdownNavbar.js";
import LandingPageHeader from "components/Headers/BalanganHeader.js";

function Balangan() {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return () => document.body.classList.remove("landing-page");
  }, []);

  // SCROLL KE PRODUK UNGGULAN
  const produkRef = React.useRef(null);

  const scrollToProduk = () => {
    produkRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <MultiDropdownNavbar />

      {/* Header menerima fungsi scroll */}
      <LandingPageHeader onJelajahi={scrollToProduk} />

      <div className="wrapper bg-cream">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Kabupaten Balangan</h2>
              <h5 className="description">
                Kabupaten Balangan adalah salah satu kabupaten yang terletak di
                Provinsi Kalimantan Selatan. Daerah ini resmi berdiri pada 25
                Februari 2003 sebagai hasil pemekaran dari Kabupaten Hulu Sungai
                Utara, yang disahkan melalui Undang-Undang Nomor 2 Tahun 2003
                tentang Pembentukan Kabupaten Tanah Bumbu dan Kabupaten Balangan
                di Provinsi Kalimantan Selatan. Sebagai langkah awal
                penyelenggaraan pemerintahan, pada 8 April 2003 Menteri Dalam
                Negeri Republik Indonesia melantik Pj. Bupati Balangan, yang
                menandai dimulainya pemerintahan Kabupaten Balangan sebagai
                daerah otonom baru.
              </h5>
              <br />
            </Col>
          </Row>
          <Row>
            {/* CARD 1 */}
            <Col md="4">
              <Card
                style={{
                  position: "relative",
                  backgroundImage:
                    "url(" +
                    require("assets/img/faces/KANTOR-BUPATI-BALANGAN.jpg") +
                    ")",
                  height: "300px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: "20px",
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.55)",
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h6
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: "700",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      textAlign: "center",
                    }}
                  >
                    ADAT BUDAYA
                  </h6>

                  <p
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      marginTop: "auto",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      textAlign: "center",
                    }}
                  >
                    Adat budaya di Kabupaten Balangan mencerminkan perpaduan
                    tradisi suku Banjar dan Dayak Meratus. Masyarakatnya masih
                    melestarikan upacara adat seperti Baayun Anak (syukuran dan
                    doa untuk anak) serta Manyanggar (ritual tolak bala).
                  </p>
                </div>
              </Card>
            </Col>

            {/* CARD 2 */}
            <Col md="4">
              <Card
                style={{
                  position: "relative",
                  backgroundImage:
                    "url(" +
                    require("assets/img/faces/tugu-durian-1.jpg") +
                    ")",
                  height: "300px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: "20px",
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.55)",
                    zIndex: 1,
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h6
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: "700",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      textAlign: "center",
                    }}
                  >
                    UMKM BALANGAN
                  </h6>

                  <p
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      marginTop: "auto",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      textAlign: "center",
                    }}
                  >
                    Data terbaru menunjukkan bahwa pada tahun 2024, terdapat
                    10.737 unit UMKM yang tersebar di delapan kecamatan di
                    Balangan.
                  </p>
                </div>
              </Card>
            </Col>

            {/* CARD 3 */}
            <Col md="4">
              <Card
                style={{
                  position: "relative",
                  backgroundImage:
                    "url(" + require("assets/img/faces/wisata1.jpg") + ")",
                  height: "300px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: "20px",
                  borderRadius: "15px",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.55)",
                    zIndex: 1,
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h6
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: "700",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      textAlign: "center",
                    }}
                  >
                    OBJEK WISATA
                  </h6>

                  <p
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      marginTop: "auto",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                      textAlign: "center",
                    }}
                  >
                    Kabupaten Balangan memiliki beragam objek wisata alam dan
                    budaya yang menarik untuk dikunjungi. Dikenal dengan
                    keindahan alam pegunungan Meratus, Balangan menawarkan
                    suasana asri dan alami.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/*BAGIAN PRODUK UNGGULAN*/}
      <div
        ref={produkRef}
        className="produk-unggulan"
        style={{ marginTop: "100px" }}
      >
        <Container>
          <h2 className="title text-center">Produk Unggulan</h2>

          <Row>
            <Col md="7">
              <Card
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/detailjasa/foto4jasa2.jpg") +
                    ")",
                }}
              >
                <CardBody>
                  <h6 className="card-category">Fran Shoes care</h6>
                  <CardTitle tag="h3">
                    Jasa Jahit & Cuci Sepatu Profesional
                  </CardTitle>
                  <p className="card-description">
                    Fran Shoes Care melayani jahit, cuci, dan perawatan sepatu
                    dengan hasil rapi, bersih, dan seperti baru. Cocok untuk
                    semua jenis sepatu, mulai dari sneakers hingga sepatu kerja.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md="5">
              <Card
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/detailminuman/menu1minuman4.jpg") +
                    ")",
                }}
              >
                <CardBody>
                  <h6 className="card-category">Tolil Drink Batumandi</h6>
                  <CardTitle tag="h3">Minuman Segar Harga Bersahabat</CardTitle>
                  <p className="card-description">
                    Menghadirkan berbagai varian minuman manis, creamy, dan
                    segar yang cocok dinikmati kapan saja. Dibuat dari bahan
                    premium namun tetap terjangkau.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* --- Lanjut Produk Unggulan Kedua --- */}
          <Row>
            <Col md="3">
              <Card
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/detailmakanan/menu2makanan7.jpg") +
                    ")",
                }}
              >
                <CardBody>
                  <h6 className="card-category">Waroeng Jhuminten</h6>
                  <CardTitle tag="h3">
                    "Hidangan Rumahan yang Selalu Bikin Rindu"
                  </CardTitle>
                  <p className="card-description">
                    Waroeng Jhuminten menyajikan aneka masakan rumahan dengan
                    rasa yang autentik dan harga yang ramah di kantong. Cocok
                    untuk makan siang cepat, mengenyangkan, dan pas dinikmati
                    semua kalangan, terutama pelajar.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md="6">
              <Card
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/detailminuman/menu2minuman1.jpg") +
                    ")",
                }}
              >
                <CardBody>
                  <h6 className="card-category">Hulo Kopi</h6>
                  <CardTitle tag="h3">
                    Kopi Kekinian untuk Teman Nongkrong
                  </CardTitle>
                  <p className="card-description">
                    Hulo Kopi menawarkan berbagai minuman kopi dan non-kopi
                    dengan rasa khas dan tampilan modern. Cocok untuk tempat
                    nongkrong remaja dan dewasa yang ingin menikmati suasana
                    santai di malam hari. Kalau mau versi yang lebih santai,
                    lebih formal, atau lebih panjang, tinggal bilang ya!
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md="3">
              <Card
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/detailmakanan/menu6makanan4.jpg") +
                    ")",
                }}
              >
                <CardBody>
                  <h6 className="card-category">Keripik Pisang Jajanan</h6>
                  <CardTitle tag="h3">
                    Keripik Pisang Renyah, Manis, dan Bikin Nagih
                  </CardTitle>
                  <p className="card-description">
                    Keripik pisang dengan tekstur renyah dan rasa manis gurih
                    yang seimbang. Pas untuk camilan kapan saja, baik saat
                    santai maupun dibawa bepergian.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="separator" />

      {/* HUBUNGI KAMI */}
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
              <Button className="btn-neutral" color="link">
                <i className="fa fa-phone mr-1" /> 0813-4586-3693
              </Button>

              <Button className="btn-neutral" color="link">
                <i className="fa fa-phone mr-1" /> 0812-5006-9255
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Balangan;
