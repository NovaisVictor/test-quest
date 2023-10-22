import { Inject, Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Client } from 'src/address/schemas/client.schema'
import { CreateClientDto } from './dto/create-client.dto'
import { HttpService } from '@nestjs/axios'

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_MODEL') private ClientModel: Model<Client>,
    private httpService: HttpService,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    try {
      const createdClient = new this.ClientModel(createClientDto)
      const client = await createdClient.save()
      return client
    } catch (error) {
      return error
    }
  }

  async findAll(): Promise<Client[]> {
    return this.ClientModel.find().exec()
  }

  async findById(id: string): Promise<Client | null> {
    return this.ClientModel.findById(id).exec()
  }

  async deleteById(id: string): Promise<Client | null> {
    return this.ClientModel.findByIdAndDelete(id).exec()
  }

  async findAddress(cep: string) {
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`
    const response = await this.httpService.get(url).toPromise()

    return response.data
  }
}
