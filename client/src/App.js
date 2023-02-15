import React, { useEffect, useState } from "react";
import axios from "axios";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";

const App = () => {
  const userEmail = "haodecoy1@gmail.com";
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/todos/${userEmail}`
      );
      setTasks(response.data);
    };
    fetchData();
  }, []);

  console.log(tasks);

  // sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      <ListHeader listName={"Holiday tick list"} />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </div>
  );
};
export default App;
