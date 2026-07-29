require("dotenv").config();

const { PrismaClient } = require("@prisma/client");

let prisma;

if (process.env.DATABASE_URL) {
  const { PrismaPg } = require("@prisma/adapter-pg");
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  prisma = new PrismaClient({ adapter });
} else {
  prisma = new PrismaClient();
}

module.exports = { prisma };