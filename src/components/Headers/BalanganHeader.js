import React from "react";
import { Button, Container } from "reactstrap";

function LandingPageHeader({ onJelajahi }) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;

        // Cek dulu biar aman
        if (!pageHeader.current) return;

        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };

      window.addEventListener("scroll", updateScroll);

      return () => window.removeEventListener("scroll", updateScroll);
    }

    //  Tambahkan ini supaya Netlify tidak error
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage: "url(/img/monumen_perjuangan_paringin.jpg)",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <h1 className="title">
                <b>BalanganKreatif</b>
              </h1>
              <h3 className="description">
                Menjelajahi Ragam UMKM di Balangan
              </h3>

              <Button
                className="btn-round"
                color="neutral"
                outline
                style={{ marginTop: "20px" }}
                onClick={onJelajahi}
              >
                Jelajahi
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
