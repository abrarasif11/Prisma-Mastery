import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 3,
  });
  //   console.log("offset pagination", offsetData);

  // cursor pagination
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 3,
    cursor: {
      id: 20,
    },
  });
  //   console.log("cursor pagination", cursorData);

  // order by

  const sortBy = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      title: "Intro to CI/CD",
    },
    skip: 1,
    take: 1,
  });
  console.log(sortBy);
};
paginationSorting();
