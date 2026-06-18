const data = await  (await fetch('../data/resume.json')).json();
console.log(data);