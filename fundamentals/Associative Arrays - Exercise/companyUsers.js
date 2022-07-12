function companyUsers(arr) {
    let res = {};
    for (let line of arr) {
      let [company, employs] = line.split(" -> ");
      if (!res.hasOwnProperty(company)) {
        res[company] = new Set();
      }
      if (!res.hasOwnProperty(employs)) {
        res[company].add(employs);
      }
    }
    let sorted = Object.entries(res);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
   
    for (let [company, students] of sorted) {
      console.log(company);
      let s = Array.from(students);
      for (let student of s) {
        console.log(`-- ${student}`);
      }
    }
  }

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])