import { IonInput } from "@ionic/react";
import "./TextField.css";

interface TextFieldProps {
  placeholder?: string;
  value: any;
  onIonInput: any;
}

const TextField: React.FunctionComponent<TextFieldProps> = (props) => {
  const { placeholder, onIonInput, value } = props;
  return (
    <>
      <IonInput
        value={value}
        onIonInput={onIonInput}
        className="text-field"
        placeholder={placeholder}
      />
    </>
  );
};

export default TextField;
