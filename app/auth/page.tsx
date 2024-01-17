'use client';
import React from 'react';
import { AuthPageContainer } from '@/app/common/containers';
import { PageDescription, AuthOptionCard } from '@/app/auth/components';
import { authText } from '@/app/common/mock/auth';
import { authOptions } from '@/app/auth/constants';

const Auth = () => {
  return (
    <AuthPageContainer>
      <PageDescription
        heading={authText.pageDescriptionText.heading}
        subHeading={authText.pageDescriptionText.subHeading}
      />
      <div className='card flex flex-row p-10 w-auto h-auto bg-base-100 shadow-xl mt-10 self-center'>
        {authOptions.map((option, key) => (
          <React.Fragment key={key}>
            <AuthOptionCard title={option.title} option={option.option} />
          </React.Fragment>
        ))}
      </div>
    </AuthPageContainer>
  );
};

export default Auth;
