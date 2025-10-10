import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { MetaVeiwersService } from './meta-veiwers.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(Number(process.env.SOCKET_PORT) || 4100, {
  cors: {
    origin: '*',
  },
  path: '/meta-viewers',
})
export class MetaVeiwersGateway {
  constructor(
    private readonly metaVeiwersService: MetaVeiwersService
  ) { }

  afterInit(server: Server) {
    this.metaVeiwersService.afterInit(server);
  }

  handleDisconnect(client: Socket) {
    this.metaVeiwersService.handleDisconnect(client);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.metaVeiwersService.handleConnection(client, ...args);
  }

  // 서버 종료 시 정리
  onModuleDestroy() {
    this.metaVeiwersService.onModuleDestroy();
  }

  /**
   * 클라이언트로부터 실시간 데이터 수신
   * 방별 큐에 저장하여 12ms마다 브로드캐스트
   * @emit 'roomBroadcast'
   */
  @SubscribeMessage('boradcastRoomData')
  handleRoomData(
    @MessageBody() data: { type: string; data: any },
    @ConnectedSocket() client: Socket,
  ) {
    return this.metaVeiwersService.handleRoomData(data, client);
  }

  // 특정 소켓 정보 조회 메시지 핸들러
  @SubscribeMessage('getSocketInfo')
  getSocketInfo(@MessageBody() socketId: string) {
    return this.metaVeiwersService.getSocketInfo(socketId);
  }

  // 모든 연결된 클라이언트 목록 반환 메시지 핸들러
  @SubscribeMessage('getConnectedClients')
  getConnectedClients() {
    return this.metaVeiwersService.getConnectedClients();
  }

  // ===== 방(Room) 관리 기능 =====

  /**
   * 방입장
   * @emit 'userJoined'
   */
  @SubscribeMessage('joinRoom')
  joinRoom(
    @MessageBody() data: { roomId: string },
    @ConnectedSocket() client: Socket,
  ) {
    return this.metaVeiwersService.joinRoom(data, client);
  }

  /**
   * 방나가기
   * @emit 'userLeft'
   */
  @SubscribeMessage('leaveRoom')
  leaveRoom(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    return this.metaVeiwersService.leaveRoom(data, client);
  }

  // 현재 방 정보 조회
  @SubscribeMessage('getRoomInfo')
  getRoomInfo(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    return this.metaVeiwersService.getRoomInfo(client);
  }

  // 방 목록 조회
  @SubscribeMessage('getRoomList')
  getRoomList() {
    return this.metaVeiwersService.getRoomList();
  }

  // 같은 방 클라이언트들에게만 메시지 전송
  @SubscribeMessage('sendToRoom')
  sendToRoom(
    @MessageBody() data: { message: string },
    @ConnectedSocket() client: Socket,
  ) {
    return this.metaVeiwersService.sendToRoom(data, client);
  }

}
