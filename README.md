## Prisma + Jest reproduction and workaround

This repo reproduces a Prisma Client codegen quirk in tests and shows a small workaround to run the suite.

### Prerequisites

- Node.js 18+
- A PostgreSQL database and `DATABASE_URL` environment variable

### Install

```bash
npm i
```

### Configure database

Set `DATABASE_URL` in your environment (adjust values to your local DB):

```bash
export DATABASE_URL="postgresql://user:password@localhost:5432/prisma_bug?schema=public"
```

### Generate Prisma Client

```bash
npm run generate
```

### Run tests

```bash
npm test
```

### About the bug/workaround

- Prisma Client generated with the current settings emits a top-level `const __dirname = '/'` inside `generated/prisma/client.ts`.
- In Jest, this can conflict and cause import/runtime issues.
- As a temporary, non-breaking workaround, the Jest config applies a tiny pre-test text replacement to rename that local `__dirname` to `__prisma_dirname`, and updates the call site accordingly. This avoids collisions without touching source code.

You can see the workaround near the top of `jest.config.ts`.
