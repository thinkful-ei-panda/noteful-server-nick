module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.NODE_ENV || 'postgresql://DreamMachine@localhost/DreamMachine',
  API_TOKEN: process.env.API_TOKEN
};