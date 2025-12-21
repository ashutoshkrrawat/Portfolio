import React from 'react';
import styled from 'styled-components';

const BackToTopButton = () => {
  const scrollToTop = () => {
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledWrapper>
      <button className="button" onClick={scrollToTop}>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000">
          <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    height: 50px;
    width: 50px;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid #0c0c0c;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    position: relative;
    transition: all 0.5s;
    justify-content: center;
    align-items: center;
  }
  .button::after {
    content: "Top";
    position: absolute;
    width: auto;
    background-color: white;
    font-size: 1em;
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 25px;
    top: -50px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
    transform: scale(0);
  }
  
  .button:hover {
    transform: translateY(-3px);
    background-color: #0c0c0c;
  }
  
`;

export default BackToTopButton;
