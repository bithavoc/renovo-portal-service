## Renovo Portal API and Web Service backend

## Dev

```
npm run dev
```

## Prod

```
npm run start
```

## Generating New Migrations

```
npm run generate-migration CreateToken
```

## Generating New Dependencies

```
scripts/dev_frontend_npm.sh run graphql-codegen
```

## VAC Client

```
scripts/dev_backend_npm.sh run refresh-vac-api
```

Add this snippet at the top of the file `externalServices/vac/vac-sdk.ts`:

```
import { File, Blob } from 'file-api';
import fetch, { Body } from 'node-fetch';
```
