import React from "react";
import SectionPresenter from "./SectionPresenter";

const data = {
  id: 1,
  ISBN: "9788932471631",
  REC_KEY: 431404161,
  author: "리처드 도킨스 지음;홍영남;이상임 공옮김",
  class: "491.51",
  publisher: "을유문화사",
  title: "이기적 유전자 : 진화론의 새로운 패러다임",
  year: 2017,
};

const SectionContainer = () => {
  return (
    <SectionPresenter
      id={data.id}
      ISBN={data.ISBN}
      author={data.author}
      class={data.class}
      publisher={data.publisher}
      title={data.title}
      year={data.year}
    />
  );
};

export default SectionContainer;
