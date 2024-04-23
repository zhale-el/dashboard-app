import Avator from "./assets/images/user.svg";
import Ipad from "./assets/images/ipad.jpg";
import Laptop from "./assets/images/laptop.jpg";
import Laptop2 from "./assets/images/laptop2.jpg";
import macbook from "./assets/images/macbook.jpg";

let xAxisData = [
  {
    name: "Jan",
    Sale: 112_000,
  },
  {
    name: "Feb",
    Sale: 99_000,
  },
  {
    name: "Mar",
    Sale: 12_090,
  },
  {
    name: "Apr",
    Sale: 99_000,
  },
  {
    name: "May",
    Sale: 54_000,
  },
  {
    name: "Jun",
    Sale: 85_000,
  },
  {
    name: "Jul",
    Sale: 34_000,
  },
  {
    name: "Agu",
    Sale: 18_598,
  },
  {
    name: "Sep",
    Sale: 0,
  },
  {
    name: "Oct",
    Sale: 73_078,
  },
  {
    name: "Nov",
    Sale: 12_900,
  },
  {
    name: "Dev",
    Sale: 97_000,
  },
];

const newMembers = [
  {
    id: 1,
    username: "Zhale Elmi",
    title: "Web Developer",
  },
  {
    id: 2,
    username: "Fateme Bahmani",
    title: "Seo Eng",
  },
  {
    id: 3,
    username: "Frank Mosleh",
    title: "Weblog",
  },
  {
    id: 4,
    username: "Elnaz Ghasemi",
    title: "Hacker",
  },
];

const transactions = [
  {
    id: 1,
    customer: "Zhale Elmi",
    date: "15 May 1995",
    amount: 123,
    status: "Approved",
  },
  {
    id: 2,
    customer: "Fateme Bahmani",
    date: "23 Jul 2022",
    amount: 123,
    status: "Declined",
  },
  {
    id: 3,
    customer: "Frank Mosleh",
    date: "28 May 2022",
    amount: 123,
    status: "Pending",
  },
  {
    id: 4,
    customer: "Elnaz Ghasemi",
    date: "1 Feb 2022",
    amount: 123,
    status: "Approved",
  },
];

let userRows = [
  {
    id: 1,
    username: "Zhale Elmi",
    avator: Avator,
    status: "active",
    transaction: "$129.52",
    email: "Zhale@gmail.com",
  },
  {
    id: 2,
    username: "Farank Mosleh",
    avator: Avator,
    status: "non-active",
    transaction: "$110",
    email: "farank@gmail.com",
  },
  {
    id: 3,
    username: "Maryam Elmi",
    avator: Avator,
    status: "active",
    transaction: "$98",
    email: "elmi@gmail.com",
  },
  {
    id: 4,
    username: "Fateme Bahmani",
    avator: Avator,
    status: "active",
    transaction: "$0",
    email: "fateme@gmail.com",
  },
  {
    id: 5,
    username: "Elnaz Ghasemi",
    avator: Avator,
    status: "active",
    transaction: "$55.98",
    email: "elnaz@gmail.com",
  },
];

let products = [
  {
    id: 1,
    title: "Asus",
    avatar: Laptop2,
    price: "$890",
  },
  {
    id: 2,
    title: "Acer",
    avatar: Ipad,
    price: "$760",
  },
  {
    id: 3,
    title: "HP",
    avatar: Laptop,
    price: "$995",
  },
  {
    id: 4,
    title: "Dell",
    avatar: macbook,
    price: "$369",
  },
];

const productsData = [
  {
    name: "Jan",
    sales: 4000,
  },
  {
    name: "Feb",
    sales: 3000,
  },
  {
    name: "Mar",
    sales: 5000,
  },
];

export {
  xAxisData,
  newMembers,
  transactions,
  userRows,
  products,
  productsData,
};
