import { Mongoose } from 'mongoose'
import { ClientSchema } from 'src/address/schemas/client.schema'

export const clientProviders = [
  {
    provide: 'CLIENT_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Client', ClientSchema),
    inject: ['DATABASE_CONNECTION'],
  },
]
