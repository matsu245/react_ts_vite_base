import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  error,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="text-gray-700">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange} // 正しくイベントを渡す
          className="form-checkbox rounded border-gray-300 text-blue-600"
        />
        {label}
      </label>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Checkbox;
