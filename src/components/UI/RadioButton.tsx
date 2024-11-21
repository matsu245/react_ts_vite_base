import React from 'react';

interface RadioButtonProps {
  name: string; // ラジオボタンのグループ名
  options: { label: string; value: string }[]; // オプションのリスト
  selectedValue: string; // 選択された値
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // 値が変更された時のハンドラー
  error?: string; // エラーメッセージ（任意）
  className?: string; // カスタムスタイル（任意）
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  selectedValue,
  onChange,
  error,
  className = '',
}) => {
  return (
    <div className={`radio-group ${className}`}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-center space-x-2"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => onChange(e)}
            className="radio-input"
          />
          <span>{option.label}</span>
        </label>
      ))}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default RadioButton;
