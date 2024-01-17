import React from 'react';

const AuthPageContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <main className='flex flex-col w-screen h-screen justify-start auth__gradient-bg'>
      {children}
      <div />
    </main>
  );
};

export default AuthPageContainer;
