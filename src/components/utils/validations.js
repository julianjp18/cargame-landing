import { message } from "antd";
import { PERMITTED_FORMATS } from "./extras";

export const validationFormatOnChange = (file) => {

  if (PERMITTED_FORMATS.includes(file.type)) {
    return false;
  }
  message.error(`${file.name} no es de tipo: .png, .jpg, .pdf`);
};