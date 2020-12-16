import React from "react";
import { Card, Container, Row, Col, Carousel } from "react-bootstrap";

export default function News({ news, setArticle }) {
  return (
    <React.Fragment>
      <Container>
        <h1 className="text-center mb-4">Top Headlines Today</h1>
        <Carousel>
          {news.map((article, index) => (
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={article.urlToImage}
                style={{ height: "480px" }}
                alt="Image Not Available"
                onClick={() => setArticle(article)}
              />
              <Carousel.Caption>
                <h3
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    textShadow:
                      "1px 2px 1px grey,-1px 1px 1px grey, 1px -1px 1px grey, -1px -2px 1px black"
                  }}
                >
                  {article.title}
                </h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <br/>
        <Row>
          {news.map((article, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={4}>
              <Card
                as="a"
                className="m-2 text-white"
                onClick={() => setArticle(article)}
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                <Card.Img
                  variant="top"
                  src={article.urlToImage}
                  style={{ height: "12rem" }}
                />
                <Card.Body className="bg-dark">
                  <Card.Title>{article.author}</Card.Title>
                  <Card.Text>{article.title}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-dark">
                  <small className="text-muted">{article.publishedAt}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}
