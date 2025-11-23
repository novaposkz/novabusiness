import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // Здесь позже реализуем:
  // 1) запрос /auth/api/v1/authenticate -> получить accessToken (на сервере)
  // 2) POST /bg-proxy-general/api/v2/orders --> создать заявку
  // 3) вернуть клиенту redirectUrl
  return NextResponse.json({ message: 'Not implemented. Implement server-side create-order with AirbaPay.' }, { status: 501 })
}
