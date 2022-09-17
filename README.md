# shorty

# Explain what shorty is

shorty is a self hosted easy to use url shortener


# Installation
```bash
npm i
```

```bash
npm start
```

# How to use

HTTP Request

```http
POST http://localhost:5000/api/v1/short
Content-Type: application/json

{
    "longUrl": "https://github.com/mrtuxa"
}
```
