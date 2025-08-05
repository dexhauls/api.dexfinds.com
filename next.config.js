module.exports = {
  async rewrites() {
    return [
      {
        source: '/db/ali',
        destination: '/api/db/ali',
      },
      {
        source: '/db/dex',
        destination: '/api/db/dex',
      },
    ];
  },
};
