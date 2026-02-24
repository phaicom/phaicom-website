---
title: Go E-Commerce API
category: Backend
techStack:
  - Golang
  - Gin
  - PostgreSQL
  - sqlc
  - JWT
  - Docker
featured: false
---

## Project Overview

This project demonstrates building a production-ready REST API using Go with a focus on performance, type safety, and maintainability. The API handles e-commerce operations including user management, product catalog, and order processing.

## Key Features

### 1. Authentication & Authorization

Secure user management with:

- JWT-based authentication
- Role-based access control (RBAC)
- Refresh token rotation
- Password hashing with bcrypt

### 2. Product Management

Complete product CRUD operations:

- Product creation and updates
- Category management
- Inventory tracking
- Price history

### 3. Order Processing

Full order lifecycle:

- Cart management
- Order creation and validation
- Status transitions
- Order history

### 4. API Documentation

Auto-generated documentation:

- OpenAPI/Swagger specification
- Interactive API explorer
- Request/response examples

## Technical Architecture

### Core Technologies

- **Gin** - High-performance HTTP framework
- **sqlc** - Type-safe SQL query generation
- **PostgreSQL** - Primary database
- **JWT** - Token-based authentication

### Project Structure

```
├── cmd/
│   └── server/        # Application entry point
├── internal/
│   ├── handler/       # HTTP handlers
│   ├── service/       # Business logic
│   ├── repository/    # Data access layer
│   └── model/         # Domain models
├── pkg/
│   ├── auth/          # Authentication utilities
│   └── validator/     # Request validation
└── migrations/        # Database migrations
```

## Code Example: Type-Safe Queries with sqlc

```sql
-- name: GetProductByID :one
SELECT * FROM products
WHERE id = $1 AND deleted_at IS NULL;

-- name: ListProducts :many
SELECT * FROM products
WHERE category_id = $1
ORDER BY created_at DESC
LIMIT $2 OFFSET $3;
```

This generates type-safe Go code:

```go
func (q *Queries) GetProductByID(ctx context.Context, id uuid.UUID) (Product, error)
func (q *Queries) ListProducts(ctx context.Context, arg ListProductsParams) ([]Product, error)
```

## Performance Optimizations

1. **Connection Pooling**: Configured PostgreSQL connection pool
2. **Prepared Statements**: Reusable query plans
3. **Indexing Strategy**: Optimized database indexes
4. **JSON Streaming**: Efficient response serialization

## API Endpoints

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| POST   | /auth/register | User registration   |
| POST   | /auth/login    | User login          |
| GET    | /products      | List products       |
| GET    | /products/:id  | Get product details |
| POST   | /orders        | Create order        |
| GET    | /orders        | List user orders    |

## Lessons Learned

Building this API taught me:

- Writing idiomatic Go code
- Designing RESTful APIs that scale
- Using sqlc for type-safe database operations
- Implementing clean architecture in Go

## Conclusion

This project demonstrates the power of Go for building high-performance APIs. The combination of Gin, sqlc, and PostgreSQL creates a robust foundation for any backend service.
