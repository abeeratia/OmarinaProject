import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`max-w-[1110px] mx-auto px-6 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
