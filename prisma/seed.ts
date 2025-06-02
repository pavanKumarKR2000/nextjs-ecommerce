import sampleData from "@/db/sample-data";
import prisma from "@/lib/prisma";
async function main() {
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({ data: sampleData.users });
  await prisma.product.createMany({ data: sampleData.products });
  console.log("Database seeded successfully!");
}

main();
