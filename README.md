# Kitra-Code-Exam

## Prerequisite ( without Docker )

#### A. Pre requisites to run locally without docker
1. mysql
2. NPM / Node 20.X

#### B. Install all dependencies locally
1. ```npm install```

#### C. Running migrations
I'm using Sequelize migration
> Note: -- Edit Credentials in `src/database/config/config.json` for your root mysql connection

``` sh
"development": {
    "username": "root",
    "password": null,
    "database": "kitra_db",
    "host": "localhost",
    "dialect": "mysql",
    "port": 3306
  }
```
1. ```npm run db:create```
2. ```npm run db:migrate```
3. ```npm run db:seed```

#### D. Run locally
1. ```npm run dev```

Success logs:
```sh
[nodemon] 3.1.0                                                                                                         
[nodemon] to restart at any time, enter `rs`                                                                            
[nodemon] watching path(s): *.*                                                                                         
[nodemon] watching extensions: js,mjs,cjs,json                                                                          
[nodemon] starting `node src`                                                                                           
info: Listening to port 3000
```

## Prerequisite with Docker ( `recommended` )

#### A. Pre requisites to run locally with docker
1. NPM
2. Docker Desktop

#### B.  Install all dependencies locally
1. ```npm install```
  
#### C.  run locally with docker
``` sh
# run docker container in development mode
docker-compose up --build

# delete docker container and volumes (delete container and volume before re-running container)
docker-compose down -v
```

> Note: Wait for creation of database, migration and seed before requesting. Please make sure all ports are available (3000, 3306)

## API specifications

You can try out the API specifications in the [Swagger Editor](https://editor.swagger.io/). 


<details>
  <summary>Click to expand Swagger specification</summary>

```yaml
openapi: 3.0.3
info:
  title: Kitra-Code-Exam
  version: 1.0.0
servers:
  - url: http://localhost:3000/api/
tags:
  - name: treasures
  - name: users
paths:
  /treasures:
    get:
      tags:
        - treasures
      summary: Get resources filtered by latitude and longitude
      parameters:
        - name: latitude
          in: query
          description: Latitude value
          required: true
          schema:
            type: number
            format: float
            example: "14.54376481"
        - name: longitude
          in: query
          description: Longitude value
          required: true
          schema:
            type: number
            format: float
            example: "121.01991170"
        - name: distance
          in: query
          description: Distance value (must be either 1 or 10)
          required: true
          schema:
            type: integer
            format: int32
            enum: [1, 10]
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/TreasuresResponse'
        '400':
          description: Validation Error
        '500':
          description: Internal Server Error
  /treasures/prize:
    get:
      tags:
        - treasures
      summary: Get resources filtered by latitude, longitude, and prize value
      parameters:
        - name: latitude
          in: query
          description: Latitude value
          required: true
          schema:
            type: string
            example: "14.54376481"
        - name: longitude
          in: query
          description: Longitude value
          required: true
          schema:
            type: string
            example: "121.01991170"
        - name: distance
          in: query
          description: Distance value (must be either 1 or 10)
          required: true
          schema:
            type: integer
            format: int32
            enum: [1, 10]
        - name: minPrizeValue
          in: query
          description: Minimum prize value
          required: false
          schema:
            type: integer
            example: 10
        - name: maxPrizeValue
          in: query
          description: Maximum prize value
          required: false
          schema:
            type: integer
            example: 30
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TreasuresPrizeResponse'
        '400':
          description: Validation Error
        '500':
          description: Internal Server Error
  /user:
    get:
      tags:
        - users
      summary: Get user by name
      parameters:
        - name: name
          in: query
          description: User name
          required: true
          schema:
            type: string
            example: "U1"
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserResponse'
        '400':
          description: No User Found
        '500':
          description: Internal Server Error
  /user/update:
    put:
      tags:
        - users
      summary: Update user information
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UserUpdateRequest'
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UpdateUserResponse'
        '400':
          description: No User Found
        '500':
          description: Internal Server Error
components:
  schemas:
    TreasuresResponse:
      type: object
      properties:
        code:
          type: integer
          example: 200
        response:
          type: array
          items:
            $ref: '#/components/schemas/Treasure'
    Treasure:
      type: object
      properties:
        id:
          type: integer
          example: 100
        latitude:
          type: string
          example: "14.54376481"
        longitude:
          type: string
          example: "121.01991170"
        name:
          type: string
          example: "T1"
        amt:
          type: array
          items:
            type: integer
          example: [15, 30]
    TreasuresPrizeResponse:
      type: object
      properties:
        code:
          type: integer
          example: 200
        response:
          type: array
          items:
            $ref: '#/components/schemas/TreasurePrize'
    TreasurePrize:
      type: object
      properties:
        id:
          type: integer
          example: 100
        latitude:
          type: string
          example: "14.54376481"
        longitude:
          type: string
          example: "121.01991170"
        name:
          type: string
          example: "T1"
        amt:
          type: integer
          example: 15
    UserResponse:
      type: object
      properties:
        code:
          type: integer
          example: 200
        response:
          type: object
          properties:
            id:
              type: integer
              example: 3000
            name:
              type: string
              example: "U1"
            age:
              type: integer
              example: 21
            password:
              type: string
              example: "$2a$10$SxKqd3Q54LySCtJ.7BifA.TKMybEyhZdaJFVZ1CEglKwrQoMbPmza"
            email:
              type: string
              format: email
              example: "u1@kitra.abc"
    UserUpdateRequest:
      type: object
      properties:
        name:
          type: string
          example: "Ub"
          description: The name of the user (required)
        age:
          type: integer
          example: 32
          description: The age of the user
        password:
          type: string
          example: "12355555"
          description: The password of the user
        email:
          type: string
          format: email
          example: "test@valid.com"
          description: The email of the user
      required:
        - name
    UpdateUserResponse:
      type: object
      properties:
        code:
          type: integer
          example: 200
        response:
          type: object
          properties:
            id:
              type: integer
              example: 3000
            name:
              type: string
              example: "U1"
            age:
              type: integer
              example: 32
            password:
              type: string
              example: "$2a$10$4/dOTcodLyBiJr23myWX7e7YSv0MU26Gq52H47TCtL0rXzW70clFK"
            email:
              type: string
              format: email
              example: "test@valid.com"
```

</details>


## Postman Collection

####  Included the postman collection in root directory

```Kitra Endpoint.postman_collection.json```
