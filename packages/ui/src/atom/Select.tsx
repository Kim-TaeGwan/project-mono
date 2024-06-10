import React, { useState } from 'react';
import styled from '@emotion/styled';

const SelectBox = styled.div`
  position: relative;
  width: 200px;
  padding: 8px;
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &::before {
    content: '⌵';
    position: absolute;
    top: 1px;
    right: 8px;
    color: #49c181;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 42px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 90px;
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  isMulti?: boolean;
  onChange: (value: string[]) => void;
}

const Select: React.FC<CustomSelectProps> = ({
  options,
  isMulti = false,
  onChange,
}) => {
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
      <Label>{currentValue.join(', ') || 'Select an option'}</Label>
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
