import {
  Body,
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common'
import { RequestClientDto } from './dto/request-client.dto'
import { ClientService } from './client.service'

@Controller('api/v1/clients')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get(':id')
  @HttpCode(200)
  async getClientById(@Param('id') id: string) {
    const client = await this.clientService.findById(id)
    if (client) {
      return client
    } else {
      // Cliente não encontrado, você pode retornar um erro 404 ou uma mensagem apropriada.
      throw new NotFoundException('Client not found')
    }
  }

  @Get()
  @HttpCode(200)
  async getAllClient() {
    const client = await this.clientService.findAll()
    if (client) {
      return client
    } else {
      throw new NotFoundException('Clients not found')
    }
  }

  @Post()
  @HttpCode(201)
  async create(@Body() body: RequestClientDto) {
    const { name, email, phone, cep } = body

    try {
      const address = await this.clientService.findAddress(cep)

      const client = await this.clientService.create({
        name,
        email,
        phone,
        address,
      })

      return client
    } catch (error) {
      console.log('catch')
      return { error, message: 'Error when create client' }
    }
  }
}
