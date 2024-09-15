import React, { useEffect, useState } from "react";
import "./styleProfileApp.scss";
import { Accordion, Button, Col, Image } from "react-bootstrap";
import axios from "axios";

export const ProfileApp = () => {
  const [data, setData] = useState({});
  const [urlEpisodeArr, setUrlEpisodeArr] = useState();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    let dataProv = {};
    dataProv = JSON.parse(localStorage.getItem("Profile"));
    setData(dataProv);
    setUrlEpisodeArr(dataProv.episode);
  }, []);

  useEffect(() => {
    urlEpisodeArr &&
      urlEpisodeArr.forEach((elem) =>
        axios
          .get(elem)
          .then((res) => {
            setEpisodes((prevEpisodes) => [...prevEpisodes, res.data.name]);
          })
          .catch((err) => {
            console.log(err);
          })
      );
  }, [urlEpisodeArr]);

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <Col xs={6} md={4} className="mt-5 mb-3 text-center">
          <Image src={data.image} roundedCircle width={"100px"} />
        </Col>
        <h1>{data.name}</h1>
        <p className="d-flex text-secondary fs-4">
          <span style={{ color: data.textColorStatus }}>{data.status}</span>
          &nbsp;&#124;&nbsp;
          {data.species}&nbsp;&#124;&nbsp;{data.gender}
        </p>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0" className=" mx-auto my-2 acordionProfile ">
          <Accordion.Header>
            <img
              src="./images/ubicacion.png"
              alt="icono"
              style={{
                height: "20px",
                marginRight: "20px",
              }}
            />
            Locations
          </Accordion.Header>
          <Accordion.Body>
            <p>{data.location}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item eventKey="1" className=" mx-auto my-2  acordionProfile">
          <Accordion.Header>
            <img
              src="./images/video.png"
              alt="icono"
              style={{ height: "20px", marginRight: "20px" }}
            />
            Episodes
          </Accordion.Header>
          <Accordion.Body>
            {episodes?.map((elem, index) => {
              return <p key={index}>{elem}</p>;
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="d-flex justify-content-center ">
        <Button variant="primary" href="/" className="my-4 buttonProfileApp">
          Back
        </Button>
      </div>
    </>
  );
};
