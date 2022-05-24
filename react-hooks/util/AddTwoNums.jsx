import {useState} from "react";

const AddTwoNums = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);
  
  const inputNumber1 = (e) => {
    return setNumber1(e.target.value)
  }
  
  const inputNumber2 = (e) => {
    return setNumber2(e.target.value)
  }
  
  const getTotal = () => {
    const total = +number1 + +number2
    return setTotal(total);
  }

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input placeholder="First Number" type="number" onChange={inputNumber1} value={number1}/>

      <input placeholder="Second Number" type="number" onChange={inputNumber2} value={number2}/>

      <button onClick={getTotal}>Add Two Numbers</button>
      <p>Total: {number1 && number2 ? total : 0}  </p>
    </div>
  );
}

export default AddTwoNums;