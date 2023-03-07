'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user',
      [
        {
          id: 1,
          email: 'codeit@gmail.com',
          gender: 'Male',
          password:
            '$2a$10$cjZ.ZOOISbolUl05A4hDXO2btgmf8XH.oxzesekQNDwmmYwGgudB2',
          role: 'SuperAdmin',
          nick: 'codeit'
        }
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'movies',
      [
        {
          id: 2,
          title: 'Avatar',
          author: 'Gloriq',
          img: ' KQIRHGOQ35.webp',
          article:
            "Avatar (marketed as James Cameron's Avatar) is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez,[6] and Sigourney Weaver. It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.[a] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi, a humanoid species indigenous to Pandora. The title of the film refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora.[10]\r\n\r\nDevelopment of Avatar began in 1994, when James Cameron wrote an 80-page treatment for the film.[11][12] Filming was supposed to take place after the completion of Cameron's 1997 film Titanic, for a planned release in 1999;[13] however, according to Cameron, the necessary technology was not yet available to achieve his vision of the film.[14] Work on the language of the Na'vi began in 2005, and Cameron began developing the screenplay and fictional universe in early 2006.[15][16] Avatar was officially budgeted at $237 million, due to the groundbreaking array of new visual effects Cameron achieved in cooperation with Weta Digital in Wellington.[4] Other estimates put the cost at between $280 million and $310 million for production and at $150 million for promotion.[17][18][19] The film made extensive use of new motion capture filming techniques and was released for traditional viewing, 3D viewing (using the RealD 3D, Dolby 3D, XpanD 3D, and IMAX 3D formats), and \"4D\" experiences in selected South Korean theaters.[20]",
          time: '7.03.2023 г.'
        },
        {
          id: 3,
          title: 'Lord Of  The Rings',
          author: 'Vesko',
          img: ' 5IKRN5ABEG.webp',
          article:
            "The Lord of the Rings is an epic[1] high-fantasy novel[a] by English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.[2]\r\n\r\nThe title refers to the story's main antagonist,[b] the Dark Lord Sauron, who, in an earlier age, created the One Ring to rule the other Rings of Power given to Men, Dwarves, and Elves, in his campaign to conquer all of Middle-earth. From homely beginnings in the Shire, a hobbit land reminiscent of the English countryside, the story ranges across Middle-earth, following the quest to destroy the One Ring, seen mainly through the eyes of the hobbits Frodo, Sam, Merry and Pippin.\r\n\r\nAlthough often called a trilogy, the work was intended by Tolkien to be one volume of a two-volume set along with The Silmarillion.[3][T 3] For economic reasons, The Lord of the Rings was published over the course of a year from 29 July 1954 to 20 October 1955 in three volumes[3][4] titled The Fellowship of the Ring, The Two Towers, and The Return of the King. The work is divided internally into six books, two per volume, with several appendices of background material. Some later editions print the entire work in a single volume, following the author's original intent.\r\n\r\nTolkien's work, after an initially mixed reception by the literary establishment, has been the subject of extensive analysis of its themes and origins. Influences on this earlier work, and on the story of The Lord of the Rings, include philology, mythology, Christianity, earlier fantasy works, and his own experiences in the First World War.",
          time: '7.03.2023 г.'
        },
        {
          id: 4,
          title: 'Terminator',
          author: 'Delyan',
          img: ' SDM9YO1SLD.webp',
          article:
            "The Terminator is a 1984 American science fiction action film directed by James Cameron. It stars Arnold Schwarzenegger as the Terminator, a cyborg assassin sent back in time from 2029 to 1984 to kill Sarah Connor (Linda Hamilton), whose unborn son will one day save mankind from extinction by Skynet, a hostile artificial intelligence in a post-apocalyptic future. Kyle Reese (Michael Biehn) is a soldier sent back in time to protect Sarah. The screenplay is credited to Cameron and producer Gale Anne Hurd, while co-writer William Wisher Jr. received an \"additional dialogue\" credit.\r\n\r\nCameron devised the premise of the film from a fever dream he experienced during the release of his first film, Piranha II: The Spawning (1982), in Rome, and developed the concept in collaboration with Wisher. He sold the rights to the project to fellow New World Pictures alumna Hurd on the condition that she would produce the film only if he were to direct it; Hurd eventually secured a distribution deal with Orion Pictures, while executive producers John Daly and Derek Gibson of Hemdale Film Corporation were instrumental in setting up the film's financing and production. Originally approached by Orion for the role of Reese, Schwarzenegger agreed to play the title character after befriending Cameron. Filming, which took place mostly at night on location in Los Angeles, was delayed because of Schwarzenegger's commitments to Conan the Destroyer (1984), during which Cameron found time to work on the scripts for Rambo: First Blood Part II (1985) and Aliens (1986). The film's special effects, which included miniatures and stop-motion animation, were created by a team of artists led by Stan Winston and Gene Warren Jr.\r\n\r\nDefying low pre-release expectations, The Terminator topped the United States box office for two weeks, eventually grossing $78.3 million against a modest $6.4 million budget. It is credited with launching Cameron's film career and solidifying Schwarzenegger's status as a leading man. The film's success led to a franchise consisting of several sequels, a television series, comic books, novels and video games. In 2008, The Terminator was selected by the Library of Congress for preservation in the United States National Film Registry.",
          time: '7.03.2023 г.'
        },
        {
          id: 5,
          title: 'Star Wars',
          author: 'Dancho',
          img: ' 1UMOAB8MFD.webp',
          article:
            'Star Wars is an American epic space opera[1] multimedia franchise created by George Lucas, which began with the eponymous 1977 film[b] and quickly became a worldwide pop culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.[c] Star Wars is one of the highest-grossing media franchises of all time.\r\n\r\nThe original film (Star Wars), retroactively subtitled Episode IV: A New Hope (1977), was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to the series to direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. This led to a sequel trilogy, consisting of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019).\r\n\r\nAll nine films of the "Skywalker Saga" were nominated for Academy Awards, with wins going to the first two releases. Together with the theatrical live action "anthology" films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equated to over US$10 billion, which makes it the second-highest-grossing film franchise of all time.[3][4] Additional upcoming films are in the works, including an untitled movie from Taika Waititi and Rogue Squadron directed by Patty Jenkins, both currently without release dates.[5]',
          time: '7.03.2023 г.'
        },
        {
          id: 6,
          title: 'Indiana Jones',
          author: 'Gosho',
          img: ' 530KAG9P8Q.webp',
          article:
            'Indiana Jones is an American media franchise based on the adventures of Dr. Henry Walton "Indiana" Jones, Jr., a fictional professor of archaeology, that began in 1981 with the film Raiders of the Lost Ark. In 1984, a prequel, The Temple of Doom, was released, and in 1989, a sequel, The Last Crusade. A fourth film followed in 2008, titled The Kingdom of the Crystal Skull. A fifth film, titled The Dial of Destiny, is in production and is scheduled to be released in 2023. The series was created by George Lucas and stars Harrison Ford as Indiana Jones. The first four films were directed by Steven Spielberg, who worked closely with Lucas during their production.\r\n\r\nIn 1992, the franchise expanded to a television series with The Young Indiana Jones Chronicles, portraying the character in his childhood and youth, and including adventures with his parents.\r\n\r\nMarvel Comics began publishing The Further Adventures of Indiana Jones in 1983, and Dark Horse Comics gained the comic book rights to the character in 1991. Novelizations of the films have been published, as well as many novels with original adventures, including a series of German novels by Wolfgang Hohlbein, twelve novels set before the films published by Bantam Books, and a series set during the character\'s childhood inspired by the television show.\r\n\r\nNumerous Indiana Jones video games have been released since 1982.',
          time: '7.03.2023 г.'
        },
        {
          id: 1,
          title: 'Gladiaotr',
          author: 'Tsvetan',
          img: ' TYZ18IZ7DJ.webp',
          article:
            "Gladiator is a 2000 epic historical drama film directed by Ridley Scott and written by David Franzoni, John Logan, and William Nicholson. The film was co-produced and released by DreamWorks Pictures and Universal Pictures. DreamWorks Pictures distributed the film in North America while Universal Pictures released it internationally through United International Pictures. It stars Russell Crowe, Joaquin Phoenix, Connie Nielsen, Ralf Möller, Oliver Reed (in his final role), Djimon Hounsou, Derek Jacobi, John Shrapnel, Richard Harris, and Tommy Flanagan. Crowe portrays Roman general Maximus Decimus Meridius, who is betrayed when Commodus, the ambitious son of Emperor Marcus Aurelius, murders his father and seizes the throne. Reduced to slavery, Maximus becomes a gladiator and rises through the ranks of the arena to avenge the murders of his family and his emperor.\r\n\r\nInspired by Daniel P. Mannix's 1958 book Those About to Die (formerly titled The Way of the Gladiator), the film's script, initially written by Franzoni, was acquired by DreamWorks and Ridley Scott signed on to direct the film. Principal photography, which began in January 1999 and wrapped up in May of that year, was known to have a set of problems due to the script being unfinished. Several of the cast complained about the writing quality throughout the nineteen week shoot in Fort Ricasoli, Malta, forcing many rewrites. Complications of the film's production were made worse when Reed died of a heart attack before production wrapped. British post-production company The Mill, who constructed the film's computer-generated imagery effects, had to create a digital body double for the remaining scenes involving Reed's character Proximo.\r\n\r\nDespite its troubled production, Gladiator was anticipated to be one of the year's most successful films. On its release, the film grossed over $460.5 million worldwide, becoming the second highest-grossing film of 2000 behind Mission: Impossible 2. Critics praised the acting (particularly Crowe's and Phoenix's performances), Scott's direction, visuals, screenplay, action sequences, musical score, and the production values, although its dark and brooding tone was criticized. Winning numerous accolades, Gladiator won five Academy Awards at the 73rd Academy Awards, including Best Picture and Best Actor for Crowe. Gladiator both revitalized or established the careers of its cast and crew, particularly elevating Crowe to",
          time: '7.03.2023 г.'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
