// const PDFDocument = require("pdfkit");
// const fs = require("fs");



export function coverLetterAutomator(name, company, mission, position) {
  return `Dear ${name},
  
  I am a highly creative, goal-oriented and puzzle-loving coding aficionado, who finds immense satisfaction in constructing projects from the ground up, which is why I am thrilled at the prospect of joining ${company} as a ${position}. 
  I acquired my foundations at App Academy, where I spent 1,000+ mastering a primary stack consisting of: Ruby, Ruby on Rails, Javascript and React/Redux, along with other frameworks such as: jQuery, AJAX, SQL, PostgreSQL, Node.js, Git, AWS, Heroku and of course HTML5 & CSS/SASS, both of which I can dominate with ease. 
  You can witness all the aforementioned skills in action here:  https://denizen-confidant.herokuapp.com
  As a result of my technical prowess coupled with my tenacity for excellence in my work, I’m confident I’d be a valuable asset as a ${position} at ${company}. 
  ${company}’s mission to ${mission} is one I’d love to contribute to as a member of a team that values varying perspectives and inclusivity, and as such, I look forward to speaking with you about any potential next steps.

Thank you for your consideration.

Best regards,

Nahuel Gorosito
`;
}

const cover = coverLetterAutomator(
  "Nuno Pereira",
  "Holy Grail",
  "find optimal solutions for impactful R&D and optimization problems",
  "kingpin"
);
console.log(cover);
