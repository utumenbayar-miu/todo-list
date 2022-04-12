import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TodoDetails() {
  // useState => return an array of 2 elements.
  // 1st => data
  // 2nd => setDate
  // It accepts parameter that is the default value of the state.
  const [todoDetail, settodoDetail] = useState({
    task: "task",
    user: "user",
    detail: "detail",
  });

  // const [state1, setstate1] = useState("state1");
  // const [state2, setstate2] = useState("state2");
  // const [state3, setstate3] = useState("state3");
  // const [state4, setstate4] = useState("state4");

  // useEffect => void, just called = mimicing lifecycle methods
  // 1st => function
  // 2nd => dependency array

  // if no second param => equivalent to componentDidUpdate
  // useEffect(() => {
  //   console.log("Component rendered, equivalent to componentDidUpdate");
  // }, [todoDetail, state1]);

  let { id } = useParams();

  // if the second param is an empty array => equivalent to componentDidMount
  useEffect(() => {
    console.log("equivalent to componentDidMount");
    // assume you called the back-end
    settodoDetail({
      id: id,
      task: "task from server",
      user: "user from server",
      detail: "detail from server",
    });
    // this.setState({todoDetail: {
    //   id: id,
    //   task: "task from server",
    //   user: "user from server",
    //   detail: "detail from server",
    // }})
  }, []);

  return (
    <p>
      ID: {id}, task: {todoDetail.task}, user: {todoDetail.user}, detail:{" "}
      {todoDetail.detail}
    </p>
  );
}
