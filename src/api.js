import axios from "axios";
import parser from "fast-xml-parser";

//axios setting
const api = axios.create({
  baseURL: "/kolisnet/openApi/open.php?",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
  },
});

// api get classification
const getClassData = async (REC_KEY) => {
  const { data: detailData } = await api.get("", {
    params: {
      rec_key: REC_KEY,
    },
  });
  const {
    METADATA: {
      BIBINFO: { CLASSFY_INFO },
    },
  } = parser.parse(detailData);
  return CLASSFY_INFO.slice(13, 16);
};

// save data at local storage
const saveData = (object) => {
  localStorage.setItem(object.id, JSON.stringify(object));
};

//Search book data by ISBN from api
export const searchByISBN = async (ISBN, id) => {
  //data blueprint
  const state = {
    id: id,
    REC_KEY: null,
    ISBN,
    title: "",
    author: "",
    publisher: "",
    year: "",
    class: "",
  };

  //get basic data
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

  //If Record is array, get the first one
  if (Array.isArray(RECORD)) {
    RECORD = RECORD[0];
  }

  // set data blueprints
  state.REC_KEY = RECORD.REC_KEY;
  state.ISBN = ISBN;
  state.title = RECORD.TITLE;
  state.author = RECORD.AUTHOR;
  state.publisher = RECORD.PUBLISHER;
  state.year = RECORD.PUBYEAR;

  // if there is the data, get classification info and save it.
  if (state.REC_KEY) {
    getClassData(state.REC_KEY);
    saveData(state);
  } else {
    alert("데이터를 찾을 수 없습니다!");
  }
};
