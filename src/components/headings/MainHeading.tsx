import React from 'react';

type MainHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MainHeading({ children, className }: MainHeadingProps) {
  return <h1 className={className}>{children}</h1>;
}
