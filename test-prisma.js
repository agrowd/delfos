const { PrismaClient } = require('@prisma/client');
const { Pool, neonConfig } = require('@neondatabase/serverless');
const { PrismaNeon } = require('@prisma/adapter-neon');
const ws = require('ws');

neonConfig.webSocketConstructor = ws;

async function test() {
  console.log('🔍 Probando inicialización de Prisma + Neon Adapter...');
  console.log('URL:', process.env.DATABASE_URL ? 'Definida' : 'Indefinida');
  
  try {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    console.log('✅ Pool creado.');
    
    const adapter = new PrismaNeon(pool);
    console.log('✅ Adapter creado.');
    
    const prisma = new PrismaClient({ adapter });
    console.log('✅ Cliente Prisma creado.');
    
    console.log('📡 Intentando conectar...');
    const count = await prisma.post.count();
    console.log('🎉 Conexión exitosa. Cantidad de posts:', count);
    
    await prisma.$disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error en la prueba:', error);
    process.exit(1);
  }
}

test();
