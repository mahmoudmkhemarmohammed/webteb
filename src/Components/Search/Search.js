import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import "./Search.css";
import { useRef } from "react";
const Search = () => {
  const mySearch = useRef();
  const hiddenSearch = () => {
    mySearch.current.style.left = "-100%";
  };
  return (
    <>
      <div className="search-header" ref={mySearch}>
        <Container>
          <div className="inputs">
            <input type="text" placeholder="Type To Search" name="search" />
            <FontAwesomeIcon icon={faSearch} onClick={hiddenSearch} />
          </div>
          <FontAwesomeIcon icon={faClose} onClick={hiddenSearch} />
        </Container>
      </div>
    </>
  );
};
export default Search;
