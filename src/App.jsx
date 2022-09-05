import { useState } from "react";
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

  function getTwelvesNumber() {
    const randomNumbers = [...numbers].sort(() => Math.random() - 0.5);
    let sixPairNumbers = [];
    let sixOddNumbers = [];
    randomNumbers.forEach((number) => {
      if (
        sixOddNumbers.length < 6 &&
        number % 2 !== 0 &&
        !sixOddNumbers.includes(number)
      ) {
        sixOddNumbers = [...sixOddNumbers, number];
      } else if (
        sixPairNumbers.length < 6 &&
        number % 2 === 0 &&
        !sixPairNumbers.includes(number)
      ) {
        sixPairNumbers = [...sixPairNumbers, number];
      }
    });
    setPair(sixPairNumbers);
    setOdd(sixOddNumbers);
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
      <div className="selectNumbersContainer">
        {arrayNumbers.map((number) => (
          <button onClick={() => getNumber(number)}>{number}</button>
        ))}
      </div>
      {numbers.length > 0 && (
        <div className="chosenNumbers">
          {numbers.map((number) => (
            <p>{number}</p>
          ))}
        </div>
      )}
      <div className="buttonsContainer">
        <div className="deleteNumber">
          <button onClick={deleteNumber}>
            Apagar último número adicionado
          </button>
        </div>
        <div className="getTwelvesNumbers">
          <button onClick={getTwelvesNumber}>Selecionar Ímpares e Pares</button>
        </div>
      </div>
      <div className="twelveNumbers">
        {odd.length > 0 && (
          <div>
            <h1>Ímpares</h1>
            <div className="oddNumbers">
              {odd.map((oddNumber) => (
                <p>{oddNumber}</p>
              ))}
            </div>
          </div>
        )}
        {pair.length > 0 && (
          <div>
            <h1>Pares</h1>
            <div className="pairNumbers">
              {pair.map((pairNumber) => (
                <p>{pairNumber}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
