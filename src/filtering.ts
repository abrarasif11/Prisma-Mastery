import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  // And Filtering
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
          published: true,
        },
      ],
    },
  });

  //   OR Filtering
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "tit",
          },
          published: true,
        },
      ],
    },
  });

  //   Not Operation
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });

  //   Start With
  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "user1",
      },
    },
  });
  console.log(startWith);
};
filtering();
