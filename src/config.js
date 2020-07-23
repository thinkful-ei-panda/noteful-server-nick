module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin@localhost/noteful2',
  API_TOKEN: process.env.API_TOKEN
};