import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') ?? '';
  const type = searchParams.get('type');
  // Placeholder response; will connect to Algolia/DB later
  return NextResponse.json({
    query: q,
    type,
    results: [],
  });
}


