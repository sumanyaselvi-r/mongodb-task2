//users

db.users.insertMany([{
  userid: 1,
  name: "Devi",
  email: "Devi@gmail.com",
  mentorid: 1,
},
{
  userid: 2,
  name: "Lalitha",
  email: "Lalitha@gmail.com",
  mentorid: 2,
},
{
  userid: 3,
  name: "Kavitha",
  email: "kavitha@gmail.com",
  mentorid: 4,
},
{
  userid: 4,
  name: "Raja",
  email: "Raja@gmail.com",
  mentorid: 1,
},
{
  userid: 5,
  name: "Jhon",
  email: "Jhon@gmail.com",
  mentorid: 4,
},
]);


//codekata


db.codekata.insertMany([{
  userid: 1,
  solved: 80,
},
{
  userid: 2,
  solved: 120,
},
{
  userid: 3,
  solved: 100,
},
{
  userid: 4,
  solved: 90,
},
{
  userid: 5,
  solved: 170,
},
]);



//topics



db.topics.insertMany([{
  topicid: 1,
  topic: "html",
  topic_date: new Date("10-oct-2020"),
},
{
  topicid: 2,
  topic: "css",
  topic_date: new Date("15-oct-2020"),
},
{
  topicid: 3,
  topic: "Javascript",
  topic_date: new Date("20-oct-2020"),
},
{
  topicid: 4,
  topic: "React",
  topic_date: new Date("25-oct-2020"),
},
{
  topicid: 5,
  topic: "NodeJs",
  topic_date: new Date("30-oct-2020"),
},
]);

//task


db.task.insertMany([{
  taskid: 1,
  topicid: 1,
  userid: 1,
  task: "html-task",
  date: new Date("8-oct-2020"),
  submitted: true,
},
{
  taskid: 2,
  topicid: 2,
  userid: 2,
  task: "css-task",
  date: new Date("13-oct-2020"),
  submitted: true,
},
{
  taskid: 3,
  topicid: 3,
  userid: 3,
  task: "Javascript-task",
  due_date: new Date("15-oct-2020"),
  submitted: false,
},
{
  taskid: 4,
  topicid: 4,
  userid: 4,
  task: "React-task",
  date: new Date("20-oct-2020"),
  submitted: false,
},
{
  taskid: 5,
  topicid: 5,
  userid: 5,
  task: "Node-task",
  date: new Date("25-oct-2020"),
  submitted: false,
},
]);


//attendence

db.attendance.insertMany([{
  userid: 1,
  topicid: 1,
  attended: false,
},
{
  userid: 2,
  topicid: 2,
  attended: true,
},
{
  userid: 3,
  topicid: 3,
  attended: true,
},
{
  userid: 4,
  topicid: 4,
  attended: false,
},
{
  userid: 5,
  topicid: 5,
  attended: true,
},
]);

//mentors


db.mentors.insertMany([{
  mentorid: 1,
  name: "Sai",
  email: "sai@gmail.com",
menteecount: 20,
},
{
  mentorid: 2,
  name: "Thir",
  email: "Thiru@gmail.com",
   menteecount: 10,
},
{
  mentorid: 3,
  name: "Vasanth",
  email: "Vasanth@gmail.com",
menteecount: 15,
},
{
  mentorid: 4,
  name: "Dev",
  email: "Dev@gmail.com",
menteecount: 20,
},
{
  mentorid: 5,
  name: "Raj",
  email: "Raj@gmail.com",
menteecount: 25,
},
]);

//company_drives

db.comapnydrives.insertMany([{
  userid: 1,
  drive_date: new Date("12-oct-2020"),
  company: "Google",
},
{
  userid: 1,
  drive_date: new Date("15-oct-2020"),
  company: "Amazon",
},
{
  userid: 2,
  drive_date: new Date("20-oct-2020"),
  company: "Hcl",
},
{
  userid: 3,
  drive_date: new Date("25-oct-2020"),
  company: "Tcs",
},
{
  userid: 4,
  drive_date: new Date("28-oct-2020"),
  company: "Wipro",
},
]);




