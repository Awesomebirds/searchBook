import React from "react";
import SectionPresenter from "./SectionPresenter";

const SectionContainer = () => {
  const mapToComponents = () => {
    const localArray = Object.entries(localStorage);
    const parsedArray = [];
    localArray.forEach((element) => parsedArray.push(JSON.parse(element[1])));
    console.log(parsedArray);

    return parsedArray.map((object, index) => {
      return <SectionPresenter data={object} key={index} />;
    });
  };

  return <div>{mapToComponents()}</div>;
};

export default SectionContainer;
