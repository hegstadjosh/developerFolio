/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Josh Hegstad",
  title: "Hi, I'm Josh",
  subTitle: emoji(
    "Computer Science student at Columbia University 🚀 with experience in cybersecurity, Augmented Reality development, and full-stack programming. I'm passionate about tech, currently building AR-AI projects with Python, Java, C, C#, SQL, and Javascript. (Oh, and Cursor AI!)"
  ),
  //resumeLink: "https://drive.google.com/file/d/1iTDxKDLM4FqjnNTgOqokgVbE2EfrV9Iq/view?usp=sharing", // You can add your resume link here if desired
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hegstadjosh",
  linkedin: "https://www.linkedin.com/in/joshua-hegstad-976ba2242/", // Add your LinkedIn if desired
  //gmail: "j.hegstad@columbia.edu",
  // Other social media links can be added here
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "EXPLORING TECH STACKS",
  skills: [
    emoji("⚡ Develop Augmented Reality applications for practical applications like astronaut guidance"),
    emoji("⚡ Build and implement cybersecurity solutions and automation tools"),
    emoji("⚡ Create full-stack applications with focus on database management, cloud servers, and API integration")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fa-brands fa-react"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "C, C#, C++",
      fontAwesomeClassname: "fa-solid fa-c"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Columbia University",
      logo: require("./assets/images/columbiaLogo.png"), // You'll need to add this image
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2023 - 2026",
      desc: "Computer Science Major, Applied Math Minor. 4.0 GPA in CS, Dean's List.",
      descBullets: [
        "Advanced Programming        - C, Unix, TCP/IP, C++",
        "Intro to Databases          - SQL, Python, HTML",
        "Data Structures             - Java",
        "VR & AR \t\t\t - JS/TS AR development, research analysis",
        "Discrete Math, Linear Algebra, Probability & Statistics",
        "UI Design, 3D UI Design, Applied Stats Computing (Next Semester)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer Intern",
      company: "AMLAH - Columbia Build Lab",
      companylogo: require("./assets/images/CBLLogo.png"),
      date: "Jan 2025 - Present",
      desc: "Agile development with a small team of engineers: AWS, React, and misc. web dev. as needed",
      footerLink: [
        {
          name: "Company Website",
          url: "https://columbiabuildlab.com"
        }
      ]
    },
    {
      role: "Software Engineer",
      company: "SPMH Fund",
      // companylogo: require("./assets/images/CBLLogo.jpg"),
      date: "Dec 2024 - Present",
      desc: "This is a self-guided project integrating LLM knowledge management with the Snap Spectacles 24 AR glasses. I've set up a web server and frontend (served through Flask) as the knowledge management center, which connects to a multi-faceted information capture/saving/retrieval app on the Spectacles.",
      footerLink: [
        {
          name: "Project Details",
          url: "#"
        }
      ]
    },
    {
      role: "Cybersecurity and Field Automation Intern",
      company: "Hess Corporation",
      companylogo: require("./assets/images/hessLogo.png"),
      date: "Summer 2024",
      desc: "Full-time internship combining cybersecurity audits and field automation initiatives in Minot, ND.",
      descBullets: [
        "Combined hundreds of overlapping policies & recommendations into a unified dashboard",
        "Built training board for field automation workers",
        "Conducted on-site network/device assessments",
        "Built a JS/Python MS Copilot API to adhere to data security policies while using LLMs",
        "Developed Excel x Python tool to automate textual analysis on hundreds of rows",
        "Proposed and set up a self-populating knowledge graph to centralize company info"
      ],
      footerLink: [
        {
          name: "Company Website",
          url: "https://www.hess.com/"
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "AR, AI, Web Dev...",
  projects: [
    {
      image: require("./assets/images/hccLogo.webp"),
      projectName: "Homebrew Computer Club",
      projectDesc: "Founded experimental tech club focused on rapid prototyping and demo-driven development",
      footerLink: [
        {
          name: "Club Website",
          url: "https://hcc.nyc"
        }
      ]
    },
    {
      image: require("./assets/images/suitsLogo.webp"),
      projectName: "2025 NASA SUITS Challenge",
      projectDesc: "Leading SWE team to develop Augmented Reality guidance systems for astronauts (Hololens 2, Snap Spectacles)",
      footerLink: [
        {
          name: "Last Year's Project",
          url: "https://github.com/columbiaspace/SUITS-23-24-HMD"
        }
      ]
    },
    {
      image: require("./assets/images/arMusic.webp"),
      projectName: "AR Music Training",
      projectDesc: "Music training application for Snap AR glasses using TypeScript/JavaScript",
      footerLink: [
        {
          name: "In Progress",
          url: "https://github.com/jx2518/DontFretUI_New"
        }
      ]
    },
    {
      image: require("./assets/images/investorgoggles.webp"), // You'll need to add this image
      projectName: "Investor Goggles",
      projectDesc: "Integrating AR glasses with personal knowledge management for real-time investor insights.",
      footerLink: [
        {
          name: "In Progress",
          url: "https://investorgoggles.com"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open.",
  number: "",
  email_address: "j.hegstad@columbia.edu",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
