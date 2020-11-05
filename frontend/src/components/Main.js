import React from "react";

const Main = (props) => {
  const { auth, handleSampleAction } = props;

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
    </div>
  );
};

export default Main;
