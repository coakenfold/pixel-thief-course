import { Meta } from "@storybook/react/types-6-0";
import { LevelBackgroundImage } from ".";
import level1BackgroundPng from "../../images/level1Background.png";
export default {
    title: "Small Components/LevelBackgroundImage",
} as Meta;

export const index = () => (
    <LevelBackgroundImage src={level1BackgroundPng} alt="A dungeon room" />
);
