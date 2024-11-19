// Sample/api/yesnoAPI.ts

export const fetchYesNo = async () => {
  const response = await fetch('https://yesno.wtf/api');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return await response.json();
};
