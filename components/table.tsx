import { users } from '@/lib/types'
import { db } from '@/lib/db'
import { Selectable } from 'kysely'
import { timeAgo } from '@/lib/utils'

export default async function Table() {
  let allUsers
  let startTime = Date.now()

  try {
    allUsers = await db.selectFrom('users').selectAll().execute()
  } catch (e: any) {
    throw e
  }

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      
    </div>
  )
}
