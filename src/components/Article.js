import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default function Article({ article, setArticle }) {
  const navigateToUrl = () => {
    const newWindow = window.open(
      article.url,
      "_blank",
      "noopener, noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  const routeToHome = () => {
    setArticle(null);
  };

  if (!article) return <Redirect to="/" />;

  return (
    <React.Fragment>
      <Container>
        <Button variant="secondary" onClick={routeToHome}>
          Back
        </Button>
        <Card
          as="a"
          style={{ cursor: "pointer", textDecoration: "none" }}
          className="m-2 text-white"
          onClick={navigateToUrl}
        >
          <Card.Img variant="top" src={article.urlToImage} />
          <Card.Body className="bg-dark">
            <Card.Title>{article.author}</Card.Title>
            <Card.Text>{article.title}</Card.Text>
            <Card.Text>{article.description}</Card.Text>
            <Card.Text>{article.content}</Card.Text>
          </Card.Body>
          <Card.Footer className="bg-dark">
            <small className="text-muted">{article.publishedAt}</small>
          </Card.Footer>
        </Card>
      </Container>
    </React.Fragment>
  );
}
