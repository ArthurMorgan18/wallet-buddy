interface IAuthTextFieldProps {
  inputType: string;
  placeholder: string;
}
const AuthTextField = ({ inputType, placeholder }: IAuthTextFieldProps) => {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      className='input input-bordered input-md w-full max-w-xs'
    />
  );
};

export default AuthTextField;
