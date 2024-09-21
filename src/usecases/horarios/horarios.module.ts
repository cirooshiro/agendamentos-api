import { Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';
import { IdentityRepository } from '../../infrastructure/repositories/identity/identity.repository';
import { HorarioRepository } from '../../infrastructure/repositories/horario/horario.repository';
import { HorarioFactory } from '../../infrastructure/factories/horario.factory';
import { CommonsService } from '../../infrastructure/services/commons/commons.service';

@Module({
  controllers: [HorariosController],
  providers: [
    IdentityRepository,
    HorariosService,
    HorarioRepository,
    HorarioFactory,
    CommonsService,
  ],
})
export class HorariosModule {}
