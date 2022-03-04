// import Counter1 from "./Components/Counter1"
import Counter from "./Components/Counter";

function App() {
  const sampleData = {
    color: "red",
    title: "Learn ReactJs",
    width: "50",
  };
  const sampleData1 = ["1", "2", "3", "4", "5"];
  const sampleData2 = "Sample String";
  const sampleData3 = 10;

  return (
    <div className="App">
      {/* <Counter1
        sampleData={sampleData}
        sampleData1={sampleData1}
        sampleData2={sampleData2}
        sampleData3={sampleData3}
      ></Counter1> */}
      <Counter></Counter>
    </div>
  );
}

export default App;

// props
// if we want to pass data from parent to child components we need to use props
