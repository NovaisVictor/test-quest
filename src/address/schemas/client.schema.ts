import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { AddressDocument, AddressSchema } from 'schemas/address.schema'

@Schema()
export class Client {
  @Prop({ required: true, maxLength: 255 })
  name: string

  @Prop({ required: true, maxLength: 255, unique: true })
  email: string

  @Prop({ maxLength: 20, unique: true })
  phone: string

  @Prop({ type: AddressSchema, required: true })
  address: AddressDocument
}

export type ClientDocument = HydratedDocument<Client>
export const ClientSchema = SchemaFactory.createForClass(Client)
