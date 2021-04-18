import { useState } from "react";

import Hero from "./Hero";
import Movies from './Movies';
import WebSites from './WebSites';

import Style from "./HomePage.module.scss";

const CaseArticl = function (word) {
  if (word === "a" || word === "an") {
    return "___";
  } else {
    return word;
  }
};
const CaseHave = function (word) {
  if (word === "have" || word === "has" || word === "had") {
    return "___";
  } else {
    return word;
  }
};
const CaseBe = function (word) {
  if (
    word === "be" ||
    word === "am" ||
    word === "is" ||
    word === "are" ||
    word === "was" ||
    word === "were" ||
    word === "been"
  ) {
    return "___";
  } else {
    return word;
  }
};
const GentCase = function (text) {
  let newText = text.split(" ");
  newText = newText.map((word) => CaseBe(word));
  newText = newText.map((word) => CaseArticl(word));
  newText = newText.map((word) => CaseHave(word));
  return newText.map((word) => " " + word + " ");
};

function HomePage() {
  const [inputText, setText] = useState("");
  const [outputText, setOutputText] = useState("");
  const handleChange = (event) => {
    setText(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    GentCase(inputText);
    setOutputText(GentCase(inputText));
  };
  return (
    <>
      <Hero />
      <Movies />
      <WebSites />
      
      {/* <form onSubmit={handleSubmit}>
        <textarea
          className={Style.input}
          type="text"
          value={inputText}
          name="inputText"
          onChange={handleChange}
          rows="10"
          cols="20"
          wrap="hard"
        />
        <button type="submit">SEND</button>
      </form>
      <div className={Style.output}>{outputText}</div> */}
    </>
  );
}

export default HomePage;
