import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const TeamsDetail = (props) => {
  const id = props.match.params.id;

  const [teams, setTeams] = useState({
    teamsName: "",
    teamsDescription: "",
    teamsInstDate: "",
  });

  useEffect(() => {
    fetch(`http://localhost:9090/teams/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setTeams(res);
      });
  }, []);
  const updateTeams = () => {
    props.history.push(`/teamsUpdate/${id}`);
  };
  const deleteTeams = () => {
    fetch(`http://localhost:9090/teams/${id}`, { method: "DELETE" })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          props.history.push("/teams");
        } else {
          alert("삭제실패");
        }
      });
  };
  return (
    <div>
      <h3>{teams.teamsName}</h3>
      <h5>{teams.teamsDescription}</h5>
      <h5>팀 생성일 : {teams.teamsInstDate}</h5>
      <hr />
      <Button onClick={updateTeams}>수정</Button>{" "}
      <Button onClick={deleteTeams}>삭제</Button>
    </div>
  );
};

export default TeamsDetail;
