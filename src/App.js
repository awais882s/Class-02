import Button from "./Components/Button";

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
      <Button data={sampleData}></Button>
      <Button data1={sampleData1}></Button>
      <Button data1={sampleData2}></Button>
      <Button data1={sampleData3}></Button>
    </div>
  );
}

export default App;
