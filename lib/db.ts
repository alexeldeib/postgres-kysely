import { createKysely } from '@vercel/postgres-kysely'

import { DB } from '@/lib/types'

export const db = createKysely<DB>()
