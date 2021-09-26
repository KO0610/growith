/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, Route, Switch, useHistory } from "react-router-dom";

const TeamList = (props) => {
  const { teamsId, teamsName, teamsDescription } = props.team;
  const history = useHistory();

  const link = (path) => {
    history.push(path);
  };

  return (
    <div className="teamsList">
      <Card
        style={{ width: "15rem" }}
        onMouseUp={() => link(`/teams/${teamsId}`)}
      >
        <img src={`img/${teamsId}.jpg`} />
        <Card.Body>
          <Card.Title>
            <h4>{teamsName}</h4>
          </Card.Title>
          <Card.Text>{teamsDescription}</Card.Text>
          {/* <Link to={"/teams/" + teamsId} className="btn btn-primary">
            상세보기
          </Link> */}
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default TeamList;
