const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const assignmentList = require('./assignmentList.json');

const scrapeAssignment = async (assignment: any) => {
  try {
    const response = await axios.get(assignment.link);
    const $ = cheerio.load(response.data);

    const title = $('selector-for-title').text().trim();
    const content = $('selector-for-content').html().trim();

    return { ...assignment, title, content };
  } catch (error) {
    console.error(`Error scraping assignment from ${assignment.link}:`, error);
  }
};

const assignments = [];
for (const assignment of assignmentList) {
  const assignmentData = await scrapeAssignment(assignment);
  assignments.push(assignmentData);
}

const filePath = path.resolve(__dirname, 'scrapedAssignments.json');
fs.writeFileSync(filePath, JSON.stringify(assignments, null, 2));