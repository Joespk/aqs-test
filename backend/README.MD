# BACKEND-24GAME-API

##PATH

|        method        |           path           |     description     | access level | req body |      res body       |
| :------------------: | :----------------------: | :-----------------: | :----------: | :------: | :-----------------: |
|         GET          |         /game24          |       get all       |    anyone    |   null   | (numbers: [Number],solutions: [String]) |
|         GET          | /game24?number=numbers   | get by numbers have 4-digit number |    anyone    |   null   | (numbers: [Number],solutions: [String])|


### Compiles and hot-reloads for development

Step:1 build compose up

```
docker compose up
```

Step:2 Run

```
pnpm start
```
