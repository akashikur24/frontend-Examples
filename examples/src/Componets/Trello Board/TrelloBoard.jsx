/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { DeleteIcon, Edit2Icon } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TrelloBoard = () => {
  const [alltask, setAllTask] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("");

  function handletaskData() {
    let taskObj = {
      id: uuidv4(),
      name: taskName,
      category: category,
    };
    setAllTask((prev) => [...prev, taskObj]);
  }

  const handleDelete = (id) => {
    setAllTask(alltask.filter((item) => item.id != id));
  };

  const handleChangeCatory = (item, nextCatagory) => {
    setAllTask(
      alltask.map((task) =>
        task.id == item.id ? { ...task, category: nextCatagory } : task
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task Title"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value=""></option>
        <option value="TO DO">TO DO</option>
        <option value="Process">Process</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handletaskData}>Create</button>
      <div className="flex justify-around m-6">
        {["TO DO", "Process", "Completed"].map((item, index) => (
          <CatagoryCard
            key={item}
            categoryTitle={item}
            catagoryData={alltask.filter((cat) => cat.category == item)}
            handleDelete={handleDelete}
            handleChangeCatory={handleChangeCatory}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const CatagoryCard = ({
  categoryTitle,
  catagoryData,
  handleDelete,
  handleChangeCatory,
}) => {
  const nextCategory = {
    "TO DO": "Process",
    Process: "Completed",
  };
  return (
    <div>
      <h1>{categoryTitle}</h1>
      {catagoryData.map((item) => (
        <div className="border flex gap-x-5 items-center p-4 ">
          <p key={item.id}>{item.name}</p>
          <DeleteIcon
            onClick={() => handleDelete(item.id)}
            size={15}
            className="cursor-pointer"
          />
          <Edit2Icon
            size={15}
            className="cursor-pointer"
            onClick={() =>
              handleChangeCatory(item, nextCategory[categoryTitle])
            }
          />
        </div>
      ))}
    </div>
  );
};

export default TrelloBoard;
