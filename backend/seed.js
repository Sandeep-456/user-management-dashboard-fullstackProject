// backend/seed.js
const db = require("./database");

const users = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "123-456-7890",
    company: "TechCorp",
    street: "123 Main St",
    city: "New York",
    zipcode: "10001",
    lat: "40.7128",
    lng: "-74.0060",
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phone: "234-567-8901",
    company: "InnoSoft",
    street: "456 Broadway",
    city: "San Francisco",
    zipcode: "94105",
    lat: "37.7749",
    lng: "-122.4194",
  },
  {
    name: "Carol Williams",
    email: "carol.williams@example.com",
    phone: "345-678-9012",
    company: "NextGen Solutions",
    street: "789 Market St",
    city: "Chicago",
    zipcode: "60601",
    lat: "41.8781",
    lng: "-87.6298",
  },
  {
    name: "David Brown",
    email: "david.brown@example.com",
    phone: "456-789-0123",
    company: "GlobalTech",
    street: "101 State St",
    city: "Boston",
    zipcode: "02108",
    lat: "42.3601",
    lng: "-71.0589",
  },
  {
    name: "Eva Green",
    email: "eva.green@example.com",
    phone: "567-890-1234",
    company: "Creative Minds",
    street: "202 King St",
    city: "Seattle",
    zipcode: "98101",
    lat: "47.6062",
    lng: "-122.3321",
  },
  {
    name: "Frank Harris",
    email: "frank.harris@example.com",
    phone: "678-901-2345",
    company: "BrightWorks",
    street: "303 Queen St",
    city: "Austin",
    zipcode: "73301",
    lat: "30.2672",
    lng: "-97.7431",
  },
  {
    name: "Grace Lee",
    email: "grace.lee@example.com",
    phone: "789-012-3456",
    company: "Visionary Labs",
    street: "404 Elm St",
    city: "Denver",
    zipcode: "80202",
    lat: "39.7392",
    lng: "-104.9903",
  },
  {
    name: "Henry Martin",
    email: "henry.martin@example.com",
    phone: "890-123-4567",
    company: "Smart Solutions",
    street: "505 Pine St",
    city: "Los Angeles",
    zipcode: "90001",
    lat: "34.0522",
    lng: "-118.2437",
  },
  {
    name: "Isabella Taylor",
    email: "isabella.taylor@example.com",
    phone: "901-234-5678",
    company: "DataWorks",
    street: "606 Maple Ave",
    city: "Houston",
    zipcode: "77002",
    lat: "29.7604",
    lng: "-95.3698",
  },
  {
    name: "Jack Wilson",
    email: "jack.wilson@example.com",
    phone: "012-345-6789",
    company: "CloudNine",
    street: "707 Cedar Rd",
    city: "Miami",
    zipcode: "33101",
    lat: "25.7617",
    lng: "-80.1918",
  },
];

function insertUser(u) {
  const sql = `INSERT INTO users (name,email,phone,company,street,city,zipcode,lat,lng) VALUES (?,?,?,?,?,?,?,?,?)`;
  const params = [
    u.name,
    u.email,
    u.phone,
    u.company,
    u.street,
    u.city,
    u.zipcode,
    u.lat,
    u.lng,
  ];
  db.run(sql, params, function (err) {
    if (err) console.error("Seed error:", err.message);
    else console.log("Inserted", u.name);
  });
}

users.forEach(insertUser);

// then run: node seed.js
