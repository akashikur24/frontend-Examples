import { ArrowDownIcon } from "lucide-react";
import { useState } from "react";

/* eslint-disable react/prop-types */
const accordianData = [
  {
    id: 1,
    question: "What is JavaScript",
    answer: "JavaScript is the programming language",
  },
  {
    id: 2,
    question: "What is JavaScript",
    answer: "JavaScript is the programming language",
  },
  {
    id: 3,
    question: "What is JavaScript",
    answer: "JavaScript is the programming language",
  },
];
const Accordian = () => {
  const [allChecks, setAllChecks] = useState([]);
  function handleClick() {
    console.log("hi");
  }
  return (
    <div className="w-1/2 flex flex-col justify-center items-center gap-3 ">
      {accordianData.map((item) => (
        <AccordianCard
          item={item}
          key={item.id}
          setAllChecks={setAllChecks}
          allChecks={allChecks}
        />
      ))}
      <button
        className="px-4 py-3 rounded-lg text-white bg-blue-500 cursor-pointer"
        disabled={allChecks.length !== accordianData.length}
        onClick={handleClick}
      >
        Conform
      </button>
    </div>
  );
};
const AccordianCard = ({ item, setAllChecks, allChecks }) => {
  const [toggle, setToggle] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  function handleToggle() {
    setToggle((prev) => !prev);
  }
  function handleQuestions(e) {
    let ansObj = {
      id: item.id,
      answer: e.target.value,
    };
    if (e.target.checked) {
      setAllChecks([...allChecks, ansObj]);
    } else {
      setAllChecks(allChecks.filter((check) => check.id != item.id));
    }
  }
  return (
    <div className="w-full bg-yellow-50 flex flex-col p-3 gap-y-7">
      <div className="flex justify-between">
        <input type="checkbox" value={item.answer} onChange={handleQuestions} />
        <p>{item.question}</p>
        <ArrowDownIcon className="cursor-pointer" onClick={handleToggle} />
      </div>
      {toggle && (
        <div className="">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordian;
