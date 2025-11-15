/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-white">
        <Container>
          <Row className="justify-content-between align-items-center">
            <div className="footer-nav">
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a
                    href="/"
                    className="mr-1"
                    style={{
                      fontWeight: "600",
                      color: "#c68b59",
                      textDecoration: "none",
                    }}
                  >
                    BalanganKreatif
                  </a>
                </li>
              </ul>
            </div>

            <div className="credits ml-auto">
              <span
                className="copyright"
                style={{ color: "#555", fontSize: "14px" }}
              >
                © {new Date().getFullYear()} <strong>BalanganKreatif</strong>.
                Semua hak dilindungi.
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
