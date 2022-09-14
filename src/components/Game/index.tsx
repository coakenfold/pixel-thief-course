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
        return (
            <>
                <p>State: Playing</p>
                <Button
                    onClick={() => {
                        send("PLAYER_DIED");
                    }}
                >
                    PLAYER_DIED
                </Button>
                <Button
                    onClick={() => {
                        send("PLAYER_GOT_TREASURE");
                    }}
                >
                    PLAYER_GOT_TREASURE
                </Button>
            </>
        );
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
