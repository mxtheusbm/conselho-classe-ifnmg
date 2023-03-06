import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface IFormValues {
  email: string;
  password: string;
}

type InputProps = {
  label?: string;
  name?: string
  placeholder?: string;
  type: string;
  register?: UseFormRegister<IFormValues>;
  errors?: string;
};

function Input({ label, name, placeholder, type, register, errors }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-gray-800">
        {label}
      </label>
      
      <div className="flex flex-col gap-1">
        <input
          className={`bg-green-50 py-3 px-5 rounded-md outline-none ${errors && "border-[1px] border-red-500"}`}
          type={type}
          placeholder={placeholder}
          // {...register(name)}
        />

        {errors && <span className="text-xs text-red-500">{errors}</span>}
      </div>
    </div>
  )
}

export default Input;