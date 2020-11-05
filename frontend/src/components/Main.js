import React from "react";

const Main = (props) => {
  const { auth, handleSampleAction, handleSampleJoinRoom } = props;

  return (
    <div>
      Main Page
      <br />
      Sample State : {auth.sample}
      <br />
      <button
        onClick={() => {
          handleSampleAction("HAKGU");
        }}
      >
        Change State
      </button>
      <br />
      <button
        onClick={() => {
          handleSampleJoinRoom("HAHAHA");
        }}
      >
        JOIN ROOM
      </button>
    </div>
  );
};

export default Main;
