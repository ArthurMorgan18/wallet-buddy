import { memo, useState } from 'react';
import { renderBorderClassName, renderEyeIcon } from '@/app/auth/helpers';
interface IAuthTextFieldProps {
  inputType: string;
  placeholder: string;
  name: string;
  onInputChange: (key: string, value: string) => void;
  inputKey: string;
  inputValidationStatus: { isValid: boolean; errorMessage: string };
}
const AuthTextField = ({
  inputType,
  placeholder,
  onInputChange,
  inputKey,
  name,
  inputValidationStatus,
}: IAuthTextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const secureInput = showPassword ? 'text' : inputType;
  const { isValid, errorMessage } = inputValidationStatus;

  return (
    <>
      <input
        name={name}
        type={secureInput}
        placeholder={placeholder}
        onChange={(value) => onInputChange(inputKey, value.target.value)}
        className={`input input-bordered input-md w-full max-w-xs ${renderBorderClassName(
          isValid,
          errorMessage
        )}`}
      />
      {!isValid && <p className='text-error text-xs mt-1'>{errorMessage}</p>}
      {inputType === 'password' && (
        <button
          className='btn btn-ghost btn-sm rounded-btn relative top-1.5 left-1'
          onClick={() => setShowPassword(!showPassword)}
        >
          {renderEyeIcon(showPassword)}
        </button>
      )}
    </>
  );
};

export default memo(AuthTextField);
