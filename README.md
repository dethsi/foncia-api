# Foncia-api

## Prequisities

install docker
npm install --save mocha nodemon mongoose

## How to start:

>_Run Mongo container_
```docker run --name mongo -p 27017:27017 mongo
```
>_install packages mongo-tools & mongodb-client_
```sudo apt install mongo-tools
  sudo apt install mongodb-clients
```

### install packages
npm i

### Start application
npm run start

### Start tests
npm run test

#### Api
* create user
POST http://localhost:8000/api/users
payload:
```{
	"user": {
		"user": "sly",
		"fullname": "sidet ly",
		"password": "test"
	}
}
```

* get all users
GET http://localhost:8000/api/users


* authenticate
POST http://localhost:8000/api/users/authenticate
payload:
```{
	"user": {
		"user": "sly",
		"password": "test"
	}
}
```

* get all products
GET http://localhost:8000/api/products

* create product
POST http://localhost:8000/api/products
payload:
```{
	"product": {
		"label": "chaussures addidas",
		"price": 100,
		"amount": 10
	}
}
```
* delete product
DELETE http://localhost:8000/api/products/5ca70664993520671a925c1d

* update product
PATCH http://localhost:8000/api/products/5ca714d4574aa372233ee5b1
```{
	"product": {
		"label": "chaussures addidas",
		"price": 200,
		"amount": 10
	}
}
```
