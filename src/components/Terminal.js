import { Link } from "react-router-dom";
import styled from "styled-components";
import { topbarBackground } from "../resources/colors";

const Terminal = ({ children }) => {

    console.log('oi');
    return <>
        <TopBar>
            <TitleBar>
                <h1>
                    <Link to={"/"}>blog@galdo.dev: ~</Link>
                </h1>
                <Buttons>
                    <button></button>
                    <button></button>
                    <button></button>
                </Buttons>
            </TitleBar>
            <Menu>
                <ul>
                    <li>Home</li>
                    <li>Categorias</li>
                </ul>
            </Menu>
        </TopBar>
        {children}
    </>
}

const TopBar = styled.header`
    font-size: 0.85rem;
    font-family: Roboto, Arial, sans-serif; 
    color: white;
    background-color: ${topbarBackground};
`;

const TitleBar = styled.div`
    font-size: inherit;
    font-family: inherit;
    display: flex;
    padding: 5px 10px 5px 80px;
    border-bottom: 1px solid #161616;

    h1{
        font-family: inherit;
        font-size: inherit;
        font-weight: 400;
        text-align: center;
        margin: 0;
        flex-grow: 1;

        a{
            color: inherit;
            text-decoration: none;
        }
    }
`;

const Buttons = styled.div`
    width: 70px;
    display: flex;
    justify-content: space-between;

    button{
        width: 18px;
        height: 18px;
        border: 0;
        border-radius 100%;
        background-color: gray;
    }
`;

const Menu = styled.nav`
    font-size: inherit;
    font-family: inherit;
    display: flex;
    padding: 5px 0;

    ul{
        padding: 0;
        display: flex;
        list-style: none;
        margin: 0;

        li{
            padding: 0 30px;
        }
    }
`;

export default Terminal;