import { IonInput } from "@ionic/react";
import "./TextField.css";

interface TextFieldProps {
  placeholder?: string;
  value: string;
  onIonInput?: (event: CustomEvent<KeyboardEvent>) => void; // Adjusted the type
}

const TextField: React.FunctionComponent<TextFieldProps> = (props) => {
  const { placeholder, onIonInput, value } = props;
  return (
    <>
      <IonInput
        value={value}
        // @ts-ignore
        onIonInput={onIonInput}
        className="text-field"
        placeholder={placeholder}
      />
    </>
  );
};

export default TextField;
