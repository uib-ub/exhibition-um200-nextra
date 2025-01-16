import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const facetParam = searchParams.toString()

  // Dummy response data
  const dummyResponse = {
    status: "success",
    query: facetParam,
    results: [
      {
        id: 1,
        title: "Sample Result 1",
        description: "This is a dummy result"
      },
      {
        id: 2,
        title: "Sample Result 2",
        description: "Another dummy result"
      }
    ],
    total: 2
  }

  return NextResponse.json(dummyResponse)
}
