import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create base user (replace with your info)
  const user = await prisma.user.upsert({
    where: { email: 'you@example.com' },
    update: {},
    create: {
      email: 's3iji.sk8@gmail.com',
      username: 'sage',
      archetype: 'Observer',
      bio: 'building...',
    },
  });

  // Example location
  const location = await prisma.location.create({
    data: {
      name: 'Sunrise Café',
      lat: 37.7749,
      lng: -122.4194,
      address: '123 Market St, San Francisco, CA',
      authorId: user.id,
      hours: '8am – 6pm',
      costRange: '$$'
    },
  });

  // Example activity
  const activity = await prisma.activity.create({
    data: {
      authorId: user.id,
      title: 'Sketch in the park',
      description: 'Bring a journal, pencils, and sit under the trees.',
      style: 'CREATIVE',
      timeEstimateMinutes: 90,
      energyLevel: 'LOW',
      budgetTier: 'CHEAP',
      seasonTags: ['SPRING'],
      socialSetting: 'SOLO',
      published: true,
      status: 'APPROVED'
    },
  });

  // Example itinerary with the above entries
  await prisma.itinerary.create({
    data: {
      authorId: user.id,
      title: 'Soft Morning in the City',
      summary: 'A gentle itinerary of coffee, sketching, and wandering local bookstores.',
      stops: [
        {
          type: 'location',
          ref_id: location.id,
          user_note: 'Start with a latte and croissant.',
          duration_minutes: 60
        },
        {
          type: 'activity',
          ref_id: activity.id,
          user_note: 'Sketch the street scenes and people passing by.',
          duration_minutes: 90
        }
      ],
      totalDurationMinutes: 180,
      collaborators: [],
      published: true
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

