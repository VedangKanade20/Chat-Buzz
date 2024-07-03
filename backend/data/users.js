const users = [
  {
    _id: "1",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1247.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3b7e",
      },
    },
    username: "reilly_oreilly8",
    email: "marshall_blick@hotmail.com",
    password: "$2b$10$sZRfyCp2k7O4H0CGXwSlgOUqqxGOPjDVl3sXPxrpUKjNUGz1U0oF.",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "2",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/545.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3b84",
      },
    },
    username: "macy.christiansen",
    email: "ora59@hotmail.com",
    password: "$2b$10$frkYJEFyFBOLfSH9DWGW0uOFqQ2zllJH.fhHTSr.GqCoH2udNI3lq",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: 3,
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/916.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3b7b",
      },
    },
    username: "dorothea_hagenes19",
    email: "alexanne46@yahoo.com",
    password: "$2b$10$wefbyWZfjmbjI5uQCSrnvudaDLyQh.lQcRoZfQY5j2hW7C5RJJxOC",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "4",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/336.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3b72",
      },
    },
    username: "allene_powlowski",
    email: "retta.johns@hotmail.com",
    password: "$2b$10$lMZAPOTnMdy3ldptIiK9b./kAsZ01o2ZujvOsA2ZtGuk2aeskKDwO",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "5",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1126.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3b87",
      },
    },
    username: "shanny_stark32",
    email: "toy40@hotmail.com",
    password: "$2b$10$oaaQiCMT/qDxB9Z1LXUX4.55OKutOg30PjU5wC70sHmyruFGQ1uii",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "6",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/181.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3b90",
      },
    },
    username: "jayce76",
    email: "keeley.schulist59@hotmail.com",
    password: "$2b$10$spWkSrEO6uVX5h7EpWXwYewfpMaU9mYMrX3WrPazcog0kc90cebAu",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "7",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1009.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3bed",
      },
    },
    username: "river.schiller",
    email: "nick.strosin@yahoo.com",
    password: "$2b$10$XXdjv84xET5asORVJnBBteUGkXCHHCyULOe5qf0a0EUwZUvQ0bOTm",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "8",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/88.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3bf9",
      },
    },
    username: "kody_stamm86",
    email: "abigail.muller88@yahoo.com",
    password: "$2b$10$sQmYGWcvqrZ9OcxGTgruWe6mwygSJo0y5HO4BR7Nt1qR6MuDwok2G",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "9",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/405.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3bf0",
      },
    },
    username: "paolo_moen",
    email: "itzel.powlowski74@hotmail.com",
    password: "$2b$10$ZNP32PLeCFBIpQOI1xFZOe3WBlDGQtKhD/UCRzm2JqlLHJJpl6qkq",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "10",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/19.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3bf3",
      },
    },
    username: "tamara_zemlak90",
    email: "rosalinda95@hotmail.com",
    password: "$2b$10$ZzMPyQgwxOnbiHhftR6bGeKW/ykKGv7i1NY2jCo.yhNBc30VSfkF2",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "11",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/778.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3bf6",
      },
    },
    username: "alycia_jones",
    email: "buddy_champlin@yahoo.com",
    password: "$2b$10$KdeHLpdb9sydhN55twxDlO4v3DKRanqLYv1xq0f3GE4KCkfG/oyim",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "12",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/703.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3bff",
      },
    },
    username: "randy_treutel60",
    email: "guadalupe.hahn@yahoo.com",
    password: "$2b$10$sm6LBNTXlTBBOM6uF2OCHOf669hjyOF2Ko9b1OqQVbg2r3MBfCdkS",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "13",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/442.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3c05",
      },
    },
    username: "pat28",
    email: "isac.tremblay@yahoo.com",
    password: "$2b$10$dClnfTIwj6fLkzcksPm0/.HQsXkpe8/6kBRv8Uycfye4nLmWl4c4y",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
  {
    _id: "14",
    avatar: {
      url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
      localPath: "",
      _id: {
        $oid: "667db56c282e68b48b1e3b81",
      },
    },
    username: "ryann63",
    email: "amelia39@yahoo.com",
    password: "$2b$10$K1tm9LoSAvtccepxtBu2pOnEICxEA6Q4xLUGq.3np8HWL.CFPqVNi",
    loginType: "EMAIL_PASSWORD",
    isEmailVerified: true,
  },
];

