✨ This is the pet-project with the Cypress Ui and API tests, GitHub actions, and Cypress Dashboard.✨ <br>
You can watch the short video overview by this 👉  https://youtu.be/LNNeiPkSfTA  youtube link. <br>
<br>
To view the project:
✅Clone repo on your local machine
✅Install dependencies: npm install
✅Start localhost:  npm start
✅Open cypress: npx cypress open 
<br>
Smoke tests implemented as API tests for every DEV env push<br>
Regression tests represented as UI tests with parallelization for the every QA env<br>
🧪 Different strategies for testing DEV and QA branch  : 
- Dev branch runs API smoke tests using github Actions. 
- Qa branch runs Regression tests in parallel using the preinstalled libraries.   
