import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EditTeam = ({ modal, toggle, updateTeam, teamObject }) => {
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

  useEffect(() => {
    setTeamName(teamObject.teamName);
    setMembers(teamObject.membersName);
  }, [teamObject.membersName, teamObject.teamName]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObject = {};
    tempObject["team"] = teamName;
    teamObject["member"] = membersName;
    updateTeam(tempObject);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Team</ModalHeader>
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
              rows="5"
              className="form-control"
              value={membersName}
              onChange={handleChange}
              name="membersName"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTeam;
