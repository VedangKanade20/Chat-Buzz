const users = [
  {
    _id: "1",
    firstName: "Emily",
    lastName: "Johnson",
    gender: "female",
    email: "emily.johnson@x.dummyjson.com",
    username: "emilys",
    picture: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    _id: "2",
    firstName: "James",
    lastName: "Smith",
    gender: "male",
    email: "james.smith@x.dummyjson.com",
    username: "jamess",
    picture: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    _id: "3",
    firstName: "Olivia",
    lastName: "Brown",
    gender: "female",
    email: "olivia.brown@x.dummyjson.com",
    username: "oliviab",
    picture: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    _id: "4",
    firstName: "Liam",
    lastName: "Jones",
    gender: "male",
    email: "liam.jones@x.dummyjson.com",
    username: "liamj",
    picture: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    _id: "5",
    firstName: "Ava",
    lastName: "Garcia",
    gender: "female",
    email: "ava.garcia@x.dummyjson.com",
    username: "avag",
    picture: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    _id: "6",
    firstName: "Noah",
    lastName: "Martinez",
    gender: "male",
    email: "noah.martinez@x.dummyjson.com",
    username: "noahm",
    picture: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    _id: "7",
    firstName: "Sophia",
    lastName: "Davis",
    gender: "female",
    email: "sophia.davis@x.dummyjson.com",
    username: "sophiad",
    picture: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    _id: "8",
    firstName: "Mason",
    lastName: "Rodriguez",
    gender: "male",
    email: "mason.rodriguez@x.dummyjson.com",
    username: "masonr",
    picture: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    _id: "9",
    firstName: "Isabella",
    lastName: "Wilson",
    gender: "female",
    email: "isabella.wilson@x.dummyjson.com",
    username: "isabellaw",
    picture: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    _id: "10",
    firstName: "Ethan",
    lastName: "Lopez",
    gender: "male",
    email: "ethan.lopez@x.dummyjson.com",
    username: "ethanl",
    picture: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    _id: "11",
    firstName: "Mia",
    lastName: "Anderson",
    gender: "female",
    email: "mia.anderson@x.dummyjson.com",
    username: "miaa",
    picture: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    _id: "12",
    firstName: "Alexander",
    lastName: "Thomas",
    gender: "male",
    email: "alexander.thomas@x.dummyjson.com",
    username: "alexandert",
    picture: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    _id: "13",
    firstName: "Charlotte",
    lastName: "Taylor",
    gender: "female",
    email: "charlotte.taylor@x.dummyjson.com",
    username: "charlottet",
    picture: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    _id: "14",
    firstName: "Benjamin",
    lastName: "Harris",
    gender: "male",
    email: "benjamin.harris@x.dummyjson.com",
    username: "benjaminh",
    picture: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    _id: "15",
    firstName: "Amelia",
    lastName: "Clark",
    gender: "female",
    email: "amelia.clark@x.dummyjson.com",
    username: "ameliac",
    picture: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    _id: "16",
    firstName: "Lucas",
    lastName: "Lewis",
    gender: "male",
    email: "lucas.lewis@x.dummyjson.com",
    username: "lucasl",
    picture: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    _id: "17",
    firstName: "Harper",
    lastName: "Lee",
    gender: "female",
    email: "harper.lee@x.dummyjson.com",
    username: "harperl",
    picture: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    _id: "18",
    firstName: "Henry",
    lastName: "Walker",
    gender: "male",
    email: "henry.walker@x.dummyjson.com",
    username: "henryw",
    picture: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    _id: "19",
    firstName: "Evelyn",
    lastName: "Hall",
    gender: "female",
    email: "evelyn.hall@x.dummyjson.com",
    username: "evelynh",
    picture: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    _id: "20",
    firstName: "Michael",
    lastName: "Young",
    gender: "male",
    email: "michael.young@x.dummyjson.com",
    username: "michaely",
    picture: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    _id: "21",
    firstName: "Ella",
    lastName: "Hernandez",
    gender: "female",
    email: "ella.hernandez@x.dummyjson.com",
    username: "ellah",
    picture: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    _id: "22",
    firstName: "Daniel",
    lastName: "King",
    gender: "male",
    email: "daniel.king@x.dummyjson.com",
    username: "danielk",
    picture: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    _id: "23",
    firstName: "Grace",
    lastName: "Wright",
    gender: "female",
    email: "grace.wright@x.dummyjson.com",
    username: "gracew",
    picture: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    _id: "24",
    firstName: "Matthew",
    lastName: "Scott",
    gender: "male",
    email: "matthew.scott@x.dummyjson.com",
    username: "matthews",
    picture: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    _id: "25",
    firstName: "Avery",
    lastName: "Green",
    gender: "female",
    email: "avery.green@x.dummyjson.com",
    username: "averyg",
    picture: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];
export default users;
// module.exports = users;
