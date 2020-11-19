import axios from "axios";
import parser from "fast-xml-parser";

const api = axios.create({
  baseURL: "/kolisnet/openApi/open.php?",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
  },
});

export const searchByISBN = async (ISBN) => {
  const state = {
    REC_KEY: null,
    ISBN,
    title: "",
    author: "",
    publisher: "",
    year: "",
    class: "",
  };

  const { data } = await api.get("", {
    params: {
      collection_set: 1,
      gubun1: "ISBN",
      code1: ISBN,
    },
  });

  let {
    METADATA: { RECORD },
  } = parser.parse(data);

  if (Array.isArray(RECORD)) {
    RECORD = RECORD[0];
  }

  state.REC_KEY = RECORD.REC_KEY;
  state.ISBN = ISBN;
  state.title = RECORD.TITLE;
  state.author = RECORD.AUTHOR;
  state.publisher = RECORD.PUBLISHER;
  state.year = RECORD.PUBYEAR;

  const { data: detailData } = await api.get("", {
    params: {
      rec_key: state.REC_KEY,
    },
  });
  const {
    METADATA: {
      BIBINFO: { CLASSFY_INFO },
    },
  } = parser.parse(detailData);

  state.class = CLASSFY_INFO.slice(13);
  console.log(state);
};