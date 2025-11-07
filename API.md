# API Surface (MVP)

Base URL: `/api`

## Search
GET `/api/search?q=&type=activity|location|itinerary`

Response
```json
{ "query": "string", "type": "string|null", "results": [] }
```

## Activities
POST `/api/activities`

Body (example)
```json
{
  "authorId": "user_cuid",
  "title": "Morning Photo Walk",
  "description": "Steps and tips...",
  "style": "CREATIVE",
  "timeEstimateMinutes": 90,
  "energyLevel": "LOW",
  "budgetTier": "CHEAP",
  "seasonTags": ["SPRING"],
  "socialSetting": "SOLO",
  "images": []
}
```

201 → created Activity

## Auth
NextAuth routes are under `/api/auth/*`.


