const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const md = require('markdown-it')();

const achievementsDir = path.resolve(__dirname, '../../achievements');
const outputFile = path.resolve(__dirname, '../achievementsData.js');

const achievements = fs.readdirSync(achievementsDir)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const filePath = path.join(achievementsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    // Trim all string values in the data object
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'string') {
        data[key] = data[key].trim();
      }
    });
    return {
      id: file,
      ...data,
      content: md.render(content.trim())
    };
  });

const fileContent = `export default ${JSON.stringify(achievements, null, 2)};`;

fs.writeFileSync(outputFile, fileContent);

console.log('✅ Achievements data generated successfully!');
