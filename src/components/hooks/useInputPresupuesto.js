import { useState } from "react";

export const useInputPresupuesto = () => {
  const [inputValue, setInputValue] = useState({
    presupuesto: "",
    usuario: "",
  });
  const { presupuesto, usuario } = inputValue;

  const handleOnChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e, newPresupuesto) => {
    e.preventDefault();
    newPresupuesto(presupuesto, usuario);
    setInputValue({ ...inputValue, presupuesto: "", usuario: "" });
  };

  const sendInput = (buscarPresupuesto) => {
    buscarPresupuesto(presupuesto, usuario);
    setInputValue({ ...inputValue, presupuesto: "", usuario: "" });
  };

  return {
    inputValue,
    handleOnChange,
    onSubmit,
    sendInput,
  };
};
