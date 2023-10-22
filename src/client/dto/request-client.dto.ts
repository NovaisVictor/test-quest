import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty } from 'class-validator'

export class RequestClientDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsPhoneNumber('BR')
  phone: string

  @IsNotEmpty()
  @IsString()
  cep: string
}
