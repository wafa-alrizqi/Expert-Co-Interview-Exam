import React from "react";
import { useState } from "react";
export default function CurrencyConverter() {
  const [number, setNumber] = useState();
  const [fromCrrency, setFromCurrency] = useState();

  console.log(number);

  return (
    <>
      <div>Currency Converter</div>
      <input
        placeholder="Currency Value"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>

      <form>
        <select
          value={fromCrrency}
          onChange={(e) => {
            setFromCurrency(e.target.value);
          }}
        >
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    </>
  );
}
