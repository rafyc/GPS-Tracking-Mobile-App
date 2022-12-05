import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer"
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {

  const { state: { name, recording, location }, changeName, startRecording, stopRecording, } = useContext(LocationContext);
  console.log(location.length);

  return (
    <>
      <Spacer>
        <Input value={name} placeholder="Enter Track Name" onChangeText={changeName} />
      </Spacer>
      <Spacer>
        {recording ? <Button title='Stop Recording' onPress={stopRecording} buttonStyle={{ backgroundColor: "red" }} /> :
          <Button title='Start Recording' onPress={startRecording} />}
      </Spacer>
    </>
  )
};


export default TrackForm;
