import { useState } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [tenNumbers, setTenNumbers] = useState([]);
  const arrayNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  function getNumber(number) {
    if (numbers.length < 13) {
      if (numbers.indexOf(number) == -1)
        setNumbers((prevNumbers) => [...prevNumbers, number]);
    } else {
      alert("Limite Máximo: 13 números");
      return false;
    }
  }

  function getTenNumbers() {
    const randomNumbers = [...numbers].sort(() => Math.random() - 0.5);
    const tenRandomNumbers = randomNumbers.slice(0, 10);
    setTenNumbers(tenRandomNumbers);
  }

  function deleteNumber() {
    const newArray = [...numbers];
    const deletedNumber = Number(newArray.splice(-1, 1));
    setNumbers(newArray);

    if (tenNumbers.find((number) => number === deletedNumber)) {
      const newArrayOdd = [...tenNumbers];
      const filteredArray = newArrayOdd.filter(
        (numbers) => numbers !== deletedNumber
      );
      setTenNumbers(filteredArray);
    }
  }

  return (
    <div className="container">
      <div className="selectNumbersContainer">
        {arrayNumbers.map((number) => (
          <button key={number} onClick={() => getNumber(number)}>
            {number}
          </button>
        ))}
      </div>
      {numbers.length > 0 && (
        <div className="chosenNumbers">
          {numbers.map((number) => (
            <p key={number}>{number.toString().padStart(2, "0")}</p>
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
          {numbers.length === 13 && (
            <button onClick={getTenNumbers}>Selecionar 10 Dezenas</button>
          )}
        </div>
      </div>
      <div className="twelveNumbers">
        {tenNumbers.length > 0 && (
          <div>
            <h1>Dez Dezenas</h1>
            <div className="oddNumbers">
              {tenNumbers.map((tenNumbers) => (
                <p key={tenNumbers}>{tenNumbers.toString().padStart(2, "0")}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
