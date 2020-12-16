import React from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import Filter from "./Filter";

export default function Search({
  searchText,
  handleSearchText,
  clearSearchText,
  country,
  setCountry,
  category,
  setCategory,
  source,
  setSource
}) {
  return (
    <React.Fragment>
      <div className="m-4">
        <Container>
          <InputGroup size="sm" className="m-auto">
            <InputGroup.Prepend>
              <InputGroup.Text
                id="inputGroup-sizing-sm"
                className="bg-dark text-white text-muted"
              >
                <i className="fa fa-search fa-2x"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              className="bg-dark text-white"
              onChange={handleSearchText}
              value={searchText}
            />
          </InputGroup>
          <Filter
            clearSearchText={clearSearchText}
            country={country}
            setCountry={setCountry}
            category={category}
            setCategory={setCategory}
            source={source}
            setSource={setSource}
          />
        </Container>
      </div>

      <br />
    </React.Fragment>
  );
}
