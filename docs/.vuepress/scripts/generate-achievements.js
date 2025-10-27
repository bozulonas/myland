const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const achievementsDir = path.resolve(__dirname, '../../achievements');
const outputFile = path.resolve(__dirname, '../achievementsData.js');

const achievements = fs.readdirSync(achievementsDir)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const filePath = path.join(achievementsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      id: file,
      ...data
    };
  });

const fileContent = `export default ${JSON.stringify(achievements, null, 2)};`;

fs.writeFileSync(outputFile, fileContent);

console.log('✅ Achievements data generated successfully!');
