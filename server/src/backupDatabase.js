/**
 * Simple database backup script — dumps the full MySQL database to a
 * timestamped .sql file using the system's `mysqldump` tool.
 *
 * Requires mysqldump on your PATH — it ships with any standard MySQL
 * installation (including MySQL Workbench installs on Windows).
 *
 * Run with: node src/backupDatabase.js
 */
require('dotenv').config();
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BACKUP_DIR = path.join(__dirname, '..', 'backups');

function run() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `travelbharat-backup-${timestamp}.sql`;
  const filepath = path.join(BACKUP_DIR, filename);

  const {
    DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD
  } = process.env;

  const cmd = `pg_dump -h ${DB_HOST} -p ${DB_PORT} -U ${DB_USER} -d ${DB_NAME} -f "${filepath}"`;
    console.log(`Backing up "${DB_NAME}" to ${filepath} ...`);

  try {
    // pg_dump reads the password from PGPASSWORD rather than a command flag
    execSync(cmd, { shell: true, env: { ...process.env, PGPASSWORD: DB_PASSWORD } });
    const stats = fs.statSync(filepath);
    console.log(`✅ Backup complete (${(stats.size / 1024 / 1024).toFixed(2)} MB).`);
  } catch (err) {
    console.error('❌ Backup failed:', err.message);
    process.exit(1);
  }
}

run();