import React from 'react';

const SimpleTextRender = (props) => {
  const {customText1, customText2} = props;

  let newText1 = customText1.toLowerCase();

  return (
    <div>
      <h1>{newText1}</h1>
      <p>{customText2}</p>
    </div>
  )
};

export default SimpleTextRender;
