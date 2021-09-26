import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TeamsSave = (props) => {
  const [teams, setTeams] = useState({
    teamsName: "",
    teamsDescription: "",
  });

  const changeValue = (e) => {
    setTeams({
      ...teams,
      [e.target.name]: e.target.value,
    });
  };

  const submitTeams = (e) => {
    e.preventDefault();
    fetch("http://localhost:9090/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(teams),
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          props.history.push("/teams");
        } else {
          alert("팀 등록에 실패하였습니다.");
        }
      });
  };

  const onChange = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("img", img);
    console.log(formData); // FormData {}
    for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체
  };

  return (
    <>
      <Form onSubmit={submitTeams}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>팀 이름</Form.Label>
          <Form.Control type="text" onChange={changeValue} name="teamsName" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>팀 설명</Form.Label>
          <Form.Control
            type="textBox"
            onChange={changeValue}
            name="teamsDescription"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          팀생성
        </Button>
      </Form>
    </>
  );
};

export default TeamsSave;
