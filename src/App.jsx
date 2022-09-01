import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [odd, setOdd] = useState([]);
  const [pair, setPair] = useState([]);
  const arrayNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  function getNumber(number) {
    if (numbers.length < 21) {
      if (numbers.indexOf(number) == -1)
        setNumbers((prevNumbers) => [...prevNumbers, number]);
    } else {
      alert("Limite Máximo: 21 números");
      return false;
    }
  }

  function getTwelves() {
    const randomNumbers = [...numbers].sort(() => Math.random() - 0.5);
    randomNumbers.forEach((number) => {
      if (odd.length < 6 && number % 2 !== 0 && odd.indexOf(number) == -1) {
        setOdd((prevNumbers) => [...prevNumbers, number]);
      } else if (
        pair.length < 6 &&
        number % 2 === 0 &&
        pair.indexOf(number) == -1
      ) {
        setPair((prevNumbers) => [...prevNumbers, number]);
      }
    });
  }

  function deleteNumber() {
    let newArray = [...numbers];
    let deletedNumber = Number(newArray.splice(-1, 1).join(""));
    setNumbers(newArray);

    if (odd.find((number) => number === deletedNumber)) {
      const newArrayOdd = [...odd];
      const filteredArray = newArrayOdd.filter(
        (numbers) => numbers !== deletedNumber
      );
      setOdd(filteredArray);
    } else {
      const newArrayPair = [...pair];
      const filteredArray = newArrayPair.filter(
        (numbers) => numbers !== deletedNumber
      );
      setPair(filteredArray);
    }
  }

  return (
    <div className="container">
      <div className="buttonsContainer">
        {arrayNumbers.map((number) => (
          <button onClick={() => getNumber(number)}>{number}</button>
        ))}
      </div>
      <div className="chosenNumbers">
        {numbers.map((number) => (
          <p>{number}</p>
        ))}
      </div>
      <button onClick={deleteNumber}>Corrigir número adicionado</button>
      <button onClick={getTwelves}>Selecionar Pares e Impares</button>
      <div className="twelveNumbers">
        <div>
          {odd.map((oddNumber) => (
            <p>{oddNumber}</p>
          ))}
        </div>
        <div>
          {pair.map((pairNumber) => (
            <p>{pairNumber}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
