import ClickedButton from "./ClickedButton";
import SaveButton from "./SaveButton";
// import "./styling.css";

function Button(props) { // dont forget to pass in variable names
  // const saveButton = props.saveButton;
  return props.saveButton ? <SaveButton /> : <ClickedButton />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 