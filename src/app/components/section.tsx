import React, { PropsWithChildren } from 'react';

const FullSection = ({ children }: PropsWithChildren) => {
  return <section className="h-screen w-screen">{children}</section>;
};

export default FullSection;
