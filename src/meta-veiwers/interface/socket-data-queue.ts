import { ClientMessage } from "./socket-data";

export interface RoomDataQueue {
    [roomId: string]: Array<ClientMessage>;
}