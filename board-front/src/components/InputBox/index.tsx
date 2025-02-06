import React, { ChangeEvent, Dispatch, forwardRef, SetStateAction, KeyboardEvent } from 'react';
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

  message?: string;

  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

// component: Input Box 컴포넌트
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {

  // state
  const { label, type, error, placeholder, value, icon, message } = props;
  const { setValue, onButtonClick, onKeyUp } = props;

  // evnet: input 값 변경 event
  const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  }

  // event: 
  const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!onKeyUp) return;
    onKeyUp(event);
  }

  return (
    <div className='inputbox'>
      <div className='inputbox-label'>{label}</div>
      <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
        <input ref={ref} className='input' type={type} placeholder={placeholder} value={value}
          onChange={onInputChangeHandler} onKeyUp={onKeyUp} />
        {onButtonClick !== undefined && (
          <div className='icon-button'>
            {icon !== undefined && (
              <div className={`icon ${icon}`}></div>
            )}
          </div>
        )}
      </div>
      {message !== undefined && <div className='inputbox-message'>{message}</div>
      }
    </div>
  );
});
