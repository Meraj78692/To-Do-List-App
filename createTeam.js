import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateTeam = ({ modal, toggle, save }) => {
  const [teamName, setTeamName] = useState("");
  const [membersName, setMembers] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "teamName") {
      setTeamName(value);
    } else {
      setMembers(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let teamObject = {};
    teamObject["Teams"] = teamName;
    teamObject["Members"] = membersName;
    save(teamObject);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Team No</label>
            <input
              type="text"
              className="form-control"
              value={teamName}
              onChange={handleChange}
              name="teamName"
            />
          </div>
          <div className="form-group">
            <label>Members</label>
            <textarea
              type="text"
              value={membersName}
              onChange={handleChange}
              name="membersName"
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTeam;
