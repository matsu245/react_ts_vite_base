// Sample/components/YesNoCard.tsx
import React from 'react';

import Button from '@/components/UI/Button';

interface YesNoCardProps {
  answer: string;
  image: string;
  onRetry: () => void;
}

const YesNoCard: React.FC<YesNoCardProps> = ({ answer, image, onRetry }) => {
  return (
    <div className="card">
      <p>Answer: {answer}</p>
      <img src={image} alt={answer} className="h-48 w-48" />
      <Button onClick={onRetry} variant="primary" as="button">
        Retry
      </Button>
    </div>
  );
};

export default YesNoCard;
