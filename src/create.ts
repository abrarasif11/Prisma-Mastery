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

  // create many

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Introduction to React",
        content: "React is a JavaScript library for building user interfaces.",
        author: "Fahim Abrar Asif",
      },
      {
        title: "Mastering JavaScript",
        content:
          "JavaScript is essential for building dynamic web applications.",
        author: "Rafiul Islam",
      },
      {
        title: "Understanding Databases",
        content: "Databases store and organize data for applications.",
        author: "Sarah Khan",
      },
    ],
  });
  console.log(createMany);
};
main();
