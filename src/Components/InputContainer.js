import { searchByISBN } from "api";
import { createCsv } from "csvParser";
import { fileDownload } from "fileDownloader";
import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  background-color: white;
`;

const Input = styled.input`
  background-color: white;
`;

const Button = styled.button`
  background-color: white;
`;

const InputContainer = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue) || value.length !== 13) {
      return;
    } else {
      try {
        searchByISBN(value);
      } catch {
        console.log("an error occurred");
      }
    }
    setValue("");
  };

  const handleISBNValue = (event) => setValue(event.target.value);

  const downloadAsCsv = () => {
    const localArray = Object.entries(localStorage);
    const objectArray = []
    localArray.forEach((array) => {objectArray.push(JSON.parse(array[1]))})
    const csv = createCsv(objectArray);
    fileDownload(csv)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="ISBN" value={value} onChange={handleISBNValue} />
      <Button type="submit">Submit</Button>
      <Button type="button" onClick={downloadAsCsv}>
        Download
      </Button>
    </Form>
  );
};

export default InputContainer;
