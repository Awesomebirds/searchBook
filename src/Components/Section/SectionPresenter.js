import React from "react";

const SectionPresenter = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <h1>
        {data.id}
        {data.title}
        {data.ISBN}
        {data.author}
        {data.publisher}
        {data.class}
        {data.year}
      </h1>
    </div>
  );
};

export default SectionPresenter;
