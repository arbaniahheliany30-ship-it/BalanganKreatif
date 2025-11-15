import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import bgImage from "assets/img/sections/Minuman-1.jpg";

function ProductPageHeader({ onSearch }) {
  const [hover, setHover] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    document.body.classList.add("product-page");
    return () => document.body.classList.remove("product-page");
  }, []);

  return (
    <>
      <div
        className="page-header page-header-xs"
        style={{
          backgroundImage: `url(${bgImage})`,
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
      >
        <div className="filter" />
        <Container className="text-center" style={{ paddingTop: "170px" }}>
          <Row>
            <Col md="6" className="ml-auto mr-auto">
              <Form
                className="form-inline justify-content-center"
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (onSearch) onSearch(searchValue);
                }}
              >
                <FormGroup>
                  <Input
                    className="border-input"
                    placeholder="Search"
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    style={{
                      borderRadius: "4px",
                      padding: "10px 15px",
                      width: "250px",
                    }}
                  />
                </FormGroup>
                <Button
                  className="btn-just-icon ml-2"
                  color="light"
                  type="submit"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onTouchStart={() => setHover(true)}
                  onTouchEnd={() => setHover(false)}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: hover ? "#8B4B32" : "#AE6A4F",
                    borderColor: hover ? "#8B4B32" : "#AE6A4F",
                    color: "white",
                  }}
                >
                  <i className="fa fa-search" />
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductPageHeader;
