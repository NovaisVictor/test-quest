import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDto } from 'src/address/dto/address.dto'

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsPhoneNumber('BR')
  phone: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AddressDto) // Usando o DTO de Address
  address: AddressDto
}
