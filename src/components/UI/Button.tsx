import React from 'react';

interface ButtonProps {
  onClick?: () => void; // onClickはオプションに変更（リンクの場合は不要）
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string; // aタグの場合はリンク先を指定
  as?: 'button' | 'a' | 'span'; // 使用するタグを指定
  variant?: 'primary' | 'secondary'; // variantで切り替え
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  href,
  as = 'button', // デフォルトはbutton
  variant = 'primary', // デフォルトはprimary
}) => {
  const baseStyles = `inline-block rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`;

  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300',
    secondary: 'bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-black', // secondaryのスタイル
  };

  if (as === 'a') {
    return (
      <a href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
        {children}
      </a>
    );
  }

  if (as === 'span') {
    return (
      <span className={`${baseStyles} ${variantStyles[variant]}`}>
        {children}
      </span>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
