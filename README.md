[![Build Status](https://travis-ci.com/Mordax/VPIA.svg?token=9JzkqwDk7NTPWEGwRNt4&branch=master)](https://travis-ci.com/Mordax/VPIA)
## VPIA

This platform uses Matterwiki as the underlying wiki engine. This will most likely be heavily customized. Currently using MySQL.

### Instructions
1. Install [node](https://nodejs.org/en/)
2. Navigate to the project folder
3. Install dependencies: `npm install`
4. Run the application: `npm run start`

### Navigating the folders
* `api/` directory contains code for node backend.
TODO: add Matterwiki's api documentation

* `config/` is the folder where most of the specific configurations should live. This is where webpack is (dev, prod, and middleware for making the debugging process easier.), where Babel is, auth secret, the Caminte database config file and the Eslint configuration file. 

* `client/`directory contains the React jsx files and almost all the front end. Main index.html is here.  
    * `client/app/` where the shared resources of the app live such as routes, index, etc.
    * `client/app/components/` is where the specific components live. As this gets more complex, it may be beneficial to move the folders.
    * `client/assets/` - self explanatory. This is also where the [trix](https://github.com/basecamp/trix) (wysiwyg editor) code lives. Potentially we can swap it out/modify it to support videos, images, etc.

* `models/` Has the database schemas/models. Any change to the structure of tables should be done here.
    * `models/relations` defines the relationships between the models. Very simple hasMany, belongsTo relationships. We are using Caminte, a database agnostic ORM (object relational mapping for representing Javascript objects in databases). Caminte uses adapters for various DBs and has a generic approach for defining relationships. Please read more here: http://www.camintejs.com/.

## Tidying up files
* `npm run lint` - fixes and adheres to javascript design
* `npm run prettier` - makes code structure nicer to look at

Eslint is currently not fixing the Jsx files in the app folder due to breaking changes (automatic fix breaks the engine) and possible lack of backwards compatibility. We should fix this in the future but we must prioritize elsewhere.

## Common Errors
You must install MySQL before running the project. You can modify the `knexfile.js` to include your root username, and your password and whatever database you want.
If you get an error like:
```javascript
Unhandled rejection Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```
You need to run this command in the MySQL commandline, substituting `root` as your user `localhost` as your URL and `password` as your password:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
```

If you get an error like:
```javascript
Unhandled rejection Error: ER_BAD_DB_ERROR: Unknown database 'myapp_test'
```
Where `myapp_test` is either that or whatever custom database you inputted. You need to manually create the database.
Run:
```sql
CREATE DATABASE myapp_test;
```
### Run MySQL
Step 1: Create a new entry
```
export PATH=${PATH}:/usr/local/mysql/bin/
```
Step 2: Log in through root user password
```
mysql -u root -p
```

---

Approved fonts:  
* [ ] Baskerville  
* [ ] Futura
* [ ] Univers

Approved Hex colours:  
`Orange-yellow` - #FFA500  
`Red` - #D60812  
`Green-blue` - #208778    
`Blackish` - #0D1319  
`Cool gray` - #75777B  
`Pale grey` - #D0CFCD  
