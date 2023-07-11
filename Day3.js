const resume = {
    "name": "Balachandar",
    "role": "Full Stack Web Developer",
    "contact": {
      "email": "chrisbala8888@gmail.com",
      "phone": "7984604989",
      "address": "16 A, shlok Appartment, Ahmedabad"
    },
    "skills": [
      "JavaScript",
      "Typing",
      "Tally",
      "XL"
    ],
    "experience": [
      {
        "position": "Research Associate",
        "company": "Azure Knowledge Corporation",
        "location": "Azure General, Ahmedabad",
        "startDate": "July 2022",
        "endDate": "July 2023"
      },
      {
        "position": "Supervisor",
        "company": "Ram Dev Garments",
        "location": "Ahmedabad",
        "startDate": "May 2016",
        "endDate": "July 2022",
        "responsibilities": [
          "Supervise and coordinate garment production activities to meet production targets and quality standards",
          "Manage a team of production workers, providing training, guidance, and performance feedback",
          "Ensure compliance with safety regulations and implement measures to prevent workplace accidents",
          "Monitor and control production costs, including labor, materials, and equipment",
          "Conduct quality checks at various stages of production to maintain high product standards",
          "Collaborate with the design and development team to optimize production processes and improve efficiency",
          "Maintain inventory levels and coordinate with the procurement department for timely supply of materials",
          "Resolve production issues and address any technical problems that arise",
          "Prepare production reports, analyze data, and make recommendations for process improvement"
        ]
      }
    ],
    "education": [
      {
        "Qualification": "12th in Mechanical Department",
        "School": "Govt Boys Higher Secondary School",
        "location": "Virudachalam, Tamilnadu",
        "completionDate": "April 2013"
      }
    ],
    "certifications": [
      "Computer Networking"
    ],
    "languages": [
      "Tamil",
      "English",
      "Hindi"
    ],
    "interests": [
      "Coding",
      "Content Creator",
      "Videography",
      "Chess",
      "Traveling"
    ]
  };
  
  // Using for loop
  for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
      console.log(key + ": " + JSON.stringify(resume[key]));
    }
  }
  
  // Using forin loop
  for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
      console.log(key + ": " + JSON.stringify(resume[key]));
    }
  }
  
  // Using for of loop
  const resumeArray = Object.entries(resume);
  for (let [key, value] of resumeArray) {
    console.log(key + ": " + JSON.stringify(value));
  }
  
  // Using forEach method
  Object.entries(resume).forEach(([key, value]) => {
    console.log(key + ": " + JSON.stringify(value));
  });
  
