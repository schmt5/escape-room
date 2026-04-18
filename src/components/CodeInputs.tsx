import React from 'react';

interface CodeInputsProps {
  inputs: string[];
  onInputChange: (index: number, value: string) => void;
  onKeyDown: (index: number, e: React.KeyboardEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

export default function CodeInputs({
  inputs,
  onInputChange,
  onKeyDown,
  isDisabled,
}: CodeInputsProps) {
  return (
    <>
      <span className="inputs-label">Enter Code</span>
      <div className="code-inputs">
        {inputs.map((value, index) => (
          <input
            key={index}
            id={`code-input-${index}`}
            type="text"
            className="code-input"
            value={value}
            onChange={(e) => onInputChange(index, e.target.value)}
            onKeyDown={(e) => onKeyDown(index, e)}
            disabled={isDisabled}
            maxLength={1}
            inputMode="numeric"
            autoComplete="off"
            aria-label={`Code digit ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
