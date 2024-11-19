// Sample/hooks/useYesNo.ts
import { useEffect, useState } from 'react';

import { fetchYesNo } from '../api/yesNoApi';

export const useYesNo = () => {
  const [data, setData] = useState<{ answer: string; image: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getYesNoData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchYesNo();
      setData(result);
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getYesNoData();
  }, []);

  return { data, loading, error, getYesNoData };
};
