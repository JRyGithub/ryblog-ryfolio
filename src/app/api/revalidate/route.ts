import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');

  if (secret !== process.env.SECRET) {
    return new NextResponse(JSON.stringify({ error: 'Invalid secret' }), {
      status: 401,
      statusText: 'Unauthorized',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const path = req.nextUrl.searchParams.get('path') || '/';

  revalidatePath(path);

  return NextResponse.json({ revalidated: true });
}
