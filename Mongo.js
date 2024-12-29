//! Installation Instructions;
// install mongo shell;
// install mongo compass;
// MongoDB Atlas; => it is the tool for managing the database and clustor;

// open the cmd (command prompt) and setup your MongoDB shell:

//*mongosh;
//? is command se hmara mongoshell iniilise ho jata hai;
//*show dbs;
//? is command se hmarae all database show hote hai if user first time sab krta hai tab bhi admin,config,local database show hotee haii;
//* decide database for use or create new database 
//* for already existing database [use database name] ==> use products;
//*  or new database creation [use newDatabase name] ==> use newDB;

//* show collections;
//? it shows all collections in the database;

//* for create new collection
//* db.createCollection("collectionsName");

//* for delete database and collection 
    //* db.colletionName.drop(); // for collection
    //* db.dropDatabase(); // for database


//! Now we have to understand the CRUD in MONGODB
// 1.)Insert (create)
// 2.)Read 
// 3.)delete
// 4.)Update


//* Insert Operations;

syntax;

db.collectionName.insertOne({});
db.collectionName.insertMany([{},{}]);