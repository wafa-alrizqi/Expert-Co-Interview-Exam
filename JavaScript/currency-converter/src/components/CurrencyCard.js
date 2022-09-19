import React from "react";

export default function CurrencyCard(props) {
  const {
    currencyList,
    selectCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;
  return (
    <>
      <div className="outer-div">
        <div className="inner-div1">
          <input
            type={"number"}
            className="input"
            value={amount}
            onChange={onChangeAmount}
          />
        </div>
        <div className="inner-div2">
          <select
            key={selectCurrency}
            value={selectCurrency}
            onChange={onChangeCurrency}
            style={{ height: 21 }}
          >
            {/* {currencyList.map(option => (
            <option key={option.id} value={option}>{option}</option>
            ))} */}
            {currencyList.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
