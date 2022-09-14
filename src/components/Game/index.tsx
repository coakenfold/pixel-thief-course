import { useMachine } from "@xstate/react";
import { gameMachine } from "../../machines/gameMachine";
import { Button } from "../Button";

export const Game = () => {
    const [state, send] = useMachine(gameMachine);

    if (state.matches("home")) {
        return (
            <>
                <p>State: Home</p>
                <Button
                    onClick={() => {
                        send("START_BUTTON_CLICKED");
                    }}
                >
                    START_BUTTON_CLICKED
                </Button>
            </>
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
            <>
                <p>State: Game Over</p>
                <Button
                    onClick={() => {
                        send("RESTART_BUTTON_CLICKED");
                    }}
                >
                    RESTART_BUTTON_CLICKED
                </Button>
            </>
        );
    }
    if (state.matches("gameComplete")) {
        return (
            <>
                <p>State: Game Complete</p>
                <Button
                    onClick={() => {
                        send("HOME_BUTTON_CLICKED");
                    }}
                >
                    HOME_BUTTON_CLICKED
                </Button>
            </>
        );
    }

    throw new Error(`Unknown game state: ${state.value}`);
};
