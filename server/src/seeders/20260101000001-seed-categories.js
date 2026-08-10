module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    await queryInterface.bulkInsert('categories', [
      { name: 'Heritage', slug: 'heritage', icon: 'landmark', created_at: now, updated_at: now },
      { name: 'Nature', slug: 'nature', icon: 'trees', created_at: now, updated_at: now },
      { name: 'Adventure', slug: 'adventure', icon: 'mountain', created_at: now, updated_at: now },
      { name: 'Religious', slug: 'religious', icon: 'temple', created_at: now, updated_at: now }
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
