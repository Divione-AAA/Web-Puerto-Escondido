"server-only"
import { miembrosData } from "@/lib/data/miembros"
import { articulosData } from "@/lib/data/articulos"

interface StrapiResponse<T> {
  data: T | T[]
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      total: number
      totalPages: number
    }
  }
}

async function strapiServerFetch<T>(endpoint: string): Promise<T> {
  const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337/api"
  const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

  console.log("[v0] STRAPI_URL:", STRAPI_URL)
  console.log("[v0] STRAPI_TOKEN exists:", !!STRAPI_TOKEN)

  if (!STRAPI_URL || !STRAPI_TOKEN) {
    const error = `Strapi configuration missing: STRAPI_API_URL=${STRAPI_URL}, STRAPI_API_TOKEN=${STRAPI_TOKEN ? "SET" : "NOT SET"}`
    console.error("[v0]", error)
    throw new Error(error)
  }

  const url = `${STRAPI_URL}/${endpoint}`
  console.log("[v0] Fetching from:", url)

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${STRAPI_TOKEN}`,
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    const response = await fetch(url, {
      headers,
      next: { revalidate: 60 },
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    console.log("[v0] Response status:", response.status)

    if (!response.ok) {
      const responseText = await response.text()
      const error = `Strapi API error: ${response.status} - ${responseText}`
      console.error("[v0]", error)
      throw new Error(error)
    }

    const data = await response.json()
    console.log("[v0] Response data received from Strapi API")
    return data
  } catch (error) {
    console.error("[v0] Fetch error:", error)
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new Error(`Strapi connection timeout. Is Strapi running at ${STRAPI_URL}?`)
      }
      throw error
    }
    throw new Error("Unknown error connecting to Strapi")
  }
}

export async function getMiembros() {
  try {
    const response = await strapiServerFetch<StrapiResponse<any>>("miembros?populate=fotoURL&sort=nombre:asc")
    return Array.isArray(response.data) ? response.data : [response.data]
  } catch (error) {
    console.log("[v0] Using local miembros data as fallback")
    return miembrosData
  }
}

export async function getMiembroBySlug(slug: string) {
  try {
    const response = await strapiServerFetch<StrapiResponse<any>>(
      `miembros?filters[identificador][$eq]=${slug}&populate=fotoURL`,
    )
    const miembros = Array.isArray(response.data) ? response.data : [response.data]
    return miembros[0] || null
  } catch (error) {
    console.log("[v0] Using local miembros data as fallback")
    const miembro = miembrosData.find((m) => m.nombre.toLowerCase().replace(/\s+/g, "-") === slug)
    return miembro || null
  }
}

export async function getArticulos() {
  try {
    const response = await strapiServerFetch<StrapiResponse<any>>("articulos?populate=Portada&sort=createdAt:desc")
    return Array.isArray(response.data) ? response.data : [response.data]
  } catch (error) {
    console.log("[v0] Using local articulos data as fallback")
    return articulosData
  }
}

export async function getArticuloBySlug(slug: string) {
  try {
    const response = await strapiServerFetch<StrapiResponse<any>>(
      `articulos?filters[identificador][$eq]=${slug}&populate=Portada`,
    )
    const articulos = Array.isArray(response.data) ? response.data : [response.data]
    return articulos[0] || null
  } catch (error) {
    console.log("[v0] Using local articulos data as fallback")
    const articulo = articulosData.find((a) => a.Titulo.toLowerCase().replace(/\s+/g, "-") === slug)
    return articulo || null
  }
}
