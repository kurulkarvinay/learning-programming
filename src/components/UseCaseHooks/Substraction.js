import { memo } from "react";

const Substraction = memo((props) => {
  console.log('Substration Component rendered...');
  const { counterHandler, counter } = props;

  return (
    <>
      <button onClick={() => counterHandler(counter-1)} >Substraction</button>
    </>
  );
});

export default Substraction;