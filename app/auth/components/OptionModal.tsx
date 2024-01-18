'use client';
import React, { useCallback, useMemo, useState } from 'react';
import { IAuthOptionCard } from '@/app/auth/components/AuthOptionCard';
import { useAppSelector } from '@/app/hooks';
import AuthTextField from '@/app/auth/components/AuthTextField';
import { IAuthInput } from '@/app/auth/constants/types';
import Validator, { InputType } from '@/app/utils/Validator';

const OptionModal = ({ option, title }: IAuthOptionCard) => {
  const inputsData: IAuthInput[] = useAppSelector((state) => state.auth.inputs);
  const [formValues, setFormValues] = useState({});

  const handleInputChange = useCallback((key: string, value: string) => {
    setFormValues((prevValues) => ({ ...prevValues, [key]: value }));
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const values: { [key: string]: string } = {};
    // @ts-ignore
    const inputs = [...event.target];
    inputs.forEach((input) => (values[input.name] = input.value));
  };

  const isValidState = useMemo(() => {
    const values = Object.values(formValues);
    return values.every((value) => value !== '');
  }, [formValues]);

  const isSubmitDisabled =
    inputsData.length !== Object.keys(formValues).length && isValidState;

  return (
    <dialog id={`choiceModal__${option}`} className='modal'>
      <div className='modal-box'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='font-bold text-lg'>{title.toUpperCase()}</h3>
        <form onSubmit={handleSubmit}>
          {inputsData.map((input, key) => (
            <div className='mb-5 mt-2.5' key={key}>
              <AuthTextField
                name={input.name}
                inputType={input.type}
                placeholder={input.placeholder}
                onInputChange={handleInputChange}
                inputKey={input.name}
                inputValidationStatus={Validator.isAuthInputValid(
                  input.pattern,
                  //@ts-ignore
                  formValues[input.name],
                  input.type as InputType
                )}
              />
            </div>
          ))}
          <input
            type='submit'
            disabled={isSubmitDisabled}
            className='btn btn-block confirm-button'
          />
        </form>
      </div>
    </dialog>
  );
};

export default OptionModal;
