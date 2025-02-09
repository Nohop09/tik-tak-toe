import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.create({
    data: {
      login: "user",
      rating: 1000,
      passwordHash: "$2b$10$a4u7r0h39i58jX1x3o2k5O4e69a7c3897798998",
    },
  })
  const user2 = await prisma.user.create({
    data: {
      login: "user2",
      rating: 1000,
      passwordHash: "$2b$10$a4u7r0h39i58jX1x3o2k5O4e69a7c3897798998",
    },
  })
  // await prisma.game.create({
  //   data: {
  //     field: Array(9).fill(null),
  //     status: 'idle',
  //     players: {
  //       connect: {
  //         id: user.id,

  //       }
  //     }
  //   },
  // })
  // await prisma.game.create({
  //   data: {
  //     field: Array(9).fill(null),
  //     status: 'idle',
  //     players: {
  //       connect: {
  //         id: user2.id,

  //       }
  //     }
  //   },
  // })
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
