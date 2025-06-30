import React from "react";

interface LotusIconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "outline" | "filled";
}

const LotusIcon: React.FC<LotusIconProps> = ({
  size = "md",
}) => {
  const sizeClasses = {
    sm: "h-4",
    md: "h-6",
    lg: "h-8",
    xl: "h-12",
  };

  return (
    <img
      src="https://anantharehab.com/wp-content/uploads/2025/03/lotus.png"
      alt="lotuc"
      className={`${sizeClasses[size]}`}
    />
  );
};

export default LotusIcon;
