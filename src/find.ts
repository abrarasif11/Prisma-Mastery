import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   Find All
  const getAllFromDB = await prisma.post.findMany();
  //   find first and find first throw
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  // Find unique and unique throw error

  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 2,
    },
  });
  console.log(findUnique);
};
main();
