import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import * as action from "../actions/actions";
import App from "../components/App";

const socket = socketIOClient("ws://localhost:8080", {
  transports: ["websocket"],
});

const subscribeSocket = (dispatch) => {
  socket.on("connect", () => {
    console.log("Socket Connect!");
    // dispatch(action.connectChatFailure());
  });
  socket.on("disconnect", () => {
    console.log("Socket Disconnect");
    // dispatch(action.connectChatFailure());
  });
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  subscribeSocket(dispatch);

  return {
    socket,
    handleSampleAction: (data) => {
      dispatch(action.sampleAction(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
