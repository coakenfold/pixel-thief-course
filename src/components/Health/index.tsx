import styled from "styled-components";
import { space } from "../../styles/space";
import { Image, ImageSizeType } from "../Image";
import heartPng from "../../images/heart.png";

const Layout = styled.div`
    display: flex;
    > :not(:first-child) {
        margin-left: ${space(2)};
    }
`;

interface PropsType {
    health: number;
}
export const Health = ({ health }: PropsType) => (
    <Layout>
        {Array(health)
            .fill(null)
            .map((_, index) => (
                <Image
                    src={heartPng}
                    alt={`heart ${index + 1}`}
                    key={index}
                    size={ImageSizeType.Small}
                />
            ))}
    </Layout>
);
