// Data by chatgpt
localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@gmail.com",
    password: "123",
     taskCounts: { 
      active: 2, 
      newTask: 1, 
      completed: 1, failed: 0 
  },
    tasks: [
      {
        title: "UI Design",
        description: "Create login page UI",
        date: "2026-02-25",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNumber: { active: 1, newTask: 1, completed: 0, failed: 0 }
      },
      {
        title: "Fix Navbar",
        description: "Resolve responsive issue",
        date: "2026-02-26",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskNumber: { active: 2, newTask: 0, completed: 0, failed: 0 }
      },
      {
        title: "Test API",
        description: "Check login API response",
        date: "2026-02-27",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNumber: { active: 0, newTask: 0, completed: 1, failed: 0 }
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@gmail.com",
    password: "123",
    taskCounts: {
     active: 1, 
     newTask: 3, 
     completed: 1, 
     failed: 0 
  },
    tasks: [
      {
        title: "Landing Page",
        description: "Design homepage layout",
        date: "2026-02-25",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNumber: { active: 1, newTask: 1, completed: 0, failed: 0 }
      },
      {
        title: "Bug Fix",
        description: "Fix login crash",
        date: "2026-02-26",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskNumber: { active: 0, newTask: 0, completed: 0, failed: 1 }
      },
      {
        title: "Write Docs",
        description: "Prepare API documentation",
        date: "2026-02-27",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNumber: { active: 0, newTask: 0, completed: 1, failed: 0 }
      }
    ]
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@gmail.com",
    password: "123",
    taskCounts: {
     active: 1, 
     newTask: 0, 
     completed: 4, 
     failed: 1 
  },
    tasks: [
      {
        title: "Dashboard UI",
        description: "Create admin dashboard",
        date: "2026-02-25",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNumber: { active: 1, newTask: 1, completed: 0, failed: 0 }
      },
      {
        title: "Optimize Code",
        description: "Improve performance",
        date: "2026-02-26",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskNumber: { active: 2, newTask: 0, completed: 0, failed: 0 }
      },
      {
        title: "Unit Testing",
        description: "Write test cases",
        date: "2026-02-27",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNumber: { active: 0, newTask: 0, completed: 1, failed: 0 }
      }
    ]
  },
  {
    id: 4,
    firstName: "Rohan",
    email: "employee4@gmail.com",
    password: "123",
    taskCounts: {
     active: 1, 
     newTask: 0, 
     completed: 6, 
     failed: 1 
  },
    tasks: [
      {
        title: "Logo Design",
        description: "Create brand logo",
        date: "2026-02-25",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNumber: { active: 1, newTask: 1, completed: 0, failed: 0 }
      },
      {
        title: "Fix CSS",
        description: "Resolve styling bugs",
        date: "2026-02-26",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskNumber: { active: 0, newTask: 0, completed: 0, failed: 1 }
      },
      {
        title: "Deploy App",
        description: "Deploy to production",
        date: "2026-02-27",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskNumber: { active: 0, newTask: 0, completed: 1, failed: 0 }
      }
    ]
  },
  {
    id: 5,
    firstName: "Ananya",
    email: "employee5@gmail.com",
    password: "123",
    taskCounts: {
     active: 2, 
     newTask: 1, 
     completed: 4, 
     failed: 1 
  },
    tasks: [
      {
        title: "Research",
        description: "Study new tech stack",
        date: "2026-02-25",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskNumber: { active: 1, newTask: 1, completed: 0, failed: 0 }
      },
      {
        title: "Backend API",
        description: "Build authentication API",
        date: "2026-02-26",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskNumber: { active: 2, newTask: 0, completed: 0, failed: 0 }
      },
      {
        title: "Fix Errors",
        description: "Resolve server issues",
        date: "2026-02-27",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskNumber: { active: 0, newTask: 0, completed: 0, failed: 1 }
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    // console.log(employees, admin)
    return {employees, admin}

}