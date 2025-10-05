


  const admin = [{
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }];

const employees = [
  {
    "id": 1,
    "firstname": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Sales Report",
        "description": "Compile the sales data for Q1 and prepare a report.",
        "date": "2025-09-24",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Client Meeting",
        "description": "Meeting with client ABC regarding new requirements.",
        "date": "2025-09-15",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Update CRM",
        "description": "Update customer details in the CRM system.",
        "date": "2025-09-20",
        "category": "Data Entry"
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 2,
    "firstname": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Code Review",
        "description": "Review pull requests submitted by the development team.",
        "date": "2025-09-23",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team Standup",
        "description": "Daily standup meeting with the engineering team.",
        "date": "2025-09-22",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Deploy Update",
        "description": "Deploy latest update to staging environment.",
        "date": "2025-09-21",
        "category": "Deployment"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Fix Bug #102",
        "description": "Resolve login session timeout issue.",
        "date": "2025-09-24",
        "category": "Bug Fix"
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 2, "completed": 1, "failed": 1 }
  },
  {
    "id": 3,
    "firstname": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Inventory Check",
        "description": "Audit the warehouse inventory levels.",
        "date": "2025-09-24",
        "category": "Inventory"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Supplier Call",
        "description": "Call supplier for shipment updates.",
        "date": "2025-09-19",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Update Catalog",
        "description": "Update product catalog for fall season.",
        "date": "2025-09-21",
        "category": "Catalog"
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 4,
    "firstname": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design Mockups",
        "description": "Create UI mockups for the new mobile app.",
        "date": "2025-09-25",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Logo Update",
        "description": "Redesign the company logo.",
        "date": "2025-09-18",
        "category": "Branding"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prototype Review",
        "description": "Review prototype with stakeholders.",
        "date": "2025-09-24",
        "category": "Prototyping"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "UX Testing",
        "description": "Conduct usability testing on website.",
        "date": "2025-09-20",
        "category": "Testing"
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 2, "completed": 1, "failed": 1 }
  },
  {
    "id": 5,
    "firstname": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Marketing Plan",
        "description": "Draft marketing plan for next quarter.",
        "date": "2025-09-24",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Ad Campaign",
        "description": "Launch ad campaign on social media.",
        "date": "2025-09-17",
        "category": "Advertising"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "SEO Optimization",
        "description": "Update SEO for the website blog section.",
        "date": "2025-09-21",
        "category": "SEO"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Email Newsletter",
        "description": "Prepare content for October email newsletter.",
        "date": "2025-09-23",
        "category": "Email Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Event Planning",
        "description": "Plan the upcoming customer engagement event.",
        "date": "2025-09-22",
        "category": "Event"
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 2, "completed": 1, "failed": 2 }
  }
];

  



  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  } 
  export const getLocalStorage=()=>{
   const employees=JSON.parse(localStorage.getItem('employees'))
   const admin=JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}

  } 

