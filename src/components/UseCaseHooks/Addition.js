import { memo } from "react";

const Addition = memo((props) => {
  console.log('Addition Component rendered...');
  const { counterHandler, counter } = props;

  return (
    <>
      <button onClick={() => counterHandler(counter+1)} >Addition</button>
    </>
  );
}); 

export default Addition;