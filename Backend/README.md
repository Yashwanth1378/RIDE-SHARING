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

## User Login Endpoint

**Endpoint:** `/user/login`  
**Method:** `POST`

### Description
Logs in an existing user. Requires a valid email and password. Returns a JWT token and user details upon successful authentication.

### Request Body
```json
{
  "email": "string (valid email)",
  "password": "string (min 6 characters)"
}
```

### Status Codes
- **200 OK:** Login successful.
- **400 Bad Request:** Validation errors.
- **401 Unauthorized:** Incorrect email or password.

### Example: Successful Login

**Request Input:**
```json
{
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

### Example: Failed Login

**Request Input:**
```json
{
  "email": "jane.doe@example.com",
  "password": "wrongpass"
}
```

**Response:**
```json
{
  "message": "Invalid email or password"
}
```

## User Profile Endpoint

**Endpoint:** `/user/profile`  
**Method:** `GET`

### Description
Retrieves the profile of the authenticated user. Requires a valid JWT token (provided via header or cookies).

### Authentication
- JWT token must be provided.  

### Response
- **200 OK:** Returns user profile details.
- **401 Unauthorized:** Missing or invalid token.

### Example Response
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com"
  // ...other user properties...
}
```

## User Logout Endpoint

**Endpoint:** `/user/logout`  
**Method:** `GET`

### Description
Logs out the current user by blacklisting the token provided via the cookie or header.

### Authentication
Requires a valid JWT token provided in the authorization header or cookie.

### Response
- **200 OK:** Returns a confirmation message for successful logout.
- **401 Unauthorized:** Missing or invalid token.

### Example Response
```json
{
  "message": "Successfully logged out."
}
```

## Captain Registration Endpoint

**Endpoint:** `/captain/register`  
**Method:** `POST`

### Description
Registers a new captain account with vehicle details.

### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepass",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Successful Response
```json
{
  "token": "jwt-token-string",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other captain properties...
  }
}
```

### Error Response
```json
{
  "errors": [
    { "msg": "Invalid email", "param": "email", "location": "body" }
  ]
}
```
