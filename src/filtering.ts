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
  console.log(orFiltering);
};
filtering();
