import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const groupBy = async () => {
  console.log(groupBy);
  const groupPost = await prisma.post.groupBy({
    by: ["published", "authorId"],
  });
  console.log(groupPost);
};
groupBy();
