/* eslint-disable react/prop-types */
import { useState } from "react";

const data = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
const Animation = () => {
  const [fillerBox, setFilledBox] = useState(new Set());
  const [flaternDate, setFlaternDate] = useState(data.flat());
  const [clickDisabled, setClickDisabled] = useState(false);

  function handleClearBoxes() {
    setClickDisabled(true);
    const timmer = setInterval(() => {
      setFilledBox((prev) => {
        if (prev.size > 0) {
          const firstValue = Array.from(prev).pop();
          const newSet = new Set(prev);
          newSet.delete(firstValue);
          return newSet;
        } else {
          clearInterval(timmer);
          setClickDisabled(false);
          return prev;
        }
      });
    }, 500);
  }

  return (
    <div className={`w-1/6 grid grid-cols-${data[0].length} gap-y-2 m-6`}>
      {flaternDate.map((item, index) => (
        <Box
          key={index}
          value={item}
          setFilledBox={setFilledBox}
          fillerBox={fillerBox}
          index={index}
          flaternDate={flaternDate}
          handleClearBoxes={handleClearBoxes}
          clickDisabled={clickDisabled}
        />
      ))}
    </div>
  );
};

const Box = ({
  value,
  setFilledBox,
  fillerBox,
  index,
  flaternDate,
  handleClearBoxes,
  clickDisabled,
}) => {
  function handleColor() {
    if (clickDisabled) return;
    const newSet = new Set(fillerBox);
    newSet.add(index);
    setFilledBox(newSet);

    const validIndices = flaternDate.filter((val) => val == 1);

    if (fillerBox.size === validIndices.length - 1) {
      handleClearBoxes();
    }
  }

  if (value == 1) {
    return (
      <div
        className={`w-16 h-16 border border-black  ${
          fillerBox.has(index) ? "bg-cyan-700" : ""
        } ${clickDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={handleColor}
      ></div>
    );
  }
  return <div className="w-5 h-5"></div>;
};
export default Animation;
