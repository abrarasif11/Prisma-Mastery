import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const RelationQueries = async () => {
  // Fluent API
  const result = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      posts: true,
    },
  });

  //   Relational Filter
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(publishedPostUsers, { depth: Infinity });
};
RelationQueries();
