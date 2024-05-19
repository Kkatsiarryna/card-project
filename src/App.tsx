import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StyledImg} from "./components/Img.styled";
import styled from "styled-components";
import picture from "./img/Rectangle.svg"
import {StyledHeadLineText} from "./components/HeadLineText.styled";
import {StyledDescription} from "./components/Description.styled";
import {StyledDescriptionText} from "./components/DescriptionText.styled";
import {StyledHeadline} from "./components/Headline.styled";
import {StyledButton} from "./components/Button.styled";
import {mytheme} from "./styles/Theme.styled";

function App() {
  return (
    <div className="App">
        <Box>
            <StyledImg src={picture} alt="card"/>
            <StyledHeadline> <StyledHeadLineText>Headline</StyledHeadLineText> </StyledHeadline>
            <StyledDescription> <StyledDescriptionText>Faucibus. Faucibus. Sit sit sapien sit
                tempusrisu ut. Sit molestie ornare in venen.</StyledDescriptionText></StyledDescription>

            <StyledButton btnType = {"primary"} color = {mytheme.colors.primary} >See more</StyledButton>
            <StyledButton btnType = {"outlined"} color = {mytheme.colors.primary}>Save</StyledButton>
        </Box>

    </div>
  );
}

const Box = styled.div`
    width: 300px;
    height: 350px;
    margin-top: 317px;
    margin-left: 409px;
    padding-top: 10px;
   
  
    border-radius: 15px 15px 15px 15px;
    background-color: rgba(41, 40, 40, 0.13);
`
export default App;
