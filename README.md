# horse-management

Execute the backend api 
=======================================
Naviagte to api folder
1- npm install

2- npm run start

3- dbConfig/dbconnector.ts  --> set up the DB variable host, port , etc

4- create one DB with name horseManagement

5- in migration import the dbinit.sql file to postgres

Executing frontend
=========================================
npm install
ng serve --o to serve the project
the application will directly open in http://localhost:4200/applications

In this app, name, date of birth, gender,heart rate is displayed.

On clicking delete button, the popup appears with yes or no buttons.

On clicking edit icon button, form opens but the data is not displayed in form,this need to be done .

On clicking stop sharing button, the is_monitoring key turns to false,and button changes to start sharing and vice-versa.

A new horse data could be added by clciking on create new horse button and the form appears and on clicking on submit button the new data will be added. 


Pending point

- user should see a "Possible birth" warning if horse is female and pregnant and the average
heart rate was above 40 in the last 15 seconds

- On edit data is not prefilled in model
