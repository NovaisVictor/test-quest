import { Client } from 'src/address/schemas/client.schema'

export class PaginatedClientResponse {
  count: number
  previous: string | null
  next: string | null
  results: Client[]
}
