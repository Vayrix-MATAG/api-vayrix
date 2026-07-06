import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Logger, UseGuards } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'realtime', cors: { origin: '*' } })
export class RealtimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private readonly logger = new Logger(RealtimeGateway.name);

  handleConnection(client: Socket): void { this.logger.log(`Socket connecté: ${client.id}`); }
  handleDisconnect(client: Socket): void { this.logger.log(`Socket déconnecté: ${client.id}`); }

  @SubscribeMessage('ride:join')
  handleJoinRide(@ConnectedSocket() client: Socket, @MessageBody() payload: { rideId: string }) {
    client.join(`ride:${payload.rideId}`);
    return { event: 'ride:joined', data: payload };
  }

  @SubscribeMessage('driver:location')
  handleDriverLocation(@MessageBody() payload: { rideId: string; lat: number; lng: number; heading?: number }) {
    this.server.to(`ride:${payload.rideId}`).emit('driver:location:update', payload);
    return { event: 'driver:location:ack', data: payload };
  }

  emitRideEvent(rideId: string, event: string, data: unknown): void { this.server.to(`ride:${rideId}`).emit(event, data); }
  broadcastNotification(userId: string, data: unknown): void { this.server.emit(`notification:${userId}`, data); }
}
