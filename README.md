# express-utils
A utilities library for express servers


## Installation

```
npm install @atz3n/express-utils
```

you also have to have `body-parser`, `express-async-errors` and `express-validator` installed.
```
npm install body-parser express-async-errors express-validator
```

Add the errorHandler function **after** your routes. Have a look into the [test server](./test/test-server/app.ts) for an example.


## Content

The library contains the following throwable errors:

```
BadRequestError     : returns status code 400
NotAuthorizedError  : returns status code 401
NotFoundError       : returns status code 404
InternalError       : returns status code 500
```


It also contains the following middleware functions:
```
requestValidation   : validates express-validator validation results
errorHandler        : sends error responses to the client
```


## Development

To **initialize** the project just clone this repository and run
```
npm install
```

For **linting** run 
```
npm run lint
```

You can try to **autofix lint errors** with
```
npm run lint:fix
```

For **unit tests** run

```
npm test
```
