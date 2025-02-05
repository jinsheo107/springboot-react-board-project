import React, { ChangeEvent, useState, KeyboardEvent, useRef, useEffect } from 'react';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { MAIN_PATH, SEARCH_PATH } from 'constant';

export default function Header() {

  const navigate = useNavigate();

  //& event: logo 클릭 시 이동 이벤트
  const onLogoClickHandler = () => {
    navigate(MAIN_PATH());
  }

  // 검색 버튼 component
  // 's'earchButton 소문자 사용 시 오류 발생
  // => 첫 글자가 대문자 => 사용자 정의 컴포넌트로 인식 => React Component로 인식
  // => 첫 글자가 소문자 => 기본 HTML 태그로 인식 => HTML 태그로 인식
  const SearchButton = () => {

    //~ state: 검색 버튼 상태
    const [status, setStatus] = useState<boolean>(false);
    //~ state: 검색어 상태
    const [word, setWord] = useState<string>('');
    //~ state: 검색어 버튼 요소 참조 상태
    const searchButtonRef = useRef<HTMLDivElement | null>(null);
    //~ state: 검색어 path variable 상태
    const { searchWord } = useParams();

    //& event: 검색어 변경 이벤트
    const onSearchWordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setWord(value);
    }

    //& event: 검색 아이콘 클릭 이벤트
    const onSearchButtonClickHandler = () => {
      if (!status) {
        setStatus(!status);
        return;
      }
      // 검색어가 입력된 경우에만 페이지 이동
      if (word !== "") {
        navigate(SEARCH_PATH(word));
      }
    }

    //& event: 검색창에서 enter시 이벤트
    const onSearchEnterKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        if (!status) {
          setStatus(!status);
          return;
        }
        // 검색어가 입력된 경우에만 페이지 이동
        if (word !== "") {
          navigate(SEARCH_PATH(word));
        }

        if (!searchButtonRef.current) return;
        searchButtonRef.current.click();
      }
    }

    //* effect: 검색어 path variable 변경 될 때마다 실행
    useEffect(() => {
      if (searchWord) {
        setWord(searchWord);
        setStatus(true);
      };
    }, [searchWord]);


    if (!status)
      // 클릭 false
      return (
        <div className='icon-button' onClick={onSearchButtonClickHandler}>
          <div className='icon search-light-icon'></div>
        </div>
      );
    // 클릭 true
    return (
      <div className='header-search-input-box'>
        <input className='header-search-input' type="text" placeholder='검색어를 입력해주세요.'
          value={word} onChange={onSearchWordChangeHandler} onKeyUp={onSearchEnterKeyUpHandler} />
        <div ref={searchButtonRef} className='icon-button' onClick={onSearchButtonClickHandler}>
          <div className='icon search-light-icon'></div>
        </div>
      </div>
    );
  };

  // component: 

  return (
    <div id='header'>
      <div className='header-container'>
        <div className='header-left-box' onClick={onLogoClickHandler}>
          <div className='icon-box'>
            <div className='icon logo-dark-icon'></div>
          </div>
          <div className='header-logo'>{'Jin\'s Board'}</div>
        </div>
        <div className='header-right-box'>
          <SearchButton />
        </div>
      </div>
    </div >
  )
}
