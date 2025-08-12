import type { Config } from "jest";
// import path from "node:path";
// import fs from "node:fs";

// const prismaClientPath = path.resolve(__dirname, "generated", "prisma", "client.ts");

// // --- Temporary monkey-patch for generated Prisma client.ts ---
// // This is a non-breaking, temporary fix to work around a Prisma codegen issue
// // where the generated client uses `__dirname`, which can cause problems in our test environment.
// // We simply rename `__dirname` to `__prisma_dirname` and update its usage accordingly.
// try {
//   let content = fs.readFileSync(prismaClientPath, "utf8");
//   // Rename 'const __dirname = "/";' to 'const __prisma_dirname = "/";'
//   content = content.replace(/^const __dirname = '\/'\s*$/m, 'const __prisma_dirname = "/"');
//   // Replace 'getPrismaClientClass(__dirname)' with 'getPrismaClientClass(__prisma_dirname)'
//   content = content.replace(/getPrismaClientClass\(__dirname\)/g, "getPrismaClientClass(__prisma_dirname)");
//   fs.writeFileSync(prismaClientPath, content, "utf8");

//   console.log("Patched Prisma client.ts for test environment (renamed __dirname to __prisma_dirname)");
// } catch (err) {
//   console.error("Failed to patch Prisma client.ts:", err);
// }
// // --- End temporary patch ---

const config: Config = {
  testEnvironment: "node",
  testTimeout: 30000,
  testMatch: ["**/+(*.)+(test).+(ts|js)?(x)"],
  transform: {
    "^.+\\.(ts|tsx)$": "@swc/jest",
  },
};

export default config;
