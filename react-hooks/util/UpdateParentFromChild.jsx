import {useState} from "react";

const Child = (props) => {
  const {setValue} = props;
  
  const toggleUpdate = () => {
    return setValue("Parent is updated!")
  }
  return (
    <>
      <div>Child</div>
      <button onClick={toggleUpdate}>Change Parent Value</button>
    </>
  );
}


const Parent = () => {
  const [value, setValue] = useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue}/>
      </div>
    </>
  );
}

export default Parent;


