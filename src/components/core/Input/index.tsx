import React, { ReactElement } from 'react';

import * as Styled from './styles';

interface InputProps {
  icon?: ReactElement;
  label: string;
  type?: string;
  name: string;
  value?: string;
  placeholder?: string;
  error?: boolean;
  onBlur?: () => void;
  onChange?: () => void;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  onBlur,
  error,
  onChange,
  defaultValue,
  required,
  disabled,
  icon
}: InputProps): ReactElement => {
  return (
    <Styled.Wrapper>
      <div className="form__group">
        <label className="form__label" htmlFor={name}>
          {label} {required && <span>*</span>}
        </label>

        <input
          className="form__control"
          type={type}
          id={name}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder || ' '}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
        />
      </div>

      <div className="icon">{icon}</div>
      {error && <p className="error">{error}</p>}
    </Styled.Wrapper>
  );
};

export default Input;
