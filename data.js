
/**
 * STREAMX DATA MODEL (UPGRADED)
 * Supports:
 * - Movies (single video)
 * - Series (multiple episodes)
 * - Categories
 */

const videos = [

  // ================= SERIES =================
  {
    id: "s1",
    type: "series",
    title: "India's Got Latent",
    description: "Samay Raina and the guest judges hilariously critique the untapped, undeniably entertaining latent talents of aspiring performers, testing their self-awareness with a unique scoring system.",
    category: "India's Got Latent",
    thumbnail: "images/thumbnail.jpg",

    episodes: [
      {
        id: "s1e1",
        title: "Episode 1 - Ft. Raftaar",
        embed: "https://abyssplayer.com/c2nOruokR"
      },
      {
        id: "s1e2",
        title: "Episode 2 - Ft. GamerFleet & Joke Singh & Karan Singh Magic.",
        embed: "https://abyssplayer.com/M1Rr0w3TN"
      },
      {
        id: "s1e3",
        title: "Episode 3 - Ft. Urfi Javed & Ashish Solanki & Yashraj",
        embed: "https://abyssplayer.com/kNDnc93LG"
      },
      {
        id: "s1e4",
        title: "Episode 4 - Ft. Maheep Singh & Amit Tandon & Neeti Palta",
        embed: "https://abyssplayer.com/4UDD5rREH"
      },
      {
        id: "s1e5",
        title: "Episode 5 - Ft. Ft. Kunal Kamra & Atul Khatri",
        embed: "https://abyssplayer.com/SdK-TiFn2"
      },
      {
        id: "s1e6",
        title: "Episode 6 - Ft. Vipul Goyal & Joke Singh",
        embed: "https://abyssplayer.com/0UsmW9-6h"
      },
      {
        id: "s1e7",
        title: "Episode 7 - Ft. Ravi Gupta & Rahgir & Saurabh.",
        embed: "https://abyssplayer.com/n-cZdwqq7I"
      },
      {
        id: "s1e8",
        title: "Episode 8 - Ft. Poonam Pandey & Vidit Chess & Vivek Magic.",
        embed: "https://abyssplayer.com/1fCnwG9Fe"
      },
      {
        id: "s1e9",
        title: "Episode 9 - Ft. Deepak Kalal & Manan Desai & stanboss",
        embed: "https://abyssplayer.com/7sFVWZMvGj"
      },
      {
        id: "s1e10",
        title: "Episode 10 - Ft. Raghu Ram & Tanmay Bhat & Sidwarrier",
        embed: "https://abyssplayer.com/dzzu4PBSu"
      },
      {
        id: "s1e11",
        title: "Episode 11 - Ft. Bharti TV & Life Of Limbachiyaas & Tony Kakkar",
        embed: "https://abyssplayer.com/0p1Mljnlf"
      },
      {
        id: "s1e12",
        title: "Episode 12 - Ft. Rakhi Sawant & Ashish Solanki & Maheep Singh",
        embed: "https://abyssplayer.com/DJA0mcFoC"
      },
    ]
  },

  {
    id: "mh1",
    type: "series",
    title: "Money Heist - Season 01",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    category: "Money Heist",
    thumbnail: "images/mh3.png",

    episodes: [
      {
        id: "mh1e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/vuON_GcKe"
      },
      {
        id: "mh1e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/czqvkF1xC"
      },
      {
        id: "mh1e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/6FVqN_Nhs-"
      },
      {
        id: "mh1e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/jHkpcKNWN"
      },
      {
        id: "mh1e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/6GHpim861"
      },
      {
        id: "mh1e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/On-adyebq"
      },
      {
        id: "mh1e7",
        title: "Episode 7 ",
        embed: "https://abyssplayer.com/tQjgmOies"
      },
      {
        id: "mh1e8",
        title: "Episode 8 ",
        embed: "https://abyssplayer.com/S_IHxBPjz"
      },
      {
        id: "mh1e9",
        title: "Episode 9 ",
        embed: "https://abyssplayer.com/0rQqALw3vo"
      },
      {
        id: "mh1e10",
        title: "Episode 10 ",
        embed: "https://abyssplayer.com/jPxISK3no"
      },
      {
        id: "mh1e11",
        title: "Episode 11 ",
        embed: "https://abyssplayer.com/tC_3GkUwA"
      },
      {
        id: "mh1e12",
        title: "Episode 12 ",
        embed: "https://abyssplayer.com/YMej8PK0f"
      },
      {
        id: "mh1e13",
        title: "Episode 13 ",
        embed: "https://abyssplayer.com/ra5G7b9mS"
      },
    ]
  },

  {
    id: "s2",
    type: "series",
    title: "India's Got Latent - Member's Only",
    description: "Samay Raina and the guest judges hilariously critique the untapped, undeniably entertaining latent talents of aspiring performers, testing their self-awareness with a unique scoring system.",
    category: "India's Got Latent",
    thumbnail: "images/thumb.png",

    episodes: [
      {
        id: "s2e1",
        title: "Episode 1 - Deleted Footage - Episode 1-3",
        embed: "https://abyssplayer.com/-YWXUWg1xG"
      },
      {
        id: "s2e2",
        title: "Episode 2 - Ft. Arpit Bala",
        embed: "https://abyssplayer.com/QyKZ23wCJy"
      },
      {
        id: "s2e3",
        title: "Episode 3 - Bonus EP 2 - Ft. Badshah & Siddhant Chaturvedi",
        embed: "https://abyssplayer.com/TIxvJXW8V"
      },
      {
        id: "s2e4",
        title: "Episode 4 - Bonus EP 3 - Ft. Avika Gor & Devesh Dixit & Shashwat Maheshwari",
        embed: "https://abyssplayer.com/stOJ94M2Z"
      },
      {
        id: "s2e5",
        title: "Episode 5 - Bonus EP 4 - Ft. SeedheMaut & Madhur Virli & Kaustubh Agarwal",
        embed: "https://abyssplayer.com/9r1TpacU3"
      },
      {
        id: "s2e6",
        title: "Episode 6 - Rohan Joshi & Sahil Shah & ChalhitraTalks",
        embed: "https://abyssplayer.com/FnRrXjALW"
      },
      {
        id: "s2e7",
        title: "Episode 7 - Bonus EP 6 - Ft. Ranveer Allahbadia & Ashish Chanchlani & Rebel Kid",
        embed: "https://abyssplayer.com/9RrqRf0if"
      },
      {
        id: "s2e8",
        title: "Episode 8 - Discarded EP 1 - Ft. Aakash Gupta & Anubhav Singh Bassi.",
        embed: "https://abyssplayer.com/y-5cKqw8a"
      },
      {
        id: "s2e9",
        title: "Episode 9 - Deepak Kalal - Deleted Moments",
        embed: "https://abyssplayer.com/O29v9DrGP"
      },
      {
        id: "s2e10",
        title: "Episode 10 - Raghu Ram - Deleted Moments",
        embed: "https://abyssplayer.com/bNs36qANf"
      }
    ]
  },

  {
    id: "mh2",
    type: "series",
    title: "Money Heist - Season 02",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    category: "Money Heist",
    thumbnail: "images/mh1.png",

    episodes: [
      {
        id: "mh2e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/Z_ephWmOw"
      },
      {
        id: "mh2e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/FvB7x_gJ5"
      },
      {
        id: "mh2e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/VWD12J9s3"
      },
      {
        id: "mh2e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/y7hXgY333"
      },
      {
        id: "mh2e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/rQ5ZVieW7"
      },
      {
        id: "mh2e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/PgFQWrwcA"
      },
      {
        id: "mh2e7",
        title: "Episode 7 ",
        embed: "https://abyssplayer.com/M0O7Y4nnE"
      },
      {
        id: "mh2e8",
        title: "Episode 8 ",
        embed: "https://abyssplayer.com/UQMTWmqB8"
      },
      {
        id: "mh2e9",
        title: "Episode 9 ",
        embed: "https://abyssplayer.com/ybX8E_VlT"
      },
    ]
  },

  {
    id: "mh3",
    type: "series",
    title: "Money Heist - Season 03",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    category: "Money Heist",
    thumbnail: "images/mh2.png",

    episodes: [
      {
        id: "mh3e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/yjDiaI7PO"
      },
      {
        id: "mh3e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/oBlSXz8fJq"
      },
      {
        id: "mh3e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/bmoVbNJVi"
      },
      {
        id: "mh3e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/FE_UCGXaC"
      },
      {
        id: "mh3e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/rIlyvhdJq"
      },
      {
        id: "mh3e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/kHT_4y50_0"
      },
      {
        id: "mh3e7",
        title: "Episode 7 ",
        embed: "https://abyssplayer.com/8W8iJ2hWd"
      },
      {
        id: "mh3e8",
        title: "Episode 8 ",
        embed: "https://abyssplayer.com/EQAsZDZZP"
      },
    ]

  },

  {
    id: "mh4",
    type: "series",
    title: "Money Heist - Season 04",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    category: "Money Heist",
    thumbnail: "images/mh4.png",

    episodes: [
      {
        id: "mh4e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/27plf0hwq"
      },
      {
        id: "mh4e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/nhzhn9lN7"
      },
      {
        id: "mh4e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/jwbOuinYS"
      },
      {
        id: "mh4e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/kpumz_XGk"
      },
      {
        id: "mh4e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/p1xxE700Y"
      },
      {
        id: "mh4e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/DEAAgGBAv"
      },
      {
        id: "mh4e7",
        title: "Episode 7 ",
        embed: "https://abyssplayer.com/RSAGkRKd9"
      },
      {
        id: "mh4e8",
        title: "Episode 8 ",
        embed: "https://abyssplayer.com/rruuG49d2"
      },
    ]

  },
  {
    id: "mh5v1",
    type: "series",
    title: "Money Heist - Season 05 Vol 01",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    category: "Money Heist",
    thumbnail: "images/mh.png",

    episodes: [
      {
        id: "mh5v1e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/nKubyFRHC"
      },
      {
        id: "mh5v1e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/qSxMUtcGF"
      },
      {
        id: "mh5v1e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/BjZiLZo0u"
      },
      {
        id: "mh5v1e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/NFj51s8TL"
      },
      {
        id: "mh5v1e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/ep9FATXth"
      },
    ]

  },

  {
    id: "mh5v2",
    type: "series",
    title: "Money Heist - Season 05 Vol 02",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    category: "Money Heist",
    thumbnail: "images/mh5.png",

    episodes: [
      {
        id: "mh5v2e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/DeUBGanzk"
      },
      {
        id: "mh5v2e7",
        title: "Episode 7 ",
        embed: ""
      },
      {
        id: "mh5v2e8",
        title: "Episode 8 ",
        embed: "https://abyssplayer.com/D0c3Ls189"
      },
      {
        id: "mh5v2e9",
        title: "Episode 9 ",
        embed: "https://abyssplayer.com/QdCLkNhEHc"
      },
      {
        id: "mh5v2e10",
        title: "Episode 10 ",
        embed: "https://abyssplayer.com/jOZr75M8d"
      },
    ]

  },

  {
    id: "ph1",
    type: "series",
    title: "Panchayat - Season 01",
    description: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar Pradesh.",
    category: "Panchayat",
    thumbnail: "images/p1.png",

    episodes: [
      {
        id: "ph1e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/u6i0pGlSn"
      },
      {
        id: "ph1e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/vVk0PoqNs"
      },
      {
        id: "ph1e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/cV56Tozjs"
      },
      {
        id: "ph1e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/O7VtoBmuq"
      },
      {
        id: "ph1e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/At3g7aBsD"
      },
      {
        id: "ph1e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/VjXF9E7bS"
      },
      {
        id: "ph1e7",
        title: "Episode 7 ",
        embed: "https://abyssplayer.com/zZ5eaoUkT"
      },
      {
        id: "ph1e8",
        title: "Episode 8 ",
        embed: "https://abyssplayer.com/ZIatxyTrp"
      },
    ]

  },

   {
    id: "ph2",
    type: "series",
    title: "Panchayat - Season 02",
    description: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar Pradesh.",
    category: "Panchayat",
    thumbnail: "images/p2.png",

    episodes: [
      {
        id: "ph2e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/GtrxGkyVH"
      },
      {
        id: "ph2e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/7DYNjv_Hp"
      },
      {
        id: "ph2e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/bayseBB3c"
      },
      {
        id: "ph2e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/D6ta4OXeI"
      },
      {
        id: "ph2e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/-EdL2Cu5c"
      },
      {
        id: "ph2e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/7GekpDJNs"
      },
      {
        id: "ph2e7",
        title: "Episode 7 ",
        embed: "https://abyssplayer.com/slMTLTF54"
      },
      {
        id: "ph2e8",
        title: "Episode 8 ",
        embed: "https://abyssplayer.com/kPW0OI7U_"
      },
    ]

  },

  {
    id: "ph3",
    type: "series",
    title: "Panchayat - Season 03",
    description: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar Pradesh.",
    category: "Panchayat",
    thumbnail: "images/p3.png",

    episodes: [
      {
        id: "ph3e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/aFTxRtt3b"
      },
      {
        id: "ph3e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/Gx7YpLWP8"
      },
      {
        id: "ph3e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/cnTYu8ZbA"
      },
      {
        id: "ph3e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/0ajErs-cg"
      },
      {
        id: "ph3e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/FUChsttFO"
      },
      {
        id: "ph3e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/4JwIF9wSO"
      },
      {
        id: "ph3e7",
        title: "Episode 7 ",
        embed: "https://abyssplayer.com/AHYztUslE"
      },
      {
        id: "ph3e8",
        title: "Episode 8 ",
        embed: "https://abyssplayer.com/99wXN4Ecx"
      },
    ]

  },

  {
    id: "ph4",
    type: "series",
    title: "Panchayat - Season 04",
    description: "Panchayat is a comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a panchayat office in a remote village of Uttar Pradesh.",
    category: "Panchayat",
    thumbnail: "images/p4.png",

    episodes: [
      {
        id: "ph4e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/5GGr8c6CU"
      },
      {
        id: "ph4e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/0xmT00vb6"
      },
      {
        id: "ph4e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/EPctb7rG1"
      },
      {
        id: "ph4e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/lRx9FRSSS"
      },
      {
        id: "ph4e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/udPEjjUdn"
      },
      {
        id: "ph4e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/mEvtwsE6S"
      },
      {
        id: "ph4e7",
        title: "Episode 7 ",
        embed: "https://abyssplayer.com/HEf30K-VS"
      },
      {
        id: "ph4e8",
        title: "Episode 8 ",
        embed: "https://abyssplayer.com/vPVh3LCru"
      },
    ]

  },

  {
    id: "gl1",
    type: "series",
    title: "Gullak - Season 01",
    description: "Set in quaint by-lanes in the heart of India, Gullak is a collection of disarming and relatable tales of the Mishra family.",
    category: "Gullak",
    thumbnail: "images/gl1.png",

    episodes: [
      {
        id: "gl1e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/cnX0CjMpZ"
      },
      {
        id: "gl1e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/LoeEHasdM"
      },
      {
        id: "gl1e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/ZouoY9wD9"
      },
      {
        id: "gl1e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/-tBL4tXdt"
      },
      {
        id: "gl1e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/bC8xOuI3q"
      },
    ]

  },

  {
    id: "gl2",
    type: "series",
    title: "Gullak - Season 02",
    description: "Set in quaint by-lanes in the heart of India, Gullak is a collection of disarming and relatable tales of the Mishra family.",
    category: "Gullak",
    thumbnail: "images/gl2.png",

    episodes: [
      {
        id: "gl2e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/JTBZ1l3V_"
      },
      {
        id: "gl2e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/f3rRoAX8f"
      },
      {
        id: "gl2e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/HAkzp8nhd"
      },
      {
        id: "gl2e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/zPxjHZ2Wv"
      },
      {
        id: "gl2e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/WHGWADbzG"
      },
    ]

  },

  {
    id: "gl3",
    type: "series",
    title: "Gullak - Season 03",
    description: "Set in quaint by-lanes in the heart of India, Gullak is a collection of disarming and relatable tales of the Mishra family.",
    category: "Gullak",
    thumbnail: "images/gl3.png",

    episodes: [
      {
        id: "gl3e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/APW8LRagS"
      },
      {
        id: "gl3e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/4NULETpem"
      },
      {
        id: "gl3e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/zoYXMvBjJ"
      },
      {
        id: "gl3e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/CcAQVgxdq3"
      },
      {
        id: "gl3e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/F-veDW6o1"
      },
    ]

  },

  {
    id: "gl4",
    type: "series",
    title: "Gullak - Season 04",
    description: "Set in quaint by-lanes in the heart of India, Gullak is a collection of disarming and relatable tales of the Mishra family.",
    category: "Gullak",
    thumbnail: "images/gl4.png",

    episodes: [
      {
        id: "gl4e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/7Bf6yqnsv"
      },
      {
        id: "gl4e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/zl3FI-ENS"
      },
      {
        id: "gl4e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/WihDpPefQ"
      },
      {
        id: "gl4e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/FcO0twjhG"
      },
      {
        id: "gl4e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/H2Lt2KGcd"
      },
    ]

  },

  {
    id: "tk1",
    type: "series",
    title: "Taaza Khabar - Season 01",
    description: "A Sanitation worker, how he stumbles upon magical powers which leads to a riveting new ride for the man, and how it stirs his humble life.",
    category: "Taaza Khabar",
    thumbnail: "images/tk1.png",

    episodes: [
      {
        id: "tk1e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/vMaRB1ZNY"
      },
      {
        id: "tk1e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/4xry0q3JJ"
      },
      {
        id: "tk1e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/idvrJDaiW"
      },
      {
        id: "tk1e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/nD3bCWP0K"
      },
      {
        id: "tk1e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/wNscE_z9k"
      },
      {
        id: "tk1e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/UfDNVOEfh"
      },
    ]

  },

  {
    id: "tk2",
    type: "series",
    title: "Taaza Khabar - Season 02",
    description: "A Sanitation worker, how he stumbles upon magical powers which leads to a riveting new ride for the man, and how it stirs his humble life.",
    category: "Taaza Khabar",
    thumbnail: "images/tk2.png",

    episodes: [
      {
        id: "tk2e1",
        title: "Episode 1 ",
        embed: "https://abyssplayer.com/nI2uW3L3W"
      },
      {
        id: "tk2e2",
        title: "Episode 2 ",
        embed: "https://abyssplayer.com/GGgL1PFVP"
      },
      {
        id: "tk2e3",
        title: "Episode 3 ",
        embed: "https://abyssplayer.com/WpoEwIP5Z"
      },
      {
        id: "tk2e4",
        title: "Episode 4 ",
        embed: "https://abyssplayer.com/UP6tmLVm-"
      },
      {
        id: "tk2e5",
        title: "Episode 5 ",
        embed: "https://abyssplayer.com/R2vXVtvHy"
      },
      {
        id: "tk2e6",
        title: "Episode 6 ",
        embed: "https://abyssplayer.com/CxA98fdyd"
      },
    ]

  },


  {
    id: "tf1",
    type: "series",
    title: "The Freelancer - Season 01",
    description: "Based on the book 'A Ticket To Syria', Avinash Kamath, an ex-cop turned mercenary, takes up the daunting task of rescuing Aliya, a newly married girl trapped in war-torn Syria against the backdrop of growing ISIS terrorism.",
    category: "The Freelancer",
    thumbnail: "images/tf1.png",

    episodes: [
      {
        id: "tf1e1",
        title: "Episode 1-4 ",
        embed: "https://abyssplayer.com/C3YhQqzvh"
      },
      {
        id: "tf1e2",
        title: "Episode 5-7 ",
        embed: "https://abyssplayer.com/jBvlwYH_C"
      },
    ]

  },

  
  // ================= MOVIES =================

  {
    id: "m1",
    type: "movie",
    title: "Iron Man",
    description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    category: "Marvel",
    thumbnail: "images/m4.png",
    embed: "https://abyssplayer.com/NiZO6rrhi"
  },

  {
    id: "m2",
    type: "movie",
    title: "The Incredible Hulk",
    description: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    category: "Marvel",
    thumbnail: "images/m6.png",
    embed: "https://abyssplayer.com/z7DzfQory"
  },

  {
    id: "m3",
    type: "movie",
    title: "Iron Man 2",
    description: "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
    category: "Marvel",
    thumbnail: "images/m5.png",
    embed: "https://abyssplayer.com/FrOH7asfF"
  },

  {
    id: "m4",
    type: "movie",
    title: "Thor",
    description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
    category: "Marvel",
    thumbnail: "images/m7.jpeg",
    embed: "https://abyssplayer.com/HLymIlUwH"
  },

  {
    id: "m5",
    type: "movie",
    title: "Captain America: The First Avenger",
    description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a Super-Soldier serum. But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization.",
    category: "Marvel",
    thumbnail: "images/m9.png",
    embed: "https://abyssplayer.com/T_PTd3HCx"
  },

  {
    id: "m6",
    type: "movie",
    title: "Iron Man 3",
    description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    category: "Marvel",
    thumbnail: "images/m8.png",
    embed: "https://abyssplayer.com/tDCKhDIVuk"
  },


  {
    id: "m7",
    type: "movie",
    title: "Spider-Man: Into the Spider-Verse",
    description: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    category: "Marvel",
    thumbnail: "images/m1.png",
    embed: "https://abyssplayer.com/2FHlFa7tP"
  },

  {
    id: "m8",
    type: "movie",
    title: "Spider-Man: No Way Home",
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    category: "Marvel",
    thumbnail: "images/m2.png",
    embed: "https://abyssplayer.com/Cc0aMnwcB"
  },

  {
    id: "m9",
    type: "movie",
    title: "Spider-Man: Far from Home",
    description: "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.",
    category: "Marvel",
    thumbnail: "images/m3.png",
    embed: "https://abyssplayer.com/61dijuynj"
  },

  {
    id: "m10",
    type: "movie",
    title: "Captain America: Civil War",
    description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    category: "Marvel",
    thumbnail: "images/m10.png",
    embed: "https://abyssplayer.com/lSRRlVIRO"
  },

  {
    id: "v1",
    type: "movie",
    title: "More Coming Soon",
    description: "More Coming Soon",
    category: "More",
    thumbnail: "https://placehold.co/400x225/png?text=Coming+Soon",
    embed: ""
  },

];