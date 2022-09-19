import "./App.css";
import CurrencyCard from "./components/CurrencyCard";
import FromCurrency from "./components/FromCurrency";
import ToCurrency from "./components/ToCurrency";
import React, { useState, useEffect } from "react";

// const BASE_URL = "https://api.exchangeratesapi.io/v1/";

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  // console.log(currencyList);

  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurr, setAmountInFromCurr] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();
  // console.log(exchangeRate);

  let toAmount, fromAmount;
  if (amountInFromCurr) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    var myHeaders = new Headers();
    // myHeaders.append("apikey", "U3MM7R97AmLwBtYZ9PuY6UceBAp3KMCO");
    myHeaders.append("apikey", "oE9288rTnXKQs1PC61DJEWR2xmx5VRXM");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    fetch("https://api.apilayer.com/fixer/latest", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const defultCurrency = Object.keys(data.rates)[0];
        setCurrencyList([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(defultCurrency);
        setExchangeRate(data.rates[defultCurrency]);
      });
  }, []);

  useEffect(() => {
    var myHeaders = new Headers();
    // myHeaders.append("apikey", "U3MM7R97AmLwBtYZ9PuY6UceBAp3KMCO");
    myHeaders.append("apikey", "oE9288rTnXKQs1PC61DJEWR2xmx5VRXM");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    if (fromCurrency !== undefined && toCurrency !== undefined) {
      fetch(
        `https://api.apilayer.com/fixer/latest?symbols=${toCurrency}&base=${fromCurrency}`,
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function onChangeFromAmount(e) {
    setAmount(e.target.value);
    setAmountInFromCurr(true);
  }
  function onChangeToAmount(e) {
    setAmount(e.target.value);
    setAmountInFromCurr(false);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}> Currency Converter</h1>
      <div style={{ border: "3px solid black", marginTop: "100px" , paddingTop:'20px'}}>
        <CurrencyCard
          currencyList={currencyList}
          selectCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          onChangeAmount={onChangeFromAmount}
          amount={fromAmount}
        />
        <CurrencyCard
          currencyList={currencyList}
          selectCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          onChangeAmount={onChangeToAmount}
          amount={toAmount}
        />
        <FromCurrency
          selectCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          onChangeAmount={onChangeFromAmount}
          amount={fromAmount}
        />
        <ToCurrency
          selectCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          onChangeAmount={onChangeToAmount}
          amount={toAmount}
        />
      </div>
    </>
  );
}
export default App;
