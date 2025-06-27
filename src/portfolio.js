const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'ASIM ZIA',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'ASIM ZIA',
  role: 'Software Engineer | .NET Developer',
  description:
    `Experienced Software Engineer with over 2 years in developing comprehensive software solutions and system integration.
Skilled in web development (ASP.NET CORE, ASP.NET MVC, WEB FORMS, Bootstrap, Java Script) and API development (REST)
using ASP.NET Web API and .NET Core Web API. Proficient in MS SQL databases, project management, and technical
documentation. Adept at collaborating with teams, understanding requirements, and leveraging cutting-edge technologies,
also passionate about AI.`,
  resume: 'https://drive.google.com/file/d/1ePtDoo6iWnUPJmsXUdwPjsIX3RvgWSC6/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/asim-zia565',
    github: 'https://github.com/RaJPuT-AsiM/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Bill Estimator',
    description:
      `Developed a Bill Estimator service that allows consumers to estimate their electricity bills. Utilized MS SQL stored procedures and functions to implement the business logic, and developed an API to expose the service for integration. The service was seamlessly integrated into Power mobile apps, enabling users to estimate their bills. This solution functions as a lightweight version of the Integrated Billing System (IBS), which processes billing across Pakistan.`,
      // stack: ['ASP.NET Web API', 'C#', 'MS SQL Server','ASP.NET MVC','SSMS'],
    // sourceCode: 'https://github.com',
    livePreview: '',
  },
  {
    name: 'e-Operations',
    description:
      `Developed e-Operations, a role-based enterprise portal, CRM to digitally manage and streamline customer-related processes across Pakistan. It is a core system that enables customer relationship management by handling for new
connection applications, complaint & service request tracking, workflow automation for field operations,dashboard and reports for decision makers, integrated other modules like AMR, GIS and mobile app like MEPCO Smart, a consumer mobile app. eOps ensures transparency, accountability, and faster turnaround time in customer service,reducing manual workloads and bringing standardization across all electric supply companies (DISCOs) .`,
    // stack: ['ASP.NET Web API', 'C#', 'MS SQL Server','ASP.NET MVC','SSMS'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://eops.pitc.com.pk/',
  },
  {
    name: 'MEPCO Smart',
    description:
      `Contributed to the development and backend integration of MEPCO Smart, a mobile application designed for electricity consumers to view billing history, lodge complaints, track application status, and monitor electricity consumption. Developed secure and scalable APIs, ensuring seamless data flow between the app and MEPCO’s central systems.`,
    // stack: ['ASP.NET Web API', 'C#', 'MS SQL Server','ASP.NET MVC','SSMS'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://play.google.com/store/apps/details?id=com.mepco.smart',
  },
  {
    name: 'Citizen Monitor',
    description:
      `Developed Citizen Monitor web portal for field operations to act against electricity theft implementing real-time data visualization and reporting features using RESTful API’s with ASP.NET CORE WEB API.`,
      // stack: ['ASP.NET Web API', 'C#', 'MS SQL Server','ASP.NET MVC','SSMS'],
    // sourceCode: 'https://github.com',
    livePreview: 'http://117.20.28.178:8044/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'ASP.NET MVC',
  'ASP.NET CORE ',
  'RESTFUL API’S',
  'MS SQL SERVER',
  'ENTITY FRAMEWORK',
  'WINDOWS SERVICES',
  'FIREBASE PUSH NOTIFICATION',
  'BOOTSTRAP',
]

const tools = [
  'Visual Studio',
  'SSMS',
  'POSTMAN',
  'GIT Hub',
  'MS Office',
  'Entity Framework Core Tools',
  'Adobe XD',
  'NuGet Package Manager',
  'Camunda Modeler',
  'Google Firebase'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'asimziabhatti565@gmail.com',
  mobile:'+92 333 429 2465'
}

export { header, about, projects, skills, contact,tools }
