import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from './common/decorators/public.decorator';
import { ApiPublicErrors, ApiWrappedOkResponse } from './common/swagger/swagger.helpers';
import { ApiProperty } from '@nestjs/swagger';

class HealthDataEntity {
  @ApiProperty({ example: 'ok' })
  status: string;

  @ApiProperty({ example: 'VAYRIX Backend' })
  service: string;
}

@ApiTags('Health')
@Controller()
export class AppController {
  @Public()
  @Get('health')
  @ApiOperation({ summary: 'Vérifier que l\'API est en ligne' })
  @ApiWrappedOkResponse(HealthDataEntity, 'API opérationnelle')
  @ApiPublicErrors()
  getHealth() {
    return { status: 'ok', service: 'VAYRIX Backend' };
  }
}
