const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

async function wipe() {
  console.log('🧹 Limpiando tabla User para forzar re-seed...');
  try {
    await sql`DELETE FROM "User";`;
    console.log('✅ Usuarios eliminados con éxito.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al limpiar:', error);
    process.exit(1);
  }
}

wipe();
