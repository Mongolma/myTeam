function htmlRenderer(response) {
  return `
  - ${response.name}
  - ${response.position}
  - Id: ${response.id}
  -GitHub: ${response.username})
  - School: ${response.school}
  - Office: ${response.office}
  `;
}

module.exports = { htmlRenderer };
