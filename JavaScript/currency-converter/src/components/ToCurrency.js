import React from "react";

export default function ToCurrency(props) {
  const { selectCurrency, amount } = props;
  return (
    <>
      <div></div>
      <h3
        disabled
        style={{textAlign: 'center'}}
      >{amount} {selectCurrency}</h3>
    </>
  );
}
