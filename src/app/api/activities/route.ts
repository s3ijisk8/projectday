import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const body = await request.json();
  // Minimal validation; expand with zod later
  const activity = await prisma.activity.create({
    data: {
      authorId: body.authorId,
      title: body.title,
      description: body.description ?? '',
      style: body.style ?? 'CREATIVE',
      timeEstimateMinutes: body.timeEstimateMinutes ?? 60,
      energyLevel: body.energyLevel ?? 'MEDIUM',
      budgetTier: body.budgetTier ?? 'CHEAP',
      seasonTags: body.seasonTags ?? [],
      socialSetting: body.socialSetting ?? 'SOLO',
      images: body.images ?? [],
      published: false,
      status: 'PENDING',
    },
  });
  return NextResponse.json(activity, { status: 201 });
}


