import { useEffect, useState } from "react";

import useInput from "./useInput";

interface ValidateProps {
  validator: Function;
  initState?: string;
}
const useValidate = ({ validator, initState = "" }: ValidateProps) => {
  const [value, onChangeValue, setValue] = useInput(initState);
  const [isValidateValue, setIsValidateValue] = useState(false);

  useEffect(() => {
    if (value) {
      setIsValidateValue(validator(value));
    }
  }, [value, validator]);

  return [
    value,
    onChangeValue,
    setValue,
    isValidateValue,
    setIsValidateValue,
  ] as const;
};

export default useValidate;
