Hello,  

This is the completed test task for the FullStack Developer position at Kodix.  

To run the application in working mode, ensure that the server in **pgAdmin** is active and configured with the following connection string:  
`postgres://postgres:postgres@localhost:5432/postgres?schema=public`  

Run the command in fronted and backend repository:  
```
yarn
```  
This will download all dependencies.  

Next, navigate to the **backend** folder and execute the following commands in the console:  
```bash
yarn db:reset:dev  
yarn db:migrate:dev  
yarn db:deploy:dev  
```  
These commands will verify the database connection and create the necessary entities.  

After that, return to the project's root directory and run:  
```
yarn start
```  
The entire project will be up and running, ready for testing.  