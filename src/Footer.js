import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <div>
      <p>@2022 all rights reserved</p>
      <p>{today.toLocaleString()}</p>
    </div>
  );
};

export default Footer;
