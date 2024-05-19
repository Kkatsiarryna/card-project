import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    btnType?: "primary" | "outlined"
}

export const StyledButton = styled.button<StyledBtnPropsType>`
    border: none; 
    width: 86px;
    height: 30px;
    margin-top: 22px;

    margin-right: 20px;
    border-radius: 5px;

    display: inline-block;
    
    font-size: 11px;
    font-weight: bold;
    
 
    
    ${props => props.btnType === "primary" && css<StyledBtnPropsType> `
        background-color: ${props => props.color}; 
        color: #ffffff;
    `}
    
    ${props => props.btnType === "outlined" && css<StyledBtnPropsType> `
        border: 2px solid ${props => props.color}; 
        color: ${props => props.color};
    `}
`