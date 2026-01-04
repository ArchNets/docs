const fs = require('fs');

// Read both files
const admin = JSON.parse(fs.readFileSync('admin.json', 'utf8'));
const archnets = JSON.parse(fs.readFileSync('archnets.json', 'utf8'));

// Merge paths
const mergedPaths = { ...archnets.paths, ...admin.paths };

// Merge definitions
const mergedDefinitions = { ...archnets.definitions, ...admin.definitions };

// Create merged object
const merged = {
  ...archnets,
  paths: mergedPaths,
  definitions: mergedDefinitions
};

// Write the merged result back to archnets.json
fs.writeFileSync('archnets.json', JSON.stringify(merged, null, 2));
console.log('Successfully merged admin.json into archnets.json');
console.log(`Total paths: ${Object.keys(mergedPaths).length}`);
console.log(`Total definitions: ${Object.keys(mergedDefinitions).length}`);
