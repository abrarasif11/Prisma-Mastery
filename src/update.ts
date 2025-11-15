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

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "Understanding Databases",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log("updateMany");

  //    Upsert

  const upsertData = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {
      title: "Advanced Java Concepts",
    },
    create: {
      title: "New java Title",
      content: "JavaScript is essential for building dynamic web applications",
      author: "Martinez",
    },
  });
  console.log(upsertData);
};
updates();
