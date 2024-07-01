import React, { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <div className='flex flex-col gap-2 mb-4'>
      <label className="text-sm">{label}</label>
      <input type="text" value={value} onChange={onChange} className='p-3 rounded-lg border'/>
    </div>
  );
};

export default InputField;