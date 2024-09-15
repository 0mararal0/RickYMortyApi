import { useEffect, useState } from "react";
import "./styleApiRickyMorty.scss";
import axios from "axios";
import { Col } from "react-bootstrap";
import { FilterStatusApp } from "../../Components/FilterStatusApp/FilterStatusApp";
import { NavbarApp } from "../../Components/NavbarApp/NavbarApp";
import { CardCharacterApp } from "../../Components/CardCharacterApp/CardCharacterApp";

export const ApiRickYMorty = () => {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/");
  const [numberCharacter, setNumberCharacter] = useState(8);
  const [showCharacters, setShowCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [dataProfile, setDataProfile] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const newCharacters = res.data.results;
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...newCharacters,
        ]);
        setCharacters([...characters, ...res.data.results]);
        setShowCharacters([...characters, ...res.data.results]);
        res.data.info.next && setUrl(res.data.info.next);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  const handleMore = () => {
    setNumberCharacter(numberCharacter + 8);
  };

  return (
    <>
      <NavbarApp dataProfile={dataProfile} />
      <FilterStatusApp
        characters={characters}
        setShowCharacters={setShowCharacters}
        setCharacters={setCharacters}
      />
      <Col className="container-xxl d-flex flex-wrap gap-5 justify-content-center">
        {showCharacters.slice(0, numberCharacter).map((elem) => {
          return (
            <CardCharacterApp
              key={elem.id}
              data={elem}
              setDataProfile={setDataProfile}
            />
          );
        })}
      </Col>
      <div className="w-100 my-5 d-flex justify-content-center">
        <button className="buttonLoadMore" onClick={handleMore}>
          Load More
        </button>
      </div>
    </>
  );
};
