const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
  {
    title: "beef",
    slug: "beef",
    image: "beef.jpg",
    summary: "beef Aliquip excepteur culpa magna ad. Incididunt sit sunt ea labore anim. Fugiat aute qui eiusmod aute commodo proident aliquip voluptate deserunt.",
    instructions: `
    1-Proident commodo incididunt incididunt ad occaecat qui nulla sit nisi commodo nisi quis magna enim nulla duis do ut aliqua.

    2-Fugiat labore esse ipsum consequat deserunt sit ad aliquip id anim cupidatat deserunt veniam sit commodo veniam Lorem mollit est.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "cappuccino",
    slug: "cappuccino",
    image: "cappuccino.jpg",
    summary: "cappuccino Aliquip excepteur culpa magna ad. Incididunt sit sunt ea labore anim. Fugiat aute qui eiusmod aute commodo proident aliquip voluptate deserunt.",
    instructions: `
    1-Eu in esse nisi ut veniam dolore labore magna do veniam mollit id aliqua reprehenderit adipisicing exercitation dolor adipisicing.

    2-Sit sit est et quis cupidatat consequat pariatur labore in irure aliquip laborum cillum.
    `,
    creator: "Max Schwarz",
    creator_email: "max@example.com",
  },
  {
    title: "pizza",
    slug: "pizza",
    image: "pizza.jpg",
    summary: "pizza Aliquip excepteur culpa magna ad. Incididunt sit sunt ea labore anim. Fugiat aute qui eiusmod aute commodo proident aliquip voluptate deserunt.",
    instructions: `
    1-Adipisicing aliqua ut laborum cillum velit aliqua Lorem tempor exercitation laborum in exercitation aliquip quis Lorem.

    2-Reprehenderit laboris consequat cupidatat ex irure ex veniam tempor sunt officia Lorem.
    
    3-Lorem veniam tempor laboris fugiat.
    `,
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
  },
  {
    title: "tarts-top-view",
    slug: "tarts-top-view",
    image: "tarts-top-view.jpg",
    summary: "tarts-top-view Aliquip excepteur culpa magna ad. Incididunt sit sunt ea labore anim. Fugiat aute qui eiusmod aute commodo proident aliquip voluptate deserunt.",
    instructions: `
    1-Laborum irure amet deserunt fugiat sint.

    2-Officia voluptate Lorem qui excepteur nulla laboris consectetur esse pariatur culpa est excepteur nulla ipsum.
    
    3-Proident non aute velit fugiat ad aute officia aute esse consequat duis esse culpa mollit cupidatat mollit cupidatat exercitation.
    `,
    creator: "Mario Rossi",
    creator_email: "mariorossi@example.com",
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();