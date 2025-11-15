import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "user2",
  //       email: "user2@ph.com",
  //       role: UserRole.user,
  //     },
  //   });

  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "This is bio...",
  //       userId: 1,
  //     },
  //   });

  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: "Dev Ops",
  //     },
  //   });

  const createPosts = await prisma.post.create({
    data: {
      title: "Database Indexing Guide",
      content: "Indexes speed up database queries significantly.",
      authorId: 1,
      postCategories: {
        create: {
          categoryId: 3,
          //   category: {
          //     connect: {
          //       id: 1,
          //     },
          //   },
        },
      },
    },
    include: {
      postCategories: true,
    },
  });
  console.log(createPosts);
};
main();
