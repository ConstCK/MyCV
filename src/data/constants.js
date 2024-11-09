import { getAge } from "../utils/ageService.js"
let age = getAge()
const myProfile = {
  ru: {
    name: "Константин Капаневс",
    main_info: "Fullstack Python разработчик",
    residence: "Место проживания - Краснодарский край, г. Сочи.",
    age: `Возраст - ${age} лет.`,
    shift: "Удаленный формат работы",
    contacts: {
      title: "Контакты",
      tel: "+7(967)321-32-91",
      telegram: "https://t.me/Constantin_CK",
      mail: "Constantin_CK@outlook.com",
      git: "https://github.com/ConstCK",
    },
    languages: { title: "Языки", content: ["Английский", "Русский"] },
    coding_skills: {
      title: "Навыки",
      content: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
    },
    coding_details: {
      title: "Детали",
      content: ["Django", "DRF", "FastAPI", "Celery", "Redis", "Aiogram", "React", "Vue", "Redux", "Git", "Docker"],
    },
    projects: {
      title: "Проекты в разработке",
      info: [
        {
          name: "Эмулятор игрового автомата из 90х годов (Пет-проект).",
          techs: "-React, Redux",
          link: "https://github.com/ConstCK/Poker-Machine.git",
        },
        {
          name: "Совместный проект на курсе SkillFactory. Веб-приложение для проверки контрагентов (Реальный кейс).",
          techs: "-React, Redux, React Router",
          link: "https://github.com/ConstCK/SkillFactory-CooperativeProject-SCAN.git",
        },
        {
          name: "Дипломная работа на курсе SkillFactory. Веб-сервис для учета складской техники (Реальный кейс).",
          techs: "-React, React Router, Django, Django Rest Framework",
          link: "https://github.com/ConstCK/SkillFactory-DiplomaProject.git",
        },
        {
          name: "Приложение для учета семейного бюджета (Пет проект).",
          techs: "-Vue, Vuex, Vue-Router, Django, Django Rest Framework",
          link: "https://github.com/ConstCK/My-Budget.git",
        },
        {
          name: "Telegram бот с планировщиком задач (Пет проект).",
          techs: "-Aiogram, SQLAlchemy, Apscheduler",
          link: "https://github.com/ConstCK/My-ToDo-TelegramBot.git",
        },
      ],
    },
    education: {
      title: "Образование",
      info: [
        {
          period: "2022 г.- 2023 г.",
          establishment: "SkillFactory курсы, Fullstack Python разработчик.",
        },
        {
          period: "1998 г.- 2000 г.",
          establishment:
            "Europa College, Nicosia, Cyprus, специальность 'Hotel Management'.",
        },
        {
          period: "1993 г.- 1998 г.",
          establishment:
            "Сочинский Государственный Университет Туризма и Курортного дела, специальность «Мировая экономика».",
        },
      ],
    },
    job: {
      title: "Опыт работы",
      info: [
        {
          period: "2012 - Настоящее время",
          establishment: "Работа над собственными проектами",
        },
        {
          period: "2005 г.- 2012 г.",
          establishment: "ООО «КАВКАЗЗЕМПРОЕКТ», директор.",
        },
        {
          period: "2001 г.- 2005 г.",
          establishment:
            "«Проектно-изыскательская экспедиция Российской академии сельскохозяйственных наук», инженер.",
        },
      ],
    },
    about: {
      title: "О себе",
      content:
        "Я самостоятельно изучаю Python с 2019 г., HTML, CSS, JS с 2020г.\
         В 2023 г.Окончил курсы по специальности FullStack разработчик на Python.\
         Хочу чтобы хобби превратилось в проыессию.",
    },
  },
  en: {
    name: "Constantin Kapanevs",
    main_info: "Fullstack Python developer",
    residence: "Place of residence - Krasnodar region, city of Sochi.",
    age: `Age - ${age} years old.`,
    shift: "Remote work",
    contacts: {
      title: "Contacts",
      tel: "+7(967)321-32-91",
      telegram: "https://t.me/Constantin_CK",
      mail: "Constantin_CK@outlook.com",
      git: "https://github.com/ConstCK",
    },
    languages: {
      title: "Languages",
      content: ["English - fluent speaker", "Russian"],
    },
    coding_skills: {
      title: "Coding skills",
      content: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
    },
    coding_details: {
      title: "Coding skills details",
      content: ["Django", "DRF", "FastAPI", "Celery", "Redis", "Aiogram", "React", "Vue", "Redux", "Git", "Docker"],
    },
    projects: {
      title: "Projects in development",
      info: [
        {
          name: "Slot machine emulator from the past.",
          techs: "-React, Redux",
          link: "https://github.com/ConstCK/Poker-Machine.git",
        },
        {
          name: "Cooperative project on SkillFactory course (real case). Web application of companies reputation gathering.",
          techs: "-React, Redux, React Router",
          link: "https://github.com/ConstCK/SkillFactory-CooperativeProject-SCAN.git",
        },
        {
          name: "Diploma project on SkillFactory course (real case). Web service for accounting of warehouse equipment.",
          techs: "-React, React Router, Django, Django Rest Framework",
          link: "https://github.com/ConstCK/SkillFactory-DiplomaProject.git",
        },
        {
          name: "Family budget control application (Pet project).",
          techs: "-Vue, Vuex, Vue-Router, Django, Django Rest Framework",
          link: "https://github.com/ConstCK/My-Budget.git",
        },
        {
          name: "Task scheduler with Telegram bot Pet project).",
          techs: "-Aiogram, SQLAlchemy, Apscheduler",
          link: "https://github.com/ConstCK/My-ToDo-TelegramBot.git",
        },
      ],
    },
    education: {
      title: "Education",
      info: [
        {
          period: "2022 - 2023 ",
          establishment: "SkillFactory courses, Fullstack Python developer.",
        },
        {
          period: "1998 - 2000 ",
          establishment:
            "Europa College, Nicosia, Cyprus, 'Hotel Management' speciality.",
        },
        {
          period: "1993 - 1998 ",
          establishment:
            "Sochi Univercity Of Recreation And Tourism, 'World economy' speciality.",
        },
      ],
    },
    job: {
      title: "Employment history",
      info: [
        {
          period: "2012 - Current time",
          establishment: "Self projects development",
        },
        {
          period: "2005 - 2012 ",
          establishment: "ООО «КАВКАЗЗЕМПРОЕКТ», director.",
        },
        {
          period: "2001 - 2005 ",
          establishment:
            "«Project&Recearch expedition of Russian Academy of Agricultural Sciences», engineer.",
        },
      ],
    },
    about: {
      title: "Personal info",
      content:
        "I have been studying Python on my own since 2019, HTML, CSS, JS since 2020. \
        In 2023, I completed courses in the FullStack Python developer specialty. \
        I want my hobby to turn into a profession.",
    },
  },
};

export default myProfile;
