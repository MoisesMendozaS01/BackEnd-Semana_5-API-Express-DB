const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const student = await prisma.student.upsert({
        where: { name: 'Student' },
        update: {},
        create: {
          name: 'Student',
                  lang: 'spanish',
                  missionCommander: 'CarloGilmar',
                  enrollments: 1
        },
      });
      const student1 = await prisma.student.upsert({
        where: { name: 'Student 1' },
        update: {},
        create: {
          name: 'Student 1',
                  lang: 'spanish',
                  missionCommander: 'CarloGilmar',
                  enrollments: 2
        },
      });
      const student2 = await prisma.student.upsert({
        where: { name: 'Student 2' },
        update: {},
        create: {
          name: 'Student 2',
                  lang: 'spanish',
                  missionCommander: 'CarloGilmar',
                  enrollments: 1
        },
      });
      const student3 = await prisma.student.upsert({
        where: { name: 'Student 3' },
        update: {},
        create: {
          name: 'Student 3',
                  lang: 'spanish',
                  missionCommander: 'CarloGilmar',
                  enrollments: 2
        },
      });

    console.log('Create 3 explorers and 3 student');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();