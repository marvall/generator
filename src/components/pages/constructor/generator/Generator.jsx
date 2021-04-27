import { useState } from 'react';
import TestItem from '../TestItem/TestItem';

import styles from './Generator.module.scss';

export default function Generator() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState([]);

  const [currentCases, setCurrentCase] = useState(["caseHave", "caseArticle", "caseBe"]);
// currentCase - вариант из siteBar, в store хранить?
  const [correctAnswers, setCorrectAnswers] = useState({});
  // ответы хранятся в объекте, где ключ - это id инпута
  const [answersOptions, setAnswersOptions] = useState([]);
// answersOptions массив с вариантами ответов

  const handleChange = (e) => {
    setInputText(e.currentTarget.value);
  };

  // Опции кейсов можно хранить в отдельном файле
  const options = {
    caseArticle: ["a", "an"],
    caseHave: ["have", "has", "had"],
    caseBe: ["be", "am", "is", "are", "was", "were", "been"],
  };

  const wordAnalysis = (id, word) => {
    const newOptions = [];
    currentCases.map(currentCase => newOptions.push(...options[currentCase]));
    setAnswersOptions(newOptions);

    if (newOptions.includes(word)) {
      setCorrectAnswers(answers => ({...answers, [id]: word}));
    return "_";
  } else {
    return word;
  }
  };
  
  const generationTextArray = (text) => {
    let newText = text.split(" ");
    return newText.map((word, index) => wordAnalysis(index, word));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutputText(generationTextArray(inputText));
  };

  return (
  <>
    <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
      <textarea
        placeholder="Поле для текста"
        type="text"
        name="inputText"
        className={styles.input}
        value={inputText}
        onChange={handleChange}
        rows="10"
        cols="20"
        wrap="hard"
        required
        />
              
      <button type="submit" className={styles.btn}> Генерировать </button>
    </form>
    
      <div className={styles.output}>
        {outputText.map((word, index) => (word !== "_") ? (word + " ") : <TestItem key={index} id={index}/>)}
      </div>
  </>
  )
}



// const caseArticle = (word) => {
//     const options = ["a", "an"];
//     setAnswersOptions(options);
//     if (options.includes(word)) {
//       setCorrectAnswers(answer => [...answer, word]);
//     return "_";
//   } else {
//     return word;
//   }
//   };
    
//   const caseHave = (word) => {
//     const options = ["have", "has", "had"];
//     setAnswersOptions(options);
//     if (options.includes(word)) {
//      setCorrectAnswers(answer => [...answer, word]);
//     return "_";
//   } else {
//     return word;
//   }
// };
//   const caseBe = (word) => {
//     const options = ["be", "am", "is", "are", "was", "were", "been"];
//     setAnswersOptions(options);

//     if (options.includes(word)) {
//      setCorrectAnswers(answer => [...answer, word]);
//     return "_";
//   } else {
//     return word;
//   }
// };