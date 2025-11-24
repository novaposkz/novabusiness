import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Stub endpoint so Next.js treats this route as a module during build
  return NextResponse.json(
    { message: 'Webhook handler not implemented yet.' },
    { status: 501 },
  )
}

