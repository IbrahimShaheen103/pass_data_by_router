import { useLocation } from "react-router-dom";

const FormResult = () => {
  const { state } = useLocation();
  return (
    <>
      <p>name:{state.name}</p>
      <p>email:{state.age}</p>
    </>
  );
};

export default FormResult;
