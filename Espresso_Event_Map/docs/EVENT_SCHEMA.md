# Event Schema Documentation

This document defines the data structure for Espresso events used in the interactive map.

## Event Object Structure

Each event follows this TypeScript interface:

```typescript
interface EspressoEvent {
  id: string                    // Unique identifier
  name: string                  // Event display name
  datetime_utc: string          // ISO 8601 UTC timestamp
  city: string                  // City name
  country: string               // Country name
  latitude: number              // Geographical latitude (-90 to 90)
  longitude: number             // Geographical longitude (-180 to 180)
  venue_address?: string        // Optional venue details
  description_short?: string    // Optional 1-2 sentence description
  type: EventType              // Event category
  status: EventStatus          // Temporal status
  external_link_url?: string   // Optional external link
  thumbnail_url?: string       // Optional image URL
}
```

## Field Definitions

### Required Fields

#### `id` (string)
- **Purpose**: Unique identifier for tracking and referencing events
- **Format**: UUID recommended, but any unique string is acceptable
- **Example**: `"evt-001"` or `"a1b2c3d4-e5f6-7890-1234-567890abcdef"`

#### `name` (string)  
- **Purpose**: Display name shown in UI elements
- **Constraints**: Maximum 255 characters recommended
- **Example**: `"Espresso at ETHDenver 2025"`

#### `datetime_utc` (string)
- **Purpose**: Event date and time for sorting and display
- **Format**: ISO 8601 UTC timestamp
- **Example**: `"2025-02-28T18:00:00Z"`

#### `city` (string)
- **Purpose**: City location for display and search
- **Example**: `"Berlin"`

#### `country` (string)  
- **Purpose**: Country for regional filtering and display
- **Example**: `"Germany"`

#### `latitude` (number)
- **Purpose**: Map marker placement
- **Range**: -90.0 to 90.0
- **Precision**: 6 decimal places recommended
- **Example**: `52.5200`

#### `longitude` (number)
- **Purpose**: Map marker placement  
- **Range**: -180.0 to 180.0
- **Precision**: 6 decimal places recommended
- **Example**: `13.4050`

#### `type` (EventType)
- **Purpose**: Event categorization for filtering
- **Allowed Values**: `"conference"`, `"hackathon"`, `"meetup"`, `"workshop"`
- **Example**: `"conference"`

#### `status` (EventStatus)
- **Purpose**: Temporal state for visual distinction
- **Allowed Values**: `"upcoming"`, `"past"`
- **Note**: While derivable from `datetime_utc`, explicit status simplifies UI logic
- **Example**: `"upcoming"`

### Optional Fields

#### `venue_address` (string, optional)
- **Purpose**: Specific venue information for attendees
- **Example**: `"Berlin Congress Center, Alexanderstraße 11"`

#### `description_short` (string, optional)
- **Purpose**: Brief context for popups and list view
- **Constraints**: 1-2 sentences, ~500 characters maximum
- **Example**: `"Join us for the largest Ethereum conference showcasing modular rollup innovations."`

#### `external_link_url` (string, optional)
- **Purpose**: Link to registration, recap, or more information
- **Format**: Valid URL
- **Example**: `"https://espresso.systems/events/ethdenver-2025"`

#### `thumbnail_url` (string, optional)
- **Purpose**: Event image for richer visual display
- **Format**: Valid image URL (JPEG, PNG, WebP preferred)
- **Example**: `"https://espresso.systems/assets/ethdenver-2025.jpg"`

## Enums

### EventType
```typescript
type EventType = 'conference' | 'hackathon' | 'meetup' | 'workshop'
```

- **conference**: Large-scale industry events, talks, exhibitions
- **hackathon**: Coding competitions, builder events
- **meetup**: Community gatherings, networking events  
- **workshop**: Educational sessions, hands-on training

### EventStatus  
```typescript
type EventStatus = 'past' | 'upcoming'
```

- **upcoming**: Events scheduled for the future
- **past**: Events that have already occurred

## Data Validation Rules

1. **Coordinates**: Must be valid geographical coordinates
2. **Datetime**: Must be valid ISO 8601 format
3. **URLs**: Must be valid HTTP/HTTPS URLs if provided
4. **Required Fields**: All non-optional fields must be present
5. **Enum Values**: Must match exactly (case-sensitive)

## Example Event

```json
{
  "id": "evt-001",
  "name": "Espresso at ETHDenver 2025",
  "datetime_utc": "2025-02-28T18:00:00Z",
  "city": "Denver", 
  "country": "United States",
  "latitude": 39.7392,
  "longitude": -104.9903,
  "venue_address": "National Ballpark, Denver, CO",
  "description_short": "Join us for the largest Ethereum conference in North America, showcasing modular rollup innovations.",
  "type": "conference",
  "status": "upcoming",
  "external_link_url": "https://espresso.systems/events/ethdenver-2025",
  "thumbnail_url": "/images/ethdenver-2025.jpg"
}
```

## Adding New Events

### For MVP (JSON File)
1. Edit `public/events.json`
2. Add event object following the schema
3. Validate JSON syntax
4. Test locally

### For Development
1. Edit `src/data/mockEvents.ts`
2. Add event to the `sampleEvents` array
3. Follow TypeScript interface for validation

## Future Schema Extensions

When scaling beyond MVP, consider adding:

- **Attendee count**: `attendee_count_estimate: number`
- **Tags**: `tags: string[]` for more granular filtering
- **Organizer**: `organizer: { name: string, url?: string }`
- **Multiple media**: Array of image/video objects
- **Localization**: Multi-language support for names/descriptions
- **Pricing**: `pricing: { type: 'free' | 'paid', amount?: number }`

## Validation Tools

Use these tools to validate event data:

- **JSON Validator**: [jsonlint.com](https://jsonlint.com)
- **Coordinate Check**: [latlong.net](https://latlong.net)
- **Date Validation**: [timestamp.online](https://timestamp.online)
- **URL Validation**: Built into most text editors

---

This schema ensures consistent data structure across the application while remaining flexible for future enhancements.
