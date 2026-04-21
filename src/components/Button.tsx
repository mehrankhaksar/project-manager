import type React from "react";

type VariantType = "default" | "secondary" | "ghost";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  children: React.ReactNode;
}

export default function Button({
  children,
  variant = "default",
  ...props
}: IButtonProps) {
  let className =
    "px-4 py-2 text-xs md:text-base rounded-xl transition-colors font-semibold";

  switch (variant) {
    case "default":
      className = className.concat(
        " bg-stone-900 text-white hover:bg-stone-600",
      );
      break;

    case "secondary":
      className = className.concat(
        " bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100",
      );
      break;

    case "ghost":
      className = className.concat(" text-stone-800 hover:text-stone-950");
      break;
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
