import React, { useState } from 'react';

import YesNoCard from './components/YesNoCard';
import { useYesNo } from './hooks/useYesNo';

import Button from '@/components/UI/Button';
import Checkbox from '@/components/UI/Checkbox';
import Input from '@/components/UI/Input';
import Modal from '@/components/UI/Modal';
import RadioButton from '@/components/UI/RadioButton';

const Sample: React.FC = () => {
  // ===============================
  // 状態管理
  // ===============================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [date, setDate] = useState<string>('');
  const [nameError, setNameError] = useState<string | undefined>(undefined);
  const [dateError, setDateError] = useState<string | undefined>(undefined);
  const [isChecked, setIsChecked] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // ===============================
  // APIデータ取得（useYesNo）
  // ===============================
  const { data, loading, error, getYesNoData } = useYesNo();

  // ===============================
  // 各種ハンドラー
  // ===============================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setNameError(undefined); // 入力途中でエラーをリセット
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setDateError(undefined); // 入力途中でエラーをリセット
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) setNameError('名前は必須です');
    if (!date) setDateError('日付は必須です');
    if (inputValue && date) console.log('フォーム送信', inputValue, date);
  };

  const handleCheckboxToggle = () => setIsChecked((prev) => !prev);
  const handleAgreementToggle = () => setHasAgreed((prev) => !prev);

  const handleCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const [selectedOption, setSelectedOption] = useState<string>('option1');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value); // 値を取得して状態を更新
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ===============================
  // UI構成
  // ===============================
  return (
    <div className="bg-gray-100">
      {/* Yes/Noカードセクション */}
      <div className="container mx-auto px-5 py-10">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {data && (
          <YesNoCard
            answer={data.answer}
            image={data.image}
            onRetry={getYesNoData}
          />
        )}
      </div>

      {/* フォームセクション */}
      <div className="container mx-auto px-5 py-10">
        <form onSubmit={handleSubmit}>
          <Input
            label="名前"
            value={inputValue}
            onChange={handleChange}
            error={nameError}
            helperText="名前を入力してください"
          />
          <Input
            label="日付"
            type="date"
            value={date}
            onChange={handleDateChange}
            error={dateError}
            helperText="日付を選択してください"
          />
          <Button variant="primary" as="button" type="submit">
            送信
          </Button>
        </form>
      </div>

      {/* チェックボックスセクション */}
      <div className="container mx-auto px-5 py-10">
        <h2 className="mb-4 text-xl font-bold">チェックボックス例</h2>
        <Checkbox
          label="通知を受け取る"
          checked={isChecked}
          onChange={handleCheckboxToggle}
          error={
            !isChecked ? '通知を受け取るにはチェックが必要です' : undefined
          }
        />
        <Checkbox
          label="利用規約に同意する"
          checked={hasAgreed}
          onChange={handleAgreementToggle}
          error={!hasAgreed ? '利用規約への同意が必要です' : undefined}
        />
        <div className="mt-4">
          <p>通知を受け取る: {isChecked ? '有効' : '無効'}</p>
          <p>利用規約に同意: {hasAgreed ? '同意済み' : '未同意'}</p>
        </div>
      </div>

      {/* 複数選択セクション */}
      <div className="container mx-auto px-5 py-10">
        <h2 className="mb-4 text-xl font-bold">複数選択のチェックボックス</h2>
        {['React', 'Vue', 'Angular', 'Svelte'].map((option) => (
          <Checkbox
            key={option}
            label={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
        ))}
        <div className="mt-4">
          <p>選択された項目:</p>
          {selectedOptions.length > 0 ? (
            <ul>
              {selectedOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          ) : (
            <p>何も選択されていません。</p>
          )}
        </div>
      </div>

      {/* ラジオボタン */}
      <div className="container mx-auto px-5 py-10">
        <h1 className="mb-4 text-xl font-bold">オプションを選択してください</h1>
        <RadioButton
          name="example"
          options={[
            { label: 'オプション1', value: 'option1' },
            { label: 'オプション2', value: 'option2' },
            { label: 'オプション3', value: 'option3' },
          ]}
          selectedValue={selectedOption}
          onChange={handleRadioChange}
          error={selectedOption === '' ? '選択してください' : undefined}
        />
        <p className="mt-4">
          選択された値: <strong>{selectedOption}</strong>
        </p>
      </div>

      {/* モーダルセクション */}
      <div className="container mx-auto px-5 py-10">
        <Button onClick={openModal} variant="primary" as="button">
          モーダルを開く
        </Button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold">モーダルの内容</h2>
          <Button onClick={closeModal} variant="secondary" as="button">
            閉じる
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default Sample;
