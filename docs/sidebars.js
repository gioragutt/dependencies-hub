function category({ label, path, items }) {
  path = path || label.toLowerCase();
  return {
    type: 'category',
    label,
    items: items.map(id => `${path}/${id}`)
  };
}

module.exports = {
  docs: {
    'Dependencies Hub': ['introduction', 'architecture', 'motivation'],
    Design: [
      category({
        label: 'Database',
        items: ['neo4j', 'dh', 'sample'],
      }),
      category({
        label: 'Scraping',
        items: ['tfs', 'artifactory', 'process', 'configuration', 'possible-caveats'],
      }),
    ],
    Meta: ['styleguide']
  },
};
