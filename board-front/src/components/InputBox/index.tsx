import React, { ChangeEvent, Dispatch, forwardRef, SetStateAction } from 'react';
import './style.css';

interface Props {
  label: string;
  type: 'text' | 'password';
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  error: boolean;

  icon?: string;
  onButtonClick?: () => void;
}

// component: Input Box 컴포넌트
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

  // state
  const { label, type, error, placeholder, value, icon } = props;
  const { setValue, onButtonClick } = props;

  // evnet: input 값 변경 event
  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  }

  return (
    <div className='inputbox'>
      <div className='inputbox-label'>{label}</div>
      <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
        <input className='input' type={type} placeholder={placeholder} value={value} onChange={onInputChangeHandler} />
        {onButtonClick !== undefined && (
          <div className='icon-button'>
            {icon !== undefined && (
              <div className={`icon ${icon}`}></div>
            )}
          </div>
        )}
      </div>
      <div className='inputbox-message'>{'비밀번호는 8자 이상 입력해주세요.'}</div>
    </div>
  );
});
