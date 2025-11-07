# DB Schema (MVP)

Derived from PRD. Implemented in `prisma/schema.prisma`.

## Core models
- User (archetype, avatarConfig, bio, friends, savedItems)
- Activity (style, energyLevel, budgetTier, tags, resources)
- Location (geo, accessibility, tags, verification)
- Itinerary (ordered stops JSON, tags, packingList)
- Journal (flair, linkedItinerary, visibility)
- Resource (type, associations)
- Review (targetType, currency-specific budget, timeActual)
- Tag and join tables (for facets and aesthetics)

See enums for: `ActivityStyle`, `EnergyLevel`, `SocialSetting`, `JournalFlair`, `TargetType`.

## Moderation
- `ContentStatus` on Activity/Resource
- `LocationStatus` with `lastVerified` timestamp

## Notes
- Stops and packing list are JSON for rapid iteration in MVP; consider normalized tables later.
- Add PostGIS later for proximity queries; initial MVP can use simple numeric lat/lng filtering.


