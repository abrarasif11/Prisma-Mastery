import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batch = async () => {
  const createUser = await prisma.user.create({
    data: {
      username: "PrismaAkhter",
      email: "prisma@akhter.com",
    },
  });
  console.log("Create User", createUser);

  const updateUser = await prisma.user.update({
    where: {
      id: 111,
    },
    data: {
      age: 27,
    },
  });
  console.log("Update User", updateUser);
};
batch();
