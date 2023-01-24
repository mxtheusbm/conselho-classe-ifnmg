export type InputProps = {
  label: string;
  placeholder: string;
}

function Input({label, placeholder}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-gray-800">
        {label}
      </label>
      
      <input
        className="bg-green-50 py-3 px-5 rounded-md border-none" 
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input;