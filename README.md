# IP-RMT48
## LOYO
Hotel booking app is an application to book a hotel room. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## 1. RESTful endpoints

### GET /

> Test API function availabilities

_Response (200)_

```
    "message": "Hello, welcome to Hotel Booking server API"
```



## 2. RESTful userRouters endpoints
### POST /login
_Request Body_
{
    "email": "string",
    "password": "string",
}

_Response (200)_

```
   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE1OTAzODUyfQ.QIGl-l--wr4amFrIX6VmkF53fJjxaasdy4T42HiBZpYg8CQ"
```

### POST /login/google

_Response (200)_

```
   { "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE1OTAzODUyfQ.QIGl-l--wr4amFrIX6VmkF53fJjxaasdy4T42HiBZpYg8CQ"}
```

### POST /register
_Request Body_

```
{
    "username": "string",
    "email": "string",
    "password": "string",
}
```

_Response (201)_

```
    { id: user.id, email: user.email }
```


## 3. RESTful hotelsRouter endpoints

### GET /hotels
_Request Header_

```
{ "Authorization": "Bearer <access token>" }
```




### POST /hotels/generate-xendit-token
_Request Header_

```
{ "Authorization": "Bearer <access token>" }
```
### GET /hotels/receive_callback
_Request Header_

```
{ "Authorization": "Bearer <access token>" }
```
### GET /hotels/mybookings
_Request Header_

```
{ "Authorization": "Bearer <access token>" }
```





---

### Global Error

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal server error"
}
```

---