import type React from "react";
import { forwardRef } from "react";

type InputType =
  | ({ isTextarea?: false } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({ isTextarea: true } & React.TextareaHTMLAttributes<HTMLTextAreaElement>);

type InputPropsType = InputType & {
  label?: string;
};

const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputPropsType
>(function Input({ label, isTextarea = false, ...props }, ref) {
  const className =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>

      {isTextarea ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={className}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          type={
            (props as React.InputHTMLAttributes<HTMLInputElement>).type ??
            "text"
          }
          ref={ref as React.Ref<HTMLInputElement>}
          className={className}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </p>
  );
});

export default Input;
