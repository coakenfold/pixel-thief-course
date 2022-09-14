import { Meta } from "@storybook/react/types-6-0";
import { Game } from ".";
import {
    fastForwardToLevel1Events,
    fastForwardToLevel2Events,
    fastForwardToLevel3Events,
    fastForwardToGameOverEvents,
    fastForwardToGameCompleteEvents,
} from "./fastForwardEvents";
export default {
    title: "Game",
} as Meta;

export const index = () => <Game />;

export const Level1 = () => (
    <Game fastForwardEvents={fastForwardToLevel1Events} />
);
export const Level2 = () => (
    <Game fastForwardEvents={fastForwardToLevel2Events} />
);
export const Level3 = () => (
    <Game fastForwardEvents={fastForwardToLevel3Events} />
);
export const GameOver = () => (
    <Game fastForwardEvents={fastForwardToGameOverEvents} />
);
export const GameComplete = () => (
    <Game fastForwardEvents={fastForwardToGameCompleteEvents} />
);
