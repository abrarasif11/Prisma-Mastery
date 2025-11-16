import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batch = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "Prisma Haque",
      email: "prisma@haque.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 6,
    },
    data: {
      age: 25,
    },
  });

  const [userData, uploadData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);
  console.log(userData, uploadData);
};
batch();
