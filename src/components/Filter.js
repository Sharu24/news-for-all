import React from "react";
import { Container, Form, Col, Row } from "react-bootstrap";

export default function Filter({
  clearSearchText,
  country,
  setCountry,
  category,
  setCategory,
  source,
  setSource
}) {
  const handleChangeCountry = evt => {
    clearSearchText();
    setSource("");
    setCountry(evt.target.value);
  };

  const handleChangeCategory = evt => {
    clearSearchText();
    setSource("");
    setCategory(evt.target.value);
  };

  const handleChangeSource = evt => {
    clearSearchText();
    setCountry("");
    setCategory("");
    setSource(evt.target.value);
  };
  console.log("I am here, ", source);
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Form.Label className="mt-2 m-2" htmlFor="country">
              Country
            </Form.Label>
            <Form.Control
              as="select"
              className="px-3 bg-dark text-white"
              id="country"
              value={country}
              onChange={handleChangeCountry}
              custom
            >
              <option value=""></option>
              <option value="US">United States</option>
              <option value="AE">United Arab Emirates</option>
              <option value="DE">Germany</option>
              <option value="US">Canada</option>
              <option value="IN">India</option>
              <option value="CN">China</option>
              <option value="AU">Austalia</option>
              <option value="GB">United Kingdom</option>
            </Form.Control>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Form.Label className="mt-2 m-2" htmlFor="category">
              Category
            </Form.Label>
            <Form.Control
              as="select"
              className="px-3 bg-dark text-white"
              id="category"
              value={category}
              onChange={handleChangeCategory}
              custom
            >
              <option value=""></option>
              <option value="business">business</option>
              <option value="entertainment">entertainment</option>
              <option value="health">health</option>
              <option value="science">science</option>
              <option value="sports">sports</option>
              <option value="technology">technology</option>
            </Form.Control>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Form.Label className="mt-2 m-2" htmlFor="source">
              Source
            </Form.Label>
            <Form.Control
              as="select"
              className="px-3 bg-dark text-white"
              id="source"
              value={source}
              onChange={handleChangeSource}
              custom
            >
              <option value=""></option>
              <option value="bbc-news">BBC News</option>
              <option value="bbc-sport">BBC Sport</option>
              <option value="al-jazeera-english">Al Jazeera English</option>
              <option value="bloomberg">Bloomberg</option>
              <option value="cbc-news">CBC News</option>
              <option value="cnn">CNN</option>
              <option value="espn">ESPN</option>
              <option value="espn-cric-info">ESPN Cric Info</option>
              <option value="fox-news">Fox News</option>
              <option value="google-news">Google News</option>
              <option value="engadget">Engadget</option>
              <option value="hacker-news">hacker News</option>
              <option value="the-hindu">The Hindu</option>
              <option value="the-next-web">The Next Web</option>
              <option value="wired">Wired</option>
            </Form.Control>
          </Col>
        </Row>
      </Container>
    </>
  );
}
