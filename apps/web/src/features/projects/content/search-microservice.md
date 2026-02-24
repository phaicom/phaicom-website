---
title: Search Microservice
category: Backend
techStack:
  - Golang
  - Fiber
  - Meilisearch
  - REST API
  - Microservices
featured: false
---

# Search Microservice

Dedicated search service written in Go using Meilisearch. Provides high-speed full-text product search and indexing within a distributed microservices ecosystem.

## Project Overview

This microservice handles all search-related operations in a larger e-commerce platform. It's designed to be independently deployable and scalable, handling millions of product searches with sub-50ms response times.

## Key Features

### 1. Full-Text Search

Powerful search capabilities:

- Typo-tolerant search
- Prefix matching for autocomplete
- Custom ranking rules
- Multi-language support

### 2. Real-Time Indexing

Keep search index synchronized:

- Event-driven index updates
- Atomic document operations
- Index versioning
- Zero-downtime reindexing

### 3. Faceted Search

Enable powerful filtering:

- Category facets
- Price range filters
- Brand filters
- Custom attribute filtering

### 4. Analytics & Monitoring

Track search performance:

- Search query logging
- Popular search terms
- Click-through tracking
- Performance metrics

## Technical Architecture

### Technology Stack

- **Fiber** - High-performance Go web framework
- **Meilisearch** - Search engine
- **Redis** - Caching layer
- **RabbitMQ** - Message queue for events

### Service Design

```
┌─────────────────────────────────────────────────────┐
│                  Search Service                      │
├─────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │   REST API  │  │   Indexer   │  │  Synchronizer│ │
│  │   (Fiber)   │  │             │  │             │ │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘ │
│         │                │                │        │
│         ▼                ▼                ▼        │
│  ┌─────────────────────────────────────────────┐   │
│  │              Meilisearch Engine             │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

## API Endpoints

### Search Operations

```http
POST /search
Content-Type: application/json

{
  "query": "laptop",
  "filters": {
    "category": ["electronics"],
    "price": { "min": 100, "max": 1000 }
  },
  "page": 1,
  "limit": 20
}
```

### Index Management

```http
POST /index/products
Content-Type: application/json

{
  "documents": [
    {
      "id": "prod-123",
      "name": "Gaming Laptop",
      "description": "High-performance laptop",
      "price": 999.99,
      "category": "electronics"
    }
  ]
}
```

## Performance Characteristics

| Metric                | Value      |
| --------------------- | ---------- |
| Average Response Time | < 50ms     |
| P99 Response Time     | < 100ms    |
| Documents Indexed     | 1M+        |
| Concurrent Requests   | 10,000/sec |

## Integration Pattern

The service integrates with other microservices through event-driven architecture:

```
Product Service ──┐
                  │     ┌──────────────────┐
Order Service ────┼────▶│   Message Queue  │
                  │     │   (RabbitMQ)     │
User Service ─────┘     └────────┬─────────┘
                                 │
                                 ▼
                        ┌──────────────────┐
                        │ Search Service   │
                        │ (Event Consumer) │
                        └──────────────────┘
```

## Lessons Learned

Building this microservice taught me:

- Designing services for independent deployability
- Optimizing search relevance and performance
- Handling eventual consistency in distributed systems
- Building resilient event-driven architectures

## Conclusion

This search microservice demonstrates how to build a focused, high-performance service that handles a specific domain responsibility. The architecture allows for independent scaling and deployment within a larger microservices ecosystem.
