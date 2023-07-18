import { socketMessageStore } from "./socket";
import {derived} from "svelte/store";

export const updateState = derived(socketMessageStore, ($msg, set) => {
    if (!$msg) return;

    if ($msg.event === "game:update_state") {
        set($msg.data);
    }
});

export const targetPlayer = derived(updateState, ($update, set) => {
    if (!$update) return;

    if ($update.game.hasTarget) {
        const player = $update.players[$update.game.target];
        set(player);
    } else {
        set({});
    }
});