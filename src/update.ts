import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 6,
  //     },
  //     data: {
  //       title: "updated data",
  //       content: "updated content",
  //       author: "Fahim Abrar Asif",
  //     },
  //   });

  const updateMany = await prisma.post.updateMany({
    where: {
      title: "Understanding Databases",
    },
    data: {
      published: true,
    },
  });
  console.log("updateMany");
};
updates();
