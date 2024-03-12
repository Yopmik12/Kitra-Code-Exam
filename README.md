# Kitra-Code-Exam

## Prerequisite ( without Docker )

#### A. Pre requisites to run locally without docker
1. mysql
2. NPM/ Node 20.X

#### B. Install all dependencies locally
1. ```npm install```

#### C. Running migrations
I'm using Sequelize migration
> Note: -- Edit Credentials in `src/config/config.json` for your root mysql connection

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

#### A.  run locally with docker
``` sh
# run docker container in development mode
docker-compose up --build
```

> Note: Wait for creation of database, migration and seed before requesting. 