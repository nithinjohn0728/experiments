import React from "react";

const Content = () => {
  const namesArray = ["Alice", "Bob", "Charlie"];
  const int = Math.floor(Math.random() * 3);

  const returnNumber = () => {
    const numArray = [1, 2, 3];
    const result = Math.floor(Math.random() * 3);
    return numArray[result];
  };

  const handleClick = () => {
    alert("clicked");
  };

  const handleClick2 = (name) => {
    alert(`${name} is clicked`);
  };

  const handleClick3 = (e) => {
    alert(`${e} is clicked`);
  };
  return (
    <div>
      <p>Hello {namesArray[int]}</p>
      <p>Hi {returnNumber()}</p>
      <button onClick={handleClick}>click me</button>
      <button onClick={(e) => handleClick(e)}>click event</button>
      <button
        onClick={() => {
          handleClick2("get");
        }}
      >
        click with name
      </button>
    </div>
  );
};

export default Content;
