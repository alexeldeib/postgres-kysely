import './globals.css'

import { Suspense } from 'react'
import GameWrapper from '../components/GameWrapper'
import GamePlaceholder from '../components/GamePlaceholder'

export const preferredRegion = 'home'
export const dynamic = 'auto'

export default function Page() {
  return (
    <main className="hero">
       <Suspense fallback={<GamePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <GameWrapper />
      </Suspense>
    </main>
  )
}
