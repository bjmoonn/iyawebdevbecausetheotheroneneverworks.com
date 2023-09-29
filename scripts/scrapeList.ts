const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const url = 'https://iyawebdev.com';

axios.get(url).then((response: { data: any; }) => {
  const $ = cheerio.load(response.data);
  const assignments: { link: any; week: any; type: any; dueDate: any; notes: any; }[] = [];

  $('table tr').each((index: any, element: any) => {
    const link = $(element).find('td:nth-child(3) a').attr('href');
    const week = $(element).find('td:nth-child(1)').text().trim();
    const type = $(element).find('td:nth-child(3)').text().trim();
    const dueDate = $(element).find('td:nth-child(5)').text().trim();
    const notes = $(element).find('td:nth-child(6)').text().trim();
    
    if (link) {
      assignments.push({ link, week, type, dueDate, notes });
    }
  });

  const filePath = path.resolve(__dirname, 'assignmentList.json');
  fs.writeFileSync(filePath, JSON.stringify(assignments, null, 2));
});