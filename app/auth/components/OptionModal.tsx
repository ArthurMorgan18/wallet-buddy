'use client';
import React from 'react';
import { IAuthOptionCard } from '@/app/auth/components/AuthOptionCard';
import { useAppSelector } from '@/app/hooks';
import AuthTextField from '@/app/auth/components/AuthTextField';

const OptionModal = ({ option, title }: IAuthOptionCard) => {
  const inputsData = useAppSelector((state) => state.auth.inputs);
  return (
    <dialog id={`choiceModal__${option}`} className='modal'>
      <div className='modal-box'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='font-bold text-lg'>{title.toUpperCase()}</h3>
        {inputsData.map((input, key) => (
          <div className='mb-5 mt-2.5' key={key}>
            <AuthTextField
              inputType={input.type}
              placeholder={input.placeholder}
            />
          </div>
        ))}
        <button className='btn btn-block confirm-button'>Submit</button>
      </div>
    </dialog>
  );
};

export default OptionModal;
