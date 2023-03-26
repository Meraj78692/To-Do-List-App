import React, { useEffect, useState } from "react";
import CreateTeam from "../modals/createTeam";
import Card from "./Card";

const AudioCallApp = () => {
  const [modal, setModal] = useState(false);
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("teamList");

    if (arr) {
      let object = JSON.parse(arr);
      setTeamList(object);
    }
  }, []);

  const deleteTeam = (index) => {
    let tempList = teamList;
    tempList.splice(index, 1);
    localStorage.setItem("teamList", JSON.stringify(tempList));
    setTeamList(tempList);
    window.location.reload();
  };

  const updateListArray = (object, index) => {
    let tempList = teamList;
    tempList[index] = object;
    localStorage.setItem("teamList", JSON.stringify(tempList));
    setTeamList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTeam = (teamObject) => {
    let tempList = teamList;
    tempList.push(teamObject);
    localStorage.setItem("teamList", JSON.stringify(tempList));
    setTeamList(teamList);
    setModal(false);
  };

  return (
    <div className="main">
      <div className="header ">
        <h3>To do List </h3>
        <button
          className="btn btn-primary mt-4 btn-lg"
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
      </div>
      <div className="info-container">
        {teamList &&
          teamList.map((object, index) => (
            <Card
              teamObject={object}
              index={index}
              deleteTeam={deleteTeam}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <CreateTeam toggle={toggle} modal={modal} save={saveTeam} />
    </div>
  );
};

export default AudioCallApp;
