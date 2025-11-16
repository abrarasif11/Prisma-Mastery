import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const aggregates = async () => {
  // find AVG
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  //   find sum
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  console.log(sumAge);
};
aggregates();
