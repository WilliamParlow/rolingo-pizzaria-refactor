import React, { ChangeEvent } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div className='flex flex-col gap-2 mb-4'>
      <label className="text-sm">{label}</label>
      <select value={value} onChange={onChange} className='p-3 rounded-lg bg-white border'>
        {options.map((option: { label: string; value: string }) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
