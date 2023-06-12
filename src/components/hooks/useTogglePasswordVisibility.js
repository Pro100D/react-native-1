import { useState } from "react";

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [textOnChangePass, setTextOnChangePass] = useState("Показати");

  const handlePasswordVisibility = () => {
    if (textOnChangePass === "Показати") {
      setPasswordVisibility(false);
      setTextOnChangePass("Скрити");
    } else if (textOnChangePass === "Скрити") {
      setPasswordVisibility(true);
      setTextOnChangePass("Показати");
    }
  };
  return { passwordVisibility, textOnChangePass, handlePasswordVisibility };
};
