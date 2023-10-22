import { IsString, IsNotEmpty } from 'class-validator'

export class AddressDto {
  @IsNotEmpty()
  @IsString()
  cep: string

  @IsNotEmpty()
  @IsString()
  state: string

  @IsNotEmpty()
  @IsString()
  city: string

  @IsNotEmpty()
  @IsString()
  neighborhood: string

  @IsNotEmpty()
  @IsString()
  street: string
}
