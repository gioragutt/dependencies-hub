const entriesIn = (folder, ids) => ids.map(id => `${folder}/${id}`);

module.exports = {
  docs: {
    'Dependencies Hub': ['introduction', 'architecture', 'motivation'],
    Design: [
      {
        type: 'category',
        label: 'Database',
        items: entriesIn('database', ['neo4j', 'dh', 'sample']),
      },
    ],
    Meta: ['styleguide']
  },
};
