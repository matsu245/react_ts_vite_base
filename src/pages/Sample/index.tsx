import React, { useState } from 'react';

import YesNoCard from './components/YesNoCard';
import { useYesNo } from './hooks/useYesNo';

import Button from '@/components/UI/Button';
import Modal from '@/components/UI/Modal';

const Sample: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useYesNo フックを使用してデータを取得
  const { data, loading, error, getYesNoData } = useYesNo();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto min-h-96 px-5 py-10">
        {/* APIから取得したデータがまだない場合 */}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading && data && (
          <YesNoCard
            answer={data.answer}
            image={data.image}
            onRetry={getYesNoData} // 再度APIデータを取得するためのボタン
          />
        )}
      </div>

      <div className="container mx-auto px-5 py-10">
        <Button onClick={openModal} variant="primary" as="button">
          Open Modal
        </Button>

        <Button href="https://example.com" variant="primary" as="a">
          Go to Example
        </Button>

        <Button variant="secondary" as="span">
          Text Only Button
        </Button>
        {/* モーダルが開いている場合の表示 */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-semibold">Hello, I'm a Modal!</h2>
          <p className="mt-4">This is a simple modal example in React.</p>
          {/* 閉じるボタン */}
          <Button onClick={closeModal} variant="secondary" as="button">
            Close Modal
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default Sample;
