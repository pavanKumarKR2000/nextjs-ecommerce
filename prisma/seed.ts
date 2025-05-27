import sampleData from "@/db/sample-data";
import prisma from "@/lib/prisma";
async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
  console.log("Database seeded successfully!");
}

main();
