import { NextRequest, NextResponse } from 'next/server';
 
export const runtime = 'edge';
 
export async function GET(request: NextRequest) {
  return NextResponse.json({
    name: `Hello, from ${request.url} I'm now an Edge Function!`,
  });
};
