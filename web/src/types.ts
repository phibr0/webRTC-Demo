export interface Message {
    type: "incoming" | "outgoing";
    data: string;
}

export type AppState = 'offering' | 'scanning' | 'chatting';