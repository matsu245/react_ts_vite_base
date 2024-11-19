import React, { useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // モーダル外のクリックで閉じる処理
  const handleBackgroundClick = (e: React.MouseEvent) => {
    // クリックがモーダル内部でなければ閉じる
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50"
      onClick={handleBackgroundClick} // モーダル背景のクリックで閉じる
    >
      <div
        ref={modalRef} // モーダル本体にrefを設定
        className="relative w-96 rounded-lg bg-white p-6" // relativeを追加してボタンを配置できるように
      >
        {/* モーダル内の × ボタン */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
