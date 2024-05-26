import React from "react";
interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={` 
      box-container
 bg-neutral-900
   rounded-lg
   w-full
   h-fit
   ${className}
  `}
    >
      {children}
    </div>
  );
};

export default Box;
