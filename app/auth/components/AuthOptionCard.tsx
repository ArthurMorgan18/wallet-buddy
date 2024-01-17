'use client';
import { useState } from 'react';
import { OptionIcon } from '@/app/auth/components/index';
import OptionModal from '@/app/auth/components/OptionModal';
import { useAppDispatch } from '@/app/hooks';
import { dispatchAuthChoice } from '@/app/store/slices/authSlice';

export interface IAuthOptionCard {
  title: string;
  option: 'login' | 'signUp';
}

const AuthOptionCard = ({ title, option }: IAuthOptionCard) => {
  const [isHovered, setIsHovered] = useState(false);
  const fillColor = isHovered ? '#01BD57FF' : '#fff';
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    const modalElement: any = document.getElementById(`choiceModal__${option}`);
    if (modalElement) {
      modalElement.showModal();
      dispatch(dispatchAuthChoice(option));
    }
  };

  const handleHover = () => setIsHovered(!isHovered);

  const containerProps = {
    onMouseEnter: handleHover,
    onMouseLeave: handleHover,
    onClick: handleOpenModal,
    className:
      'card cursor-pointer h-80 w-56 bg-base-200 justify-center items-center mr-5',
  };

  return (
    <div {...containerProps}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill={fillColor}
        className='w-20 h-20'
      >
        <OptionIcon option={option} />
      </svg>
      <h6>{title}</h6>
      <OptionModal option={option} title={title} />
    </div>
  );
};

export default AuthOptionCard;
