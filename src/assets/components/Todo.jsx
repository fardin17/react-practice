import { useState } from "react";

const Todo = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [duration, setDuration] = useState(0);
  console.log({ taskList });
  const handleStatus = (id, status) => {
    // updatedId
    let newTasklist = taskList.map((task, index) => {
      let updateTask = task;
      if (index === id) {
        updateTask = {
          ...task,
          status: status === 0 ? 1 : 2,
        };
      }
      return updateTask;
    });
    console.log({ newTasklist });
    setTaskList(newTasklist);
  };
  const handleDelete = (id) => {
    let filterArray = taskList.filter((task, index) => index !== id);
    setTaskList([...filterArray]);
  };
  const handleAdd = () => {
    if (!!task && !!duration) {
      setTaskList((prev) => [
        ...prev,
        {
          title: task,
          duration,
          status: 0,
        },
      ]);
      setTask("");
      setDuration(0);
    } else alert("please enter all required field!");
  };
  return (
    <div>
      <div className="input-area">
        <input
          type="text"
          onChange={(event) => {
            setTask(event.target.value);
          }}
          value={task}
        />
        <input
          type="text"
          value={duration}
          onChange={(event) => {
            setDuration(event.target.value);
          }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {taskList.map((task, index) => (
          <div key={index} className="task">
            <p>{task.status === 2 ? <del>{task.title}</del> : task.title}</p>
            <p>{task.duration}</p>
            <p>{task.status === 0 ? "Not Initialized" : task.status === 1 ? "In Progress" : "Done"}</p>
            <button onClick={() => handleStatus(index, task.status)}>Status Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
