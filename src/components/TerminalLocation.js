import { Link } from "react-router-dom";
import styled from "styled-components";
import { topbarBackground, terminalBarPrimaryBlue, terminalBarSecondaryBlue } from "../resources/colors";

const TerminalLocation = (props) => {

    const paths = [
        { title: 'Blog@galdo.dev', uri: '/', color: terminalBarPrimaryBlue},
        { title: '~', uri: '/', color: terminalBarSecondaryBlue},
        { title: 'asdsadasd', uri: '/', color: '#00ff00'},
        { title: 'asdsadasd', uri: '/', color: '#ffff00'},
    ];

    return <>
        <TerminalBar>
            {paths.map(path =>
                <Path color={path.color}>
                    <Link to={path.uri}>{path.title}</Link>
                </Path>
            )}
        </TerminalBar>
    </>;
}

const TerminalBar = styled.section`
    font-size: 1.8rem;
    color: white;

    display: flex;


    > div:first-child{
        padding-left: calc(50px + 5%);
    }

`;

const Path = styled.div`
    background-color: ${props => props.color};
    padding: 0 25px 0 50px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;

    ::after{
        content: '';
        display: block;
        border: 25px solid transparent;
        border-left: 25px solid ${props => props.color};
        height: 50px;
        width: 50px;
        position: absolute;
        top: 0;
        right: calc(0px - 50px);
        z-index: 2;
    }

    a{
        color: inherit;
    }
`;



export default TerminalLocation;