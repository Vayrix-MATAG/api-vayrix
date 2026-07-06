import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { NotificationType } from '@prisma/client';
import { SearchPaginationQueryDto } from '../../common/dto/search-pagination-query.dto';

export class NotificationsQueryDto extends SearchPaginationQueryDto {
  @ApiPropertyOptional({ enum: NotificationType }) @IsOptional() @IsEnum(NotificationType) type?: NotificationType;
  @ApiPropertyOptional() @IsOptional() @IsBoolean() isRead?: boolean;
}
