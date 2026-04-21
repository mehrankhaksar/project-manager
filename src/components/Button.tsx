import type React from "react";

type VariantType = "default" | "secondary" | "ghost";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  children: React.ReactNode;
}

export default function Button({
  children,
  variant = "default",
  className = "",
  ...props
}: IButtonProps) {
  let variantsClassName =
    "px-4 py-2 text-xs md:text-base rounded-xl transition-colors font-semibold";

  switch (variant) {
    case "default":
      variantsClassName = variantsClassName.concat(
        " bg-stone-900 text-white hover:bg-stone-600",
      );
      break;

    case "secondary":
      variantsClassName = variantsClassName.concat(
        " bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100",
      );
      break;

    case "ghost":
      variantsClassName = variantsClassName.concat(
        " text-stone-800 hover:text-stone-950",
      );
      break;
  }

  return (
    <button className={`${variantsClassName} ${className}`} {...props}>
      {children}
    </button>
  );
}
