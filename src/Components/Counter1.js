import Button from "./Button";

function Counter1(props) {
//   const sampleData = {
//     color: "red",
//     title: "Learn ReactJs",
//     width: "50",
//   };
//   const sampleData1 = ["1", "2", "3", "4", "5"];
//   const sampleData2 = "Sample String";
//   const sampleData3 = 10;

  return (
    <div className="App">
      Counter Components
      <Button data={props.sampleData}></Button>
      <Button data1={props.sampleData1}></Button>
      <Button data1={props.sampleData2}></Button>
      <Button data1={props.sampleData3}></Button>
    </div>
  );
}

export default Counter1;


// pass data from app.js to counter.js as props
// forward those props as props from counter.js to button.js