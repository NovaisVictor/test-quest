import { Module } from '@nestjs/common'
import { ClientController } from './client.controller'
import { ClientService } from './client.service'
import { DatabaseModule } from 'database/database.module'
import { clientProviders } from './client.providers'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [ClientController],
  providers: [ClientService, ...clientProviders],
})
export class ClientModule {}
