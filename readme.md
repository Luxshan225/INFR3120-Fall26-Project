Campus Gear Board
INFR3120 Fall26 Project · Part 1

Campus Gear Board is a web application where students can post equipment they’re willing to lend, such as calculators, tripods, or HDMI adapters. Students can browse the homepage to see what’s listed and find the suggested campus pickup location.
- Live demo: Replace this line with your Render service URL after deployment.
- Project plan: [project-plan.docx]


First release
- The homepage displays the site name, an original team logo, and a table of gear listings.
- The List an item button opens a form for the item name, category, campus pickup location, and description.
- The server validates the submission, saves it to MongoDB Atlas, and returns the user to the updated homepage.
Technology
Node.js, Express (scaffolded with Express Generator), EJS, MongoDB Atlas, Mongoose, and dotenv. The project uses Render for deployment.
Run locally
1. Install Node.js LTS. Clone this repository and open the folder that contains package.json.
2. In the project terminal, install the dependencies:
   npm ci
3. Copy .env.example to a new file named .env beside package.json. Set MONGODB_URI in .env to your actual MongoDB Atlas connection string. Use campus_gear_board as the database name. Your Atlas database user needs read/write access to that database, and your current public IP must be on the Atlas project’s IP access list.
4. Start the app:
   npm start
5. Once the terminal says the app is listening, open http://localhost:3000. Keep the terminal running while you use the site.
On Windows PowerShell, use npm.cmd ci and npm.cmd start if PowerShell blocks the npm script. If the app says Set MONGODB_URI before starting the application, check that the saved file is named exactly .env and contains a line starting with MONGODB_URI=.

https://github.com/Luxshan225/INFR3120-Fall26-Project.git
https://campus-gear-board.onrender.com
