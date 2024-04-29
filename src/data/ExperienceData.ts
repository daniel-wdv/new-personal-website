interface ExperienceDataType {
  title: string;
  date: string;
  details: string[];
}

export const ExperienceData: ExperienceDataType[] = [
  {
    title: "FullStack Developer | Impresa",
    date: " June 2023 _ Present",
    details: [
      "Working in an agile development team",
      "Working in a project called EPG (Eletronic Programming Guide), that basically extracts, transforms and loads Data (ETL using Python Pandas). After a lot of Data processment rules, we export the Data to our clients FTPS so they can use that information on the TV boxes. We work with big clients like Vodafone and NOS",
      "Creating a WebSig that is a platform that works with maps, coordinates and has a lot of tools to help our cartography team do their internal projects",
      "We do modern platforms and mobile Apps for tourism companys, normally with Django + React and React Native",
    ],
  },
  {
    title: "Software Developer | ISSHO Technology",
    date: "July 2022 - June 2023",
    details: [
      "Developing a software that worked has a 3D platform that could do 3D product configuration, Quotation, CRM and BOM",
      "The core of this software was built in PHP and vueJS",
      "Learned to work with Blender so i could render specific client 3D objects with ThreeJS in our platform",
      "Worked in a specific project for Laskasas envolving handmade furniture"
    ],
  },
  {
    title: "FullStack Developer | Pluricosmética",
    date: "July 2020 - July 2022",
    details: [
      "Worked in the Ecommerce team",
      "Our platform core was built in PHP + Javascript + Jquery",
      "Mainly maintained/developed new functionalities in our ecommerce that was the main source of cashflow of the company",
      "Developed a lot of new pages in our administration area to be used by our Data management team and marketing team"
    ],
  },
  {
    title: "FullStack Developer | WeCreateYou",
    date: "Fev 2018 - Nov 2019",
    details: [
      "Started by doing an 750hours internship as a WebDeveloper and after that i started working full time in this company",
      "We developed/mantained websites for a lot of different companies using different technologies",
      "Worked very close to the client since this was a startup with a small team"
    ],
  },
];
