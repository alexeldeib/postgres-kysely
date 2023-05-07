import { db } from './db'

async function main() {
  console.log('Seeding database')
  const addUsers = await db
    .insertInto('users')
    .values([
      {
        name: 'Guillermo Rauch',
      },
      {
        name: 'Lee Robinson',
      },
      {
        name: 'Steven Tey',
      },
    ])
    .execute()
  console.log('Seeded database with 3 users')
  return {
    addUsers,
  }
}

main()
  .then(async () => {
    console.log('Seeded database successfully!')
    await db.destroy()
  })
  .catch(async (e) => {
    console.log('Failed to seed database!')
    console.error(e)
    await db.destroy()
    process.exit(1)
  })