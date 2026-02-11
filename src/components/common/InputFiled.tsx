import React from "react";
import { Input } from "../../components/ui/input";
import { Field, FieldLabel } from "../../components/ui/field";
import { useForm } from "react-hook-form";

interface InputFiledProps {
  name: string;
  placeholder: string;
  htmlfor: string;
  id: string;
  className?: string;
}

const InputFiled = ({
  name,
  placeholder,
  htmlfor,
  id,
  className,
}: InputFiledProps) => {
  return (
    <Field className={`${className} font-medium text-lg leading-5`}>
      <FieldLabel htmlFor={htmlfor}>{name}</FieldLabel>
      <Input
        id={id}
        type="text"
        className="rounded-lg pt-2.5 px-4 w-full h-14 "
        placeholder={placeholder}
      />
    </Field>
  );
};

export default InputFiled;
