import { message } from "antd";
import moment from "moment";
import { PERMITTED_FORMATS } from "./extras";

export const validationFormatOnChange = (file) => {

  if (PERMITTED_FORMATS.includes(file.type)) {
    return false;
  }
  message.error(`${file.name} no es de tipo: .png, .jpg, .pdf`);
};

export const disabledDate = (current, validation = 'day') => {
  // Can not select days before today and today
  return current && current < moment().endOf(validation);
};

export const disabledYearDate = (current, validation= 'year') => {
  return current && current > moment().endOf(validation);
};