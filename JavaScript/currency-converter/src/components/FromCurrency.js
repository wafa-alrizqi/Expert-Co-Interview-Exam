import React from "react";

export default function FromCurrency(props) {
  const { selectCurrency, amount } = props;
  return (
    <>
      <div></div>
      <p
        disabled
        style={{textAlign: 'center',  color: "GrayText"}}
      >{amount} {selectCurrency} equals</p>
    </>
  );
}
