import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { space } from "../../styles/space";
import { Image, ImageSizeType } from ".";
import thiefGif from "../../images/thief.gif";
export default {
    title: `Small Components/Image`,
} as Meta;

const Layout = styled.div`
    display: flex;
    > *:not(:first-child) {
        margin-left: ${space(4)};
    }
`;

export const index = () => (
    <Layout>
        <Image src={thiefGif} alt="thief" size={ImageSizeType.Large} />
        <Image src={thiefGif} alt="thief" />
        <Image src={thiefGif} alt="thief" size={ImageSizeType.Small} />
    </Layout>
);
