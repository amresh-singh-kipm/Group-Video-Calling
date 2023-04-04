import React, { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import { useNavigate } from "react-router-dom";
function Main(props) {
  const [inCall, setInCall] = useState(false);
  const roomRef = useRef();
  const navigate = useNavigate();
  const createRoom = () => {
    const roomName = roomRef.current.value;
    if(roomName){
        setInCall(true);
        navigate(`/room/${roomName}`);
    }
    else{
        alert("Please enter a room name");
    }
  };

  return (
    <div className="App" style={{ height: "100%" }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <>
          <form>
            <label htmlFor="roomName">Create Room</label>
            <input type="text" id="roomName" ref={roomRef} name="roomName" />
          </form>
          <Button variant="contained" color="primary" onClick={createRoom}>
            Join Call
          </Button>
        </>
      )}
    </div>
  );
}

export default Main;
