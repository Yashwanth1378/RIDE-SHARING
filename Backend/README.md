# API Documentation

## User Registration Endpoint

**Endpoint:** `/user/register`  
**Method:** `POST`

### Description
Registers a new user account. The endpoint requires a `fullname` object, an `email`, and a `password`. It validates the data and creates the user after hashing the password.

### Request Body
```json
{
  "fullname": {
    "firstname": "string (min 3 characters)",
    "lastname": "string (min 3 characters)"
  },
  "email": "string (valid email, min 5 characters)",
  "password": "string (min 6 characters)"
}
```

### Status Codes
- **201 Created:** User created successfully.
- **400 Bad Request:** Validation errors in the input.

### Example Response
```json
{
  "token": "jwt-token-string",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user properties...
  }
}
```

## Example: Successful Registration

**Request Input:**
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securepass"
}
```

**Response:**
```json
{
  "token": "new-jwt-token",
  "user": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com"
    // ...other user properties...
  }
}
```

## Example: Failed Registration

**Request Input:**
```json
{
  "fullname": {
    "firstname": "Ja",
    "lastname": "D"
  },
  "email": "not-an-email",
  "password": "123"
}
```

**Response:**
```json
{
  "error": "Validation failed: firstname and lastname must be at least 3 characters, valid email required, and password must be at least 6 characters."
}
```
