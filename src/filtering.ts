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

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      posts: {
        include: {
          postCategories: true,
        },
      },
    },
  });
  console.dir(inDepthData, { depth: Infinity });
};
filtering();
