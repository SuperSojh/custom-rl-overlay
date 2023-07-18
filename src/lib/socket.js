import {writable} from "svelte/store";

export const socket = new WebSocket("ws://localhost:49122");

socket.onopen = () => {
    console.log("Connected to SOS.");
};

socket.onerror = (err) => {
    console.error("WebSocket error", err);
};

export const socketMessageStore = writable({
    event: "default",
    data: {},
});

socket.onmessage = ({ data }) => {
    const parsed = JSON.parse(data);
    socketMessageStore.set(parsed);
};