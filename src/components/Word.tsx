import { useEffect } from "react";
import { asyncReadFile } from "../helpers/readFile";
import { LetterBox } from "./LetterBox";

export const Word = ({
  word = "",
  missingLetters = [],
  foundedLetters = [],
}: {
  word: string;
  missingLetters: string[];
  foundedLetters: string[];
}) => {
  useEffect(() => {
    if ((word = "")) {
      asyncReadFile("../data/words.txt");
    }
  }, []);

  const getArrayFromString = (word: string) => {
    let arrayLetters: string[] = [];
    for (let index = 0; index < word.length; index++) {
      arrayLetters.push(word[index]);
    }
    return arrayLetters;
  };

  return (
    <div className="flex justify-center">
      {getArrayFromString(word).map((letter: string) => {
        return <LetterBox letter={letter} />;
      })}
    </div>
  );
};
