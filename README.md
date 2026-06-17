# Resume.js

## Project Overview:
A resume page built with vanilla JavaScript that turns a JSON file into a dynamic, shareable web application to expand your online presence.

---

## Why I Built This
Since actively showing up in the Hampton Roads developer community, I have had the opportunity to meet members navigating layoffs and the challenges of job searching while trying to find their next role.

I wanted to create something useful for both employed and unemployed developers. This project is an opportunity to expand an individual's online presence beyond a static PDF or a LinkedIn profile.

I also wanted to honestly assess where I am with my JavaScript knowledge and sharpen my technical skills with something the community could benefit from.

The goal of building resume.js is to develop a deeper understanding of how JavaScript stores, organizes, and manipulates data and the importance of how data is structured within an application.

---

## Project Structure
**Initial project setup**
```
resume-js/
├── css/
│   └── style.css 
├── data/
│   └── resume.json 
├── src/
│   └── index.mjs
├── index.html
├── package.json
└── README.md  
```

### Why This Structure?
- **Data is separated** - update the `resume.json` file and the page updates automatically with no need to touch the HTML file.
- **CSS lives in its own separate folder** - styling is isolated from logic and structure.
- **Uses `.mjs` extension** - this makes it clear to the browsers that the file uses import/export syntax.

---

## Project Milestones 

### Day 1 — June 15, 2026
Set up project folder, created project files, and pushed initial commit to GitHub.

**Decisions made:**
- Organized files into folders by concern — `css/`, `data/`, `src/`
- Used `.mjs` extension for ES Module support
- Initialized `package.json` for project configuration

**Commit:** `"initial project setup"`

---

### Day 2 — June 16, 2026
Structured the `data/resume.json` file.

**JSON rules practiced:**
- Double quotes required around all keys and string values
- Arrays `[]` hold lists - skills, experience, projects, education, certifications, and achievements
- Objects `{}` hold related details - each skill category, job, project, certification, and achievement
- No trailing commas on the last item in an array or object

**Data structure:**
- `contact` 
- `summary`
- `skills` 
- `experience` 
- `projects`
- `education`
- `certifications`
- `achievements`

**Commit:** `"add resume data to json"`

---