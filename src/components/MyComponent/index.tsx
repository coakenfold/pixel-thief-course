import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background: ${(props) => props.theme.color.black};
    color: ${(props) => props.theme.color.white};
`;
export const MyComponent = () => {
    return <Div>MyComponent</Div>;
};
