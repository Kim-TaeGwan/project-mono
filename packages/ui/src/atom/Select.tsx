import { useState } from 'react';
import styled from '@emotion/styled';

const SelectBox = styled.div`
  position: relative;
  //width: 360px;
  height: 56px;
  line-height: 56px;
  padding: 0 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray['60']};
  align-self: center;
  cursor: pointer;
  &::before {
    content: '⌵';
    position: absolute;
    top: -6px; // TODO arrow icon 넣기 전까지 임시
    right: 16px;
    color: #49c181;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.label['medium']};
  text-align: center;
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 56px;
  left: 0;
  width: 100%;
  overflow: hidden;
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;

const Option = styled.li`
  height: 56px;
  font-size: ${({ theme }) => theme.fontSizes.label['large']};
  padding: 0 16px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

interface IOption {
  value: string;
  label: string;
}

interface ICustomSelectProps {
  options: IOption[];
  isMulti?: boolean;
  onChange: (value: string[]) => void;
  placeholder?: string;
}

const Select = ({
  options,
  isMulti = false,
  onChange,
  placeholder,
}: ICustomSelectProps) => {
  const [currentValue, setCurrentValue] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions(prev => !prev);
  };

  const handleSelectValueChange = (selectedValue: string) => () => {
    setCurrentValue(prev => {
      let newValue;
      if (isMulti) {
        newValue = prev.includes(selectedValue)
          ? prev.filter(value => value !== selectedValue)
          : [...prev, selectedValue];
      } else {
        newValue = [selectedValue];
      }
      onChange(newValue);
      return newValue;
    });
  };

  return (
    <SelectBox onClick={handleShowOptions}>
      <Label>{currentValue.join(', ') || (placeholder ?? '선택')}</Label>
      {showOptions && (
        <SelectOptions>
          {Array.isArray(options) &&
            options.map(data => (
              <Option
                key={data.value}
                value={data.value}
                onClick={handleSelectValueChange(data.value)}
              >
                {data.label}
              </Option>
            ))}
        </SelectOptions>
      )}
    </SelectBox>
  );
};

export { Select };
