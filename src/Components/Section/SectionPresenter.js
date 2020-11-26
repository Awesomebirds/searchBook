import React from "react";

const SectionPresenter = (props) => {
  return (
    <div>
      <h1>
        {props.id}
        {props.title}
        {props.ISBN}
        {props.author}
        {props.publisher}
        {props.class}
        {props.year}
      </h1>
    </div>
  );
};

export default SectionPresenter;
