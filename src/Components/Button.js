import Button1 from "./Button1";
function Button(props) {
  console.log("Props", props);
  return (
    <div>
      <Button1 data={props.data}></Button1>
      <button>Learn ReactJs</button>
    </div>
  );
}

export default Button;
