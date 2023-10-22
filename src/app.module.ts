import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { ClientModule } from './client/client.module'

@Module({
  imports: [ClientModule, HttpModule],
  //   controllers: [ClientController],
  //   providers: [ClientService, AddressService],
})
export class AppModule {}
