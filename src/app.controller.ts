import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeController } from '@nestjs/swagger';
import { FastifyRequest } from 'fastify';

@Controller()
@ApiExcludeController()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'online';
  }

  @Post()
  dispatchEventV1(
    @Body() body: unknown,
    @Req() request: FastifyRequest,
  ): unknown {
    return this.appService.dispatchEvent(body, request);
  }
}
