export const navigation = [
  {
    label: "header_direction",
    route: "direction",
    ml: true,
  },
  {
    label: "header_command",
    route: "command",
  },
  {
    label: "header_services",
    route: "/",
    menu: true,
    menuItem: [
      {
        name: "mobile_app",
        img: "./images/mobileApp.svg",
        lng: ''

      },
      {
        name: "erp",
        lng: '',
        img: "./images/erp.svg",
      },
      {
        name: "user",
        img: "./images/user.svg",
      },
      {
        name: "It", img: "./images/It.svg",
        lng: ''

      },
      {
        name: "optimazation",
        img: "./images/optimization.svg",
        lng: ''

      },
    ],
  },
  {
    label: "header_tools",
    route: "tools",
  },
  {
    label: "header_clients",
    route: "clients",
  },
  {
    label: "header_portfolio",
    route: "/",
    menu: true,
    menuItem: [
      {
        name: "Delever",
        lng: '',
        img: "./images/delever.svg"
      },
      {
        name: "Sms.uz",
        lng: '',
        img: "./images/sms.svg"
      },
      {
        name: "Goodzone",
        lng: '',
        img: "./images/goodzone.svg"
      },
      {
        name: "Iman",
        lng: '',
        img: "./images/Iman.svg"
      },
    ],
  },
  {
    label: "header_Language",
    route: "/",
    menu: true,
    lang: true,
    menuItem: [
      { name: "Рус", lng: "rus", img: "./images/rus.svg" },
      { name: "Eng", lng: "eng", img: "./images/eng.svg" },
    ],
  },

  {
    label: "header_contact",
    route: "/",
    button: true,
  },
];

export const ourService = [
  {
    name: "team",
    img: "./images/team.svg",
  },
  {
    name: "mobile_app",
    img: "./images/mobileApp.svg",
    scale: true,
  },
  {
    name: "erp",
    img: "./images/erp.svg",
    scale: true,
  },
  {
    name: "user",
    img: "./images/user.svg",
    scale: true,
  },
  { name: "It", img: "./images/It.svg", scale: true },

  {
    name: "optimazation",
    img: "./images/optimization.svg",
    scale: true,
  },
];

export const footerMenu = [
  {
    label: "Aboutus",
    route: "/",
    ml: true,
    menuItem: [
      {
        name: "Direction",
      },
      {
        name: "Command",
      },
      {
        name: "Tools",
      },
      { name: "Clients" },
      {
        name: "optimazation",
      },
    ],
  },
  {
    label: "Services",
    menuItem: [
      {
        name: "team",
      },
      {
        name: "mobile_app",
        scale: true,
      },
      {
        name: "erp",
        img: "./images/erp.svg",
        scale: true,
      },
      {
        name: "user",
        scale: true,
      },
      { name: "It", img: "./images/It.svg", scale: true },

      {
        name: "optimazation",
        img: "./images/optimization.svg",
        scale: true,
      },
    ],
  },
  {
    label: "header_portfolio",
    route: "/",
    menu: true,
    menuItem: [
      { name: "Delever", img: "./images/delever.svg" },
      { name: "Sms.uz", img: "./images/sms.svg" },
      { name: "Goodzone", img: "./images/goodzone.svg" },
      { name: "Iman", img: "./images/Iman.svg" },
    ],
  },
];
