import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

@Schema()
export class Address {
  @Prop({ required: true, maxLength: 8 })
  cep: string

  @Prop({ required: true, maxLength: 2 })
  state: string

  @Prop({ required: true, maxLength: 255 })
  city: string

  @Prop({ required: true, maxLength: 255 })
  neighborhood: string

  @Prop({ required: true, maxLength: 255 })
  street: string
}

export type AddressDocument = HydratedDocument<Address>
export const AddressSchema = SchemaFactory.createForClass(Address)
