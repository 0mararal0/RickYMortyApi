import React from "react";
import "./styleFilterStatus.scss";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export const FilterStatusApp = ({ characters, setShowCharacters }) => {
  const handleSubmitAll = () => {
    setShowCharacters(characters);
  };
  const handleSubmitAlive = () => {
    setShowCharacters(characters.filter((elem) => elem.status === "Alive"));
  };
  const handleSubmitDead = () => {
    setShowCharacters(characters.filter((elem) => elem.status === "Dead"));
  };
  const handleSubmitUnknown = () => {
    setShowCharacters(characters.filter((elem) => elem.status === "unknown"));
  };

  return (
    <>
      <div className="container-xxl d-flex justify-content-center gap-3 my-3 containerFilterStatus">
        <ToggleButtonGroup type="radio" defaultValue={[1]} name="status">
          <ToggleButton
            variant="none"
            id="tbg-check-1"
            value={1}
            onClick={handleSubmitAll}
            className="buttonFilterStatus "
          >
            All
          </ToggleButton>
          <ToggleButton
            variant="none"
            id="tbg-check-2"
            value={2}
            onClick={handleSubmitAlive}
            className="buttonFilterStatus"
          >
            Alive
          </ToggleButton>
          <ToggleButton
            variant="none"
            id="tbg-check-3"
            value={3}
            onClick={handleSubmitDead}
            className="buttonFilterStatus"
          >
            Dead
          </ToggleButton>
          <ToggleButton
            variant="none"
            id="tbg-check-4"
            value={4}
            onClick={handleSubmitUnknown}
            className="buttonFilterStatus"
          >
            Unknown
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};
