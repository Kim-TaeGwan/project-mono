import { Select } from '@repo/ui';

export default function SearchForm() {
  const options = [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
  ];

  const handleSelectChange = (value: string[]) => {
    console.log('Selected value:', value);
  };

  return (
    <div>
      <Select options={options} onChange={handleSelectChange} />
    </div>
  );
}
