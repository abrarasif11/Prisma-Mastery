import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Updated Title",
  //       content: "This is updated content for the data object.",
  //       author: "Fahim Abrar Asif",
  //     },
  //   });
  //   console.log(result);
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};
main();
