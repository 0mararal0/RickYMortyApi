import { useEffect, useState } from "react";
import "./styleNavbar.scss";
import { Container, Image, Navbar } from "react-bootstrap";

export const NavbarApp = () => {
  const [imgProfile, setImgProfile] = useState();

  useEffect(() => {
    let dataProv = {};
    dataProv = JSON.parse(localStorage.getItem("Profile"));
    dataProv && setImgProfile(dataProv.image);
  }, []);

  return (
    <>
      <Navbar data-bs-theme="light" className="container-xxl navbarContainer ">
        <Container className="d-flex justify-content-center  flex-column">
          <Navbar.Brand className="navbarTittle m-0">Rick&Morty</Navbar.Brand>
          <a
            href="/profile"
            className="d-flex position-absolute end-0 m-sm-5 m-2 my-auto gap-4 align-items-center navbarLink"
          >
            {imgProfile && (
              <Image
                src={imgProfile}
                roundedCircle
                className="d-flex navBarImg"
              />
            )}
            <p className="d-lg-flex d-none my-auto NavbarText">My Profile</p>
          </a>
        </Container>
      </Navbar>
    </>
  );
};
