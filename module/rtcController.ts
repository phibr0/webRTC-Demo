export default class RTCController {
    private localConnection: RTCPeerConnection;
    private sdp: RTCSessionDescription;
    private debug: boolean;

    public channel: RTCDataChannel;
    public onMessage: (message: string) => void;
    public onOpen: () => void;
    public onClose: () => void;

    constructor(config: RTCConfiguration, connectionType: 'offer' | 'answer', debug = false) {
        this.localConnection = new RTCPeerConnection(config);
        this.debug = debug;

        if(connectionType === 'offer') {
            this.channel = this.localConnection.createDataChannel("channel");
            this.setupMethods();
        } else {
            this.localConnection.ondatachannel = (event) => {
                this.channel = event.channel;
                this.setupMethods();
            };
        }

        this.localConnection.onicecandidate = () => {
            this.sdp = this.localConnection.localDescription;
        };
    }

    private setupMethods(): void {
          this.channel.onmessage = (event) => {
            this.onMessage?.(event.data);
            this.log('Received message.')
          };
          this.channel.onopen = () => {
            this.onOpen?.();
            this.log('Channel opened.')
          };
          this.channel.onclose = () => {
            this.onClose?.();
            this.log('Received closed.')
          };
    }

    public async generateOffer(timeout: number): Promise<RTCSessionDescription> {
        await this.localConnection
        .createOffer()
        .then((o) => this.localConnection.setLocalDescription(o));
        await this.delay(timeout);
        return this.sdp;
    }

    public async generateAnswer(timeout: number): Promise<RTCSessionDescription> {
        await this.localConnection
        .createAnswer()
        .then((o) => this.localConnection.setLocalDescription(o));
        await this.delay(timeout);
        return this.sdp;
    }

    public async setRemoteDescription(sdp: RTCSessionDescriptionInit): Promise<void> {
        await this.localConnection.setRemoteDescription(sdp);
    }

    private delay(timeout: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    private log(message: string): void {
        if(this.debug) console.log(message);
    }
}