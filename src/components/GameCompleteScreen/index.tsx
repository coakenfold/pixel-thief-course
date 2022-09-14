import { Heading } from "../Heading";
import { Image, ImageSizeType } from "../Image";
import { MenuScreen } from "../MenuScreen";
import { Button } from "../Button";
import treasurePng from "../../images/treasure.png";
interface PropsType {
    onClickGameHomeButton: () => void;
}
export const GameCompleteScreen = ({ onClickGameHomeButton }: PropsType) => (
    <MenuScreen>
        <Heading>Quest Complete!</Heading>
        <Image
            src={treasurePng}
            alt="treasure chest"
            size={ImageSizeType.Large}
        />
        <Button onClick={onClickGameHomeButton}>Go Home</Button>
    </MenuScreen>
);
