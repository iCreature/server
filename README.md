this a node.js backend server for sending emails


## Deployment 
to start is clone the project to your machine 
run `npm install` inside the project directory 
to run the project open your command line and type `node index.js`


## Side Note
side notes I used google's gmail to send email(s) via smtp 
- google has recently updated their security on third party/ less security app to send email via them
- I couldn't find the any other free smtp that worked the way I want it to
- But I will make an update to this branch If I find a working one before the end of the day (2023/03/09)
-(edit) managed to get the email sender working using send-grid
-check the spam folder for the email sent
- the api key is in the code they is a high chnace send-grid will suspend the api since it will be picked up in a public repo
- if this happens I'm more than happy to sit down with the team and present it myself and run everyone through on the project and logic.