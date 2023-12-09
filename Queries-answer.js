
//1.Find all the topics and tasks which are thought in the month of October

//topics

db.topics.aggregate([
  {
    $match: {
      $and: [
        {
          $or: [
            {
              topic_date: { $gte: new Date("1-oct-2020") },
              topic_date: { $lte: new Date("31-oct-2020") },
            },
          ],
        },
      ],
    },
  },
]);

//tasks

db.task.aggregate([
  {
    $match: {
      $and: [
        {
          $or: [
            {
              date: { $gte: new Date("1-oct-2020") },
              date: { $lte: new Date("31-oct-2020") },
            },
          ],
        },
      ],
    },
  },
])


//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020



db.comapnydrives.find({
  $or: [
      { drive_date: { $gte: new Date("15-oct-2020") } },
      { drive_date: { $lte: new Date("31-0ct-2020") } },
  ],
  });



//3.Find all the company drives and students who are appeared for the placement.*/


db.comapnydrives.aggregate([{
  $lookup: {
      from: "users",
      localField: "userid",
      foreignField: "userid",
      as: "userinfo",
  },
},
{
  $project: {
      _id: 0,
      "userinfo.name": 1,
      company: 1,
      drive_date: 1,
      "userinfo.email": 1,
      "userinfo.userid": 1,
  },
},])

//4.Find the number of problems solved by the user in codekata

  db.codekata.find({}, { name: 1, problems: 1, _id: 0 });

//5.Find all the mentors with who has the mentee's count more than 15

db.mentors.aggregate({
  $match: {
    menteecount: { $gt: 15 },
  },
});


// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020



db.attendance.aggregate([{
  $lookup: {
      from: "topics",
      localField: "topicid",
      foreignField: "topicid",
      as: "topics",
  },
},
{
  $lookup: {
      from: "task",
      localField: "topicid",
      foreignField: "topicid",
      as: "tasks",
  },
},
{ $match: { $and: [{ attended: false }, { "tasks.submitted": false }] } },
{
  $match: {
      $and: [{
              $or: [
                  { "topics.topic_date": { $gte: new Date("15-oct-2020") } },
                  { "topics.topic_date": { $lte: new Date("31-oct-2020") } },
              ],
          },
          {
              $or: [
                  { "tasks.date": { $gte: new Date("15-oct-2020") } },
                  { "tasks.date": { $lte: new Date("31-oct-2020") } },
              ],
          },
      ],
  },
},
{
  $count: "no.of.users",
},
]);