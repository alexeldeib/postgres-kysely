import { createKysely } from '@vercel/postgres-kysely'

import { DB } from '@/src/lib/types'

export const db = createKysely<DB>()
