import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { endpoint, method = "GET" } = await request.json()

    const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337/api"
    const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

    if (!STRAPI_URL || !STRAPI_TOKEN) {
      return NextResponse.json({ error: "Strapi configuration missing" }, { status: 500 })
    }

    const url = `${STRAPI_URL}/${endpoint}`

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    }

    const response = await fetch(url, {
      method,
      headers,
    })

    if (!response.ok) {
      return NextResponse.json({ error: `Strapi error: ${response.status}` }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Strapi API Error:", error)
    return NextResponse.json({ error: "Failed to fetch from Strapi" }, { status: 500 })
  }
}
