export interface ClientMessage {
    type: string;
    timestamp: number;
    data: any;
    clientId: string;
}

export interface BroadcastData {
    roomId: string;
    timestamp: number;
    data: ClientMessage[];
}
