import React from "react";

const Content = () => {
  const namesArray = ["Alice", "Bob", "Charlie"];
  const int = Math.floor(Math.random() * 3);

  const returnNumber = () => {
    const numArray = [1, 2, 3];
    const result = Math.floor(Math.random() * 3);
    return numArray[result];
  };
  return (
    <div>
      <p>Hello {namesArray[int]}</p>
      <p>Hi {returnNumber()}</p>
    </div>
  );
};

export default Content;
