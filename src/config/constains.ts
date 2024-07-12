export const navigation = [
  {
    label:"header_direction",
    route: "/",
    ml: true,
  },
  {
    label:"header_command",
    route: "/",
  },
  {
    label:"header_services",
    route: "/",
    menu: true,
    menuItem: [
      {
        name: "mobile_app",
        img: "./images/mobileApp.svg",
      },
      {
        name: "erp",
        img: "./images/erp.svg",
      },
      {
        name: "user",
        img: "./images/user.svg",
      },
      { name: "It", img: "./images/It.svg" },
      {
        name: "optimazation",
        img: "./images/optimization.svg",
      },
    ],
  },
  {
    label:"header_tools",
    route: "/",
  },
  {
    label:"header_clients",
    route: "/",
  },
  {
    label:"header_portfolio",
    route: "/",
    menu: true,
    menuItem: [
      { name: "Delever", img: "./images/delever.svg" },
      { name: "Sms.uz", img: "./images/sms.svg" },
      { name: "Goodzone", img: "./images/goodzone.svg" },
      { name: "Iman", img: "./images/Iman.svg" },
    ],
  },
  {
    label:"header_Language",
    route: "/",
    menu: true,
    lang:true,
    menuItem: [
      { name: "Рус", lng:"rus", img: "./images/rus.svg" },
      { name: "Eng", lng:"eng", img: "./images/eng.svg" },
    ],
  },

  {
    label:"header_contact",
    route: "/",
    button: true,
  },
];
