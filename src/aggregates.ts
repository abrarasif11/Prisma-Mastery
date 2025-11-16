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
  //   count age
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
  console.log(countAge);
};
aggregates();