//export default users;
module.exports = users;


// const users = [
//   {
//     _id: "1",
//     firstName: "Emily",
//     lastName: "Johnson",
//     gender: "female",
//     email: "emily.johnson@x.dummyjson.com",
//     username: "emilys",
//     picture: "https://randomuser.me/api/portraits/women/1.jpg"
//   },
//   {
//     _id: "2",
//     firstName: "James",
//     lastName: "Smith",
//     gender: "male",
//     email: "james.smith@x.dummyjson.com",
//     username: "jamess",
//     picture: "https://randomuser.me/api/portraits/men/2.jpg"
//   },
//   {
//     _id: "3",
//     firstName: "Olivia",
//     lastName: "Brown",
//     gender: "female",
//     email: "olivia.brown@x.dummyjson.com",
//     username: "oliviab",
//     picture: "https://randomuser.me/api/portraits/women/3.jpg"
//   },
//   {
//     _id: "4",
//     firstName: "Liam",
//     lastName: "Jones",
//     gender: "male",
//     email: "liam.jones@x.dummyjson.com",
//     username: "liamj",
//     picture: "https://randomuser.me/api/portraits/men/4.jpg"
//   },
//   {
//     _id: "5",
//     firstName: "Ava",
//     lastName: "Garcia",
//     gender: "female",
//     email: "ava.garcia@x.dummyjson.com",
//     username: "avag",
//     picture: "https://randomuser.me/api/portraits/women/5.jpg"
//   },
//   {
//     _id: "6",
//     firstName: "Noah",
//     lastName: "Martinez",
//     gender: "male",
//     email: "noah.martinez@x.dummyjson.com",
//     username: "noahm",
//     picture: "https://randomuser.me/api/portraits/men/6.jpg"
//   },
//   {
//     _id: "7",
//     firstName: "Sophia",
//     lastName: "Davis",
//     gender: "female",
//     email: "sophia.davis@x.dummyjson.com",
//     username: "sophiad",
//     picture: "https://randomuser.me/api/portraits/women/7.jpg"
//   },
//   {
//     _id: "8",
//     firstName: "Mason",
//     lastName: "Rodriguez",
//     gender: "male",
//     email: "mason.rodriguez@x.dummyjson.com",
//     username: "masonr",
//     picture: "https://randomuser.me/api/portraits/men/8.jpg"
//   },
//   {
//     _id: "9",
//     firstName: "Isabella",
//     lastName: "Wilson",
//     gender: "female",
//     email: "isabella.wilson@x.dummyjson.com",
//     username: "isabellaw",
//     picture: "https://randomuser.me/api/portraits/women/9.jpg"
//   },
//   {
//     _id: "10",
//     firstName: "Ethan",
//     lastName: "Lopez",
//     gender: "male",
//     email: "ethan.lopez@x.dummyjson.com",
//     username: "ethanl",
//     picture: "https://randomuser.me/api/portraits/men/10.jpg"
//   },
//   {
//     _id: "11",
//     firstName: "Mia",
//     lastName: "Anderson",
//     gender: "female",
//     email: "mia.anderson@x.dummyjson.com",
//     username: "miaa",
//     picture: "https://randomuser.me/api/portraits/women/11.jpg"
//   },
//   {
//     _id: "12",
//     firstName: "Alexander",
//     lastName: "Thomas",
//     gender: "male",
//     email: "alexander.thomas@x.dummyjson.com",
//     username: "alexandert",
//     picture: "https://randomuser.me/api/portraits/men/12.jpg"
//   },
//   {
//     _id: "13",
//     firstName: "Charlotte",
//     lastName: "Taylor",
//     gender: "female",
//     email: "charlotte.taylor@x.dummyjson.com",
//     username: "charlottet",
//     picture: "https://randomuser.me/api/portraits/women/13.jpg"
//   },
//   {
//     _id: "14",
//     firstName: "Benjamin",
//     lastName: "Harris",
//     gender: "male",
//     email: "benjamin.harris@x.dummyjson.com",
//     username: "benjaminh",
//     picture: "https://randomuser.me/api/portraits/men/14.jpg"
//   },
//   {
//     _id: "15",
//     firstName: "Amelia",
//     lastName: "Clark",
//     gender: "female",
//     email: "amelia.clark@x.dummyjson.com",
//     username: "ameliac",
//     picture: "https://randomuser.me/api/portraits/women/15.jpg"
//   },
//   {
//     _id: "16",
//     firstName: "Lucas",
//     lastName: "Lewis",
//     gender: "male",
//     email: "lucas.lewis@x.dummyjson.com",
//     username: "lucasl",
//     picture: "https://randomuser.me/api/portraits/men/16.jpg"
//   },
//   {
//     _id: "17",
//     firstName: "Harper",
//     lastName: "Lee",
//     gender: "female",
//     email: "harper.lee@x.dummyjson.com",
//     username: "harperl",
//     picture: "https://randomuser.me/api/portraits/women/17.jpg"
//   },
//   {
//     _id: "18",
//     firstName: "Henry",
//     lastName: "Walker",
//     gender: "male",
//     email: "henry.walker@x.dummyjson.com",
//     username: "henryw",
//     picture: "https://randomuser.me/api/portraits/men/18.jpg"
//   },
//   {
//     _id: "19",
//     firstName: "Evelyn",
//     lastName: "Hall",
//     gender: "female",
//     email: "evelyn.hall@x.dummyjson.com",
//     username: "evelynh",
//     picture: "https://randomuser.me/api/portraits/women/19.jpg"
//   },
//   {
//     _id: "20",
//     firstName: "Michael",
//     lastName: "Young",
//     gender: "male",
//     email: "michael.young@x.dummyjson.com",
//     username: "michaely",
//     picture: "https://randomuser.me/api/portraits/men/20.jpg"
//   },
//   {
//     _id: "21",
//     firstName: "Ella",
//     lastName: "Hernandez",
//     gender: "female",
//     email: "ella.hernandez@x.dummyjson.com",
//     username: "ellah",
//     picture: "https://randomuser.me/api/portraits/women/21.jpg"
//   },
//   {
//     _id: "22",
//     firstName: "Daniel",
//     lastName: "King",
//     gender: "male",
//     email: "daniel.king@x.dummyjson.com",
//     username: "danielk",
//     picture: "https://randomuser.me/api/portraits/men/22.jpg"
//   },
//   {
//     _id: "23",
//     firstName: "Grace",
//     lastName: "Wright",
//     gender: "female",
//     email: "grace.wright@x.dummyjson.com",
//     username: "gracew",
//     picture: "https://randomuser.me/api/portraits/women/23.jpg"
//   },
//   {
//     _id: "24",
//     firstName: "Matthew",
//     lastName: "Scott",
//     gender: "male",
//     email: "matthew.scott@x.dummyjson.com",
//     username: "matthews",
//     picture: "https://randomuser.me/api/portraits/men/24.jpg"
//   },
//   {
//     _id: "25",
//     firstName: "Avery",
//     lastName: "Green",
//     gender: "female",
//     email: "avery.green@x.dummyjson.com",
//     username: "averyg",
//     picture: "https://randomuser.me/api/portraits/women/25.jpg"
//   }
// ];
