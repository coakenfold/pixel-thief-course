import { useMachine } from "@xstate/react";
import { gameMachine } from "../../machines/gameMachine";
import { Button } from "../Button";
import { GameCompleteScreen } from "../GameCompleteScreen";
import { GameOverScreen } from "../GameOverScreen";
import { HomeScreen } from "../HomeScreen";
export const Game = () => {
    const [state, send] = useMachine(gameMachine);

    if (state.matches("home")) {
        return (
            <HomeScreen
                onClickStartGameButton={() => {
                    send("START_BUTTON_CLICKED");
                }}
            />
        );
    }
    if (state.matches("playing")) {
        if (state.matches("playing.level1")) {
            return (
                <>
                    <p>State: Playing.level1</p>
                    <Button
                        onClick={() => {
                            send("PLAYER_WALKED_THROUGH_DOOR");
                        }}
                    >
                        PLAYER_WALKED_THROUGH_DOOR
                    </Button>
                    <Button
                        onClick={() => {
                            send("PLAYER_DIED");
                        }}
                    >
                        PLAYER_DIED
                    </Button>
                </>
            );
        }

        if (state.matches("playing.level2")) {
            return (
                <>
                    <p>State: Playing.level2</p>
                    <Button
                        onClick={() => {
                            send("PLAYER_WALKED_THROUGH_DOOR");
                        }}
                    >
                        PLAYER_WALKED_THROUGH_DOOR
                    </Button>
                    <Button
                        onClick={() => {
                            send("PLAYER_DIED");
                        }}
                    >
                        PLAYER_DIED
                    </Button>
                </>
            );
        }

        if (state.matches("playing.level3")) {
            return (
                <>
                    <p>State: Playing.level3</p>
                    <Button
                        onClick={() => {
                            send("PLAYER_GOT_TREASURE");
                        }}
                    >
                        PLAYER_GOT_TREASURE
                    </Button>
                    <Button
                        onClick={() => {
                            send("PLAYER_DIED");
                        }}
                    >
                        PLAYER_DIED
                    </Button>
                </>
            );
        }
    }
    if (state.matches("gameOver")) {
        return (
            <GameOverScreen
                onClickRestartGameButton={() => {
                    send("RESTART_BUTTON_CLICKED");
                }}
            />
        );
    }
    if (state.matches("gameComplete")) {
        return (
            <GameCompleteScreen
                onClickGameHomeButton={() => {
                    send("HOME_BUTTON_CLICKED");
                }}
            />
        );
    }

    throw new Error(`Unknown game state: ${state.value}`);
};
