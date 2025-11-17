import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  //   const posts = await prisma.$queryRaw`SELECT * from "posts" where true`;
  //   console.log(posts);

  // Delete user Table
  await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`;
};
rawQuery();
