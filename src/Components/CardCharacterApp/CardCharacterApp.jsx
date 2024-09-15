import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const CardCharacterApp = ({ data, setDataProfile }) => {
  const navigate = useNavigate();
  let textColorStatus = "";
  if (data.status == "Alive") {
    textColorStatus = "#49DE98";
  } else if (data.status == "Dead") {
    textColorStatus = "#FB788A";
  } else if (data.status == "unknown") {
    textColorStatus = "#4ABADE";
  }

  const handleSubmit = () => {
    navigate("/profile");
    const Profile = {
      image: data.image,
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      episode: data.episode,
      location: data.location.name,
      textColorStatus: textColorStatus,
    };
    localStorage.setItem("Profile", JSON.stringify(Profile));
    setDataProfile(data.image);
  };

  return (
    <>
      <Button onClick={handleSubmit} variant="none">
        <Card
          href="/profile"
          className=""
          style={{ width: "15.3rem", height: "450px" }}
        >
          <Card.Img variant="top" src={data.image} />
          <Card.Body className="d-flex flex-column align-items-center justify-content-between ">
            <Card.Title className="fw-bold">{data.name}</Card.Title>
            <Card.Text className="fw-bold ">{data.id}</Card.Text>
            <div className="d-flex text-secondary">
              <p>
                <span style={{ color: textColorStatus }}>{data.status}</span> |{" "}
                {data.species} | {data.gender}
              </p>
            </div>
          </Card.Body>
        </Card>
      </Button>
    </>
  );
};
