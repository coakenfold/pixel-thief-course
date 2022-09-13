import { Heading } from "../Heading";
import { Image, ImageSizeType } from "../Image";
import { MenuScreen } from "../MenuScreen";
import skullPng from "../../images/skull.png";
import { Button } from "../Button";
interface PropsType {
    onClickRestartGameButton: () => void;
}
export const GameOverScreen = ({ onClickRestartGameButton }: PropsType) => (
    <MenuScreen>
        <Heading>Game Over</Heading>
        <Image src={skullPng} alt="skull" size={ImageSizeType.Large} />
        <Button onClick={onClickRestartGameButton}>Restart Game</Button>
    </MenuScreen>
);
