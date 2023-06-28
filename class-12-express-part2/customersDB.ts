interface Customer {
  id: string;
  name: string;
  cc: string;
  email: string;
  birthDate: string;
  cel: string;
  address: string;
}

const customersDB: Customer[] = [
  {
    id: "1",
    name: "John Doe",
    cc: "1234567890",
    email: "john@example.com",
    birthDate: "1990-01-01",
    cel: "1234567890",
    address: "123 Main St",
  },
  {
    id: "2",
    name: "Jane Smith",
    cc: "9876543210",
    email: "jane@example.com",
    birthDate: "1985-05-10",
    cel: "9876543210",
    address: "456 Elm St",
  },
  {
    id: "3",
    name: "Alice Johnson",
    cc: "2468135790",
    email: "alice@example.com",
    birthDate: "1992-12-25",
    cel: "5555555555",
    address: "789 Oak St",
  },
  {
    id: "4",
    name: "Robert Williams",
    cc: "1357924680",
    email: "robert@example.com",
    birthDate: "1988-09-15",
    cel: "2223334444",
    address: "567 Pine St",
  },
  {
    id: "5",
    name: "Emily Brown",
    cc: "8642097531",
    email: "emily@example.com",
    birthDate: "1995-06-20",
    cel: "9998887777",
    address: "890 Cedar St",
  },
  {
    id: "6",
    name: "Michael Taylor",
    cc: "4826017395",
    email: "michael@example.com",
    birthDate: "1982-03-12",
    cel: "7776665555",
    address: "123 Oak St",
  },
  {
    id: "7",
    name: "Olivia Lee",
    cc: "7531948620",
    email: "olivia@example.com",
    birthDate: "1993-11-05",
    cel: "4445556666",
    address: "456 Maple St",
  },
  {
    id: "8",
    name: "William Clark",
    cc: "9204765183",
    email: "william@example.com",
    birthDate: "1991-07-30",
    cel: "1112223333",
    address: "789 Elm St",
  },
  {
    id: "9",
    name: "Sophia Garcia",
    cc: "6192350478",
    email: "sophia@example.com",
    birthDate: "1987-02-18",
    cel: "8889990000",
    address: "012 Oak St",
  },
  {
    id: "10",
    name: "James Rodriguez",
    cc: "3749261058",
    email: "james@example.com",
    birthDate: "1984-10-08",
    cel: "3334445555",
    address: "345 Maple St",
  },
  {
    id: "11",
    name: "Emma Martinez",
    cc: "5267394081",
    email: "emma@example.com",
    birthDate: "1994-09-01",
    cel: "6667778888",
    address: "678 Cedar St",
  },
  {
    id: "12",
    name: "Daniel Hernandez",
    cc: "8251973064",
    email: "daniel@example.com",
    birthDate: "1990-04-14",
    cel: "2223334444",
    address: "901 Pine St",
  },
  {
    id: "13",
    name: "Mia Lopez",
    cc: "9142630795",
    email: "mia@example.com",
    birthDate: "1989-08-27",
    cel: "5556667777",
    address: "234 Oak St",
  },
  {
    id: "14",
    name: "Benjamin Perez",
    cc: "6830479152",
    email: "benjamin@example.com",
    birthDate: "1986-01-07",
    cel: "8889990000",
    address: "567 Maple St",
  },
  {
    id: "15",
    name: "Ava Adams",
    cc: "4295618703",
    email: "ava@example.com",
    birthDate: "1997-03-22",
    cel: "4445556666",
    address: "890 Cedar St",
  },
  {
    id: "16",
    name: "Alexander Wilson",
    cc: "5721309846",
    email: "alexander@example.com",
    birthDate: "1983-06-11",
    cel: "1112223333",
    address: "123 Elm St",
  },
  {
    id: "17",
    name: "Sofia Lewis",
    cc: "7324068195",
    email: "sofia@example.com",
    birthDate: "1996-12-03",
    cel: "7778889999",
    address: "456 Pine St",
  },
  {
    id: "18",
    name: "David Turner",
    cc: "1893274560",
    email: "david@example.com",
    birthDate: "1993-04-29",
    cel: "2223334444",
    address: "789 Oak St",
  },
  {
    id: "19",
    name: "Charlotte Baker",
    cc: "3054867921",
    email: "charlotte@example.com",
    birthDate: "1988-07-17",
    cel: "5556667777",
    address: "012 Elm St",
  },
  {
    id: "20",
    name: "Liam Harris",
    cc: "9502738146",
    email: "liam@example.com",
    birthDate: "1992-02-24",
    cel: "9998887777",
    address: "345 Maple St",
  },
  {
    id: "21",
    name: "Sophie Turner",
    cc: "5896437201",
    email: "sophie@example.com",
    birthDate: "1995-09-13",
    cel: "1234567890",
    address: "123 Main St",
  },
  {
    id: "22",
    name: "Jacob Morgan",
    cc: "7192845360",
    email: "jacob@example.com",
    birthDate: "1990-05-25",
    cel: "9876543210",
    address: "456 Elm St",
  },
  {
    id: "23",
    name: "Aria Thompson",
    cc: "3856927401",
    email: "aria@example.com",
    birthDate: "1998-02-07",
    cel: "2468135790",
    address: "789 Oak St",
  },
  {
    id: "24",
    name: "Ethan Baker",
    cc: "5432179086",
    email: "ethan@example.com",
    birthDate: "1991-11-18",
    cel: "1357924680",
    address: "012 Elm St",
  },
  {
    id: "25",
    name: "Scarlett Lewis",
    cc: "8765432109",
    email: "scarlett@example.com",
    birthDate: "1987-07-30",
    cel: "8642097531",
    address: "345 Maple St",
  },
  {
    id: "26",
    name: "Logan Mitchell",
    cc: "1209876543",
    email: "logan@example.com",
    birthDate: "1994-04-12",
    cel: "4826017395",
    address: "678 Cedar St",
  },
  {
    id: "27",
    name: "Hannah Carter",
    cc: "6543120987",
    email: "hannah@example.com",
    birthDate: "1985-12-25",
    cel: "7531948620",
    address: "901 Pine St",
  },
  {
    id: "28",
    name: "Christopher Young",
    cc: "9087654321",
    email: "christopher@example.com",
    birthDate: "1992-09-15",
    cel: "9204765183",
    address: "234 Oak St",
  },
  {
    id: "29",
    name: "Grace Anderson",
    cc: "4567890123",
    email: "grace@example.com",
    birthDate: "1989-06-20",
    cel: "6192350478",
    address: "567 Maple St",
  },
  {
    id: "30",
    name: "Dylan Scott",
    cc: "9876543210",
    email: "dylan@example.com",
    birthDate: "1984-03-12",
    cel: "3749261058",
    address: "890 Cedar St",
  },
  {
    id: "31",
    name: "Isabella Turner",
    cc: "1234567890",
    email: "isabella@example.com",
    birthDate: "1997-09-13",
    cel: "5555555555",
    address: "123 Main St",
  },
  {
    id: "32",
    name: "Lucas Morgan",
    cc: "9876543210",
    email: "lucas@example.com",
    birthDate: "1994-05-25",
    cel: "6666666666",
    address: "456 Elm St",
  },
  {
    id: "33",
    name: "Mia Thompson",
    cc: "2468135790",
    email: "mia@example.com",
    birthDate: "1989-02-07",
    cel: "7777777777",
    address: "789 Oak St",
  },
  {
    id: "34",
    name: "Elijah Baker",
    cc: "1357924680",
    email: "elijah@example.com",
    birthDate: "1986-11-18",
    cel: "8888888888",
    address: "012 Elm St",
  },
  {
    id: "35",
    name: "Sophia Lewis",
    cc: "8642097531",
    email: "sophia@example.com",
    birthDate: "1993-07-30",
    cel: "9999999999",
    address: "345 Maple St",
  },
  {
    id: "36",
    name: "Jackson Mitchell",
    cc: "4826017395",
    email: "jackson@example.com",
    birthDate: "1990-04-12",
    cel: "1111111111",
    address: "678 Cedar St",
  },
  {
    id: "37",
    name: "Ava Carter",
    cc: "7531948620",
    email: "ava@example.com",
    birthDate: "1987-12-25",
    cel: "2222222222",
    address: "901 Pine St",
  },
  {
    id: "38",
    name: "Oliver Young",
    cc: "9204765183",
    email: "oliver@example.com",
    birthDate: "1994-09-15",
    cel: "3333333333",
    address: "234 Oak St",
  },
  {
    id: "39",
    name: "Emma Anderson",
    cc: "6192350478",
    email: "emma@example.com",
    birthDate: "1989-06-20",
    cel: "4444444444",
    address: "567 Maple St",
  },
  {
    id: "40",
    name: "Liam Scott",
    cc: "3749261058",
    email: "liam@example.com",
    birthDate: "1984-03-12",
    cel: "5555555555",
    address: "890 Cedar St",
  },
];

export { customersDB, Customer };