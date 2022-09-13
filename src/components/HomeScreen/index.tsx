import { Heading } from "../Heading";
import { Image, ImageSizeType } from "../Image";
import { MenuScreen } from "../MenuScreen";
import thiefGif from "../../images/thief.gif";
import { Button } from "../Button";
interface PropsType {
    onClickStartGameButton: () => void;
}
export const HomeScreen = ({ onClickStartGameButton }: PropsType) => (
    <MenuScreen>
        <Heading>Pixel Thief</Heading>
        <Image src={thiefGif} alt="thief" size={ImageSizeType.Large} />
        <Button onClick={onClickStartGameButton}>Start Game</Button>
    </MenuScreen>
);
