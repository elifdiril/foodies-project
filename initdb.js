const sql = require('better-sqlite3');
const db = sql('meals.db');

const dummyMeals = [
  {
    title: "cupcake",
    slug: "cupcake",
    image: "birthday-cupcake.jpg",
    summary: "cupcake.",
    instructions: `
    1-Proident commodo incididunt incididunt ad occaecat qui nulla sit nisi commodo nisi quis magna enim nulla duis do ut aliqua.

    2-Fugiat labore esse ipsum consequat deserunt sit ad aliquip id anim cupidatat deserunt veniam sit commodo veniam Lorem mollit est.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "popsicles",
    slug: "popsicles",
    image: "fruit-popsicles.jpg",
    summary: "popsicles.",
    instructions: `
    1-Eu in esse nisi ut veniam dolore labore magna do veniam mollit id aliqua reprehenderit adipisicing exercitation dolor adipisicing.

    2-Sit sit est et quis cupidatat consequat pariatur labore in irure aliquip laborum cillum.
    `,
    creator: "Max Schwarz",
    creator_email: "max@example.com",
  },
  {
    title: "ice-cream cone",
    slug: "ice-cream-cone",
    image: "ice-cream-cone-splash.jpg",
    summary: "ice-cream cone.",
    instructions: `
    1-Adipisicing aliqua ut laborum cillum velit aliqua Lorem tempor exercitation laborum in exercitation aliquip quis Lorem.

    2-Reprehenderit laboris consequat cupidatat ex irure ex veniam tempor sunt officia Lorem.
    
    3-Lorem veniam tempor laboris fugiat.
    `,
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
  },
  {
    title: "lime lemonade",
    slug: "lime-lemonade",
    image: "lime-lemonade.jpg",
    summary: "lime lemonade.",
    instructions: `
    1-Consequat ipsum ut ex cupidatat.

    2-Mollit voluptate do laborum laboris minim ea qui consequat dolor duis.
    
    3-Proident officia laboris enim excepteur id laborum.
    `,
    creator: "Laura Smith",
    creator_email: "laurasmith@example.com",
  },
  {
    title: "macarons",
    slug: "macarons",
    image: "macarons-in-tower.jpg",
    summary: "macarons.",
    instructions: `
    1-Laborum irure amet deserunt fugiat sint.

    2-Officia voluptate Lorem qui excepteur nulla laboris consectetur esse pariatur culpa est excepteur nulla ipsum.
    
    3-Proident non aute velit fugiat ad aute officia aute esse consequat duis esse culpa mollit cupidatat mollit cupidatat exercitation.
    `,
    creator: "Mario Rossi",
    creator_email: "mariorossi@example.com",
  },
  {
    title: "peach tea",
    slug: "peach-tea",
    image: "peach-tea.jpg",
    summary: "peach tea.",
    instructions: `
    1-Eiusmod duis enim adipisicing et ipsum ipsum tempor minim amet amet aliqua incididunt duis consequat.

    2-Ex fugiat do reprehenderit do ut quis mollit sint dolore deserunt tempor id laborum aliquip id dolore ullamco ad.
    
    3-Excepteur anim ea deserunt ad pariatur mollit non culpa nisi eiusmod sunt cillum dolor officia reprehenderit amet culpa proident duis.
 `,
    creator: "Franz Huber",
    creator_email: "franzhuber@example.com",
  },
  {
    title: "honey on pancakes",
    slug: "honey-on-pancakes",
    image: "pouring-honey-on-pancakes.jpg",
    summary: "honey on pancakes.",
    instructions: `
    1-Enim elit fugiat sint Lorem ut voluptate ut fugiat pariatur excepteur Lorem consequat occaecat esse labore pariatur pariatur ea nisi tempor veniam nostrud elit deserunt incididunt aliqua duis cupidatat do nisi cupidatat ex eu ea.

    2-Mollit dolor exercitation ullamco minim non culpa sint eiusmod laborum aliquip exercitation fugiat ex magna voluptate ullamco laboris.
    `,
    creator: "Sophia Green",
    creator_email: "sophiagreen@example.com",
  },
  {
    title: "strawberry milk splash",
    slug: "strawberry-milk-splash",
    image: "strawberry-milk-splash.jpg",
    summary: "strawberry milk splash.",
    instructions: `
    1-Irure eu culpa excepteur tempor sint dolor nulla nisi fugiat quis proident enim tempor voluptate voluptate non consequat cupidatat exercitation tempor ullamco enim enim deserunt nisi fugiat officia eu dolore proident aute dolore velit.

    2-Enim adipisicing ea dolore quis minim eiusmod exercitation adipisicing consectetur tempor consectetur ullamco cupidatat adipisicing qui et deserunt enim pariatur ad do.
    
    3-Nostrud excepteur minim aute dolor cillum labore cupidatat sunt fugiat culpa ad ullamco ea ad cupidatat sit do id ut do incididunt tempor.
    
    4-Nostrud cillum amet anim laboris elit exercitation eiusmod ad reprehenderit sint aliqua quis culpa nostrud labore sunt aute cillum cillum qui consequat do proident et veniam nulla irure.
    
    5-Adipisicing laboris ad ea enim aliquip occaecat id exercitation elit veniam non dolor ex cillum commodo nulla mollit nostrud incididunt laborum ut labore est qui in tempor irure.
    `,
    creator: "Sophia Geller",
    creator_email: "sophiageller@example.com",
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