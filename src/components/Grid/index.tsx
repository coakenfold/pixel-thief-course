import styled from "styled-components";
import { grid } from "../../utils/gridCoordinates";
import { GRID_COLS, GRID_SQUARE_SIZE, GRID_ROWS } from "../../constants";
import { ReactNode } from "react";

const Layout = styled.section`
    width: ${GRID_COLS * GRID_SQUARE_SIZE}px;
    height: ${GRID_ROWS * GRID_SQUARE_SIZE}px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
interface PropsType {
    x: number;
    y: number;
}
export const GridSquare = styled.div<PropsType>`
    width: ${GRID_SQUARE_SIZE}px;
    height: ${GRID_SQUARE_SIZE}px;

    position: absolute;
    top: ${(props) => props.y * GRID_SQUARE_SIZE}px;
    left: ${(props) => props.x * GRID_SQUARE_SIZE}px;
`;

export const Grid = ({ children }: { children?: ReactNode }) => (
    <Layout>
        {grid.map(([x, y]) => (
            <GridSquare x={x} y={y} key={`${x}.${y}`} />
        ))}
        {children}
    </Layout>
);
