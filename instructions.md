setting up a node server w/ sockets

create folder
git init
npm init (to interact w/ npm)
git remote add... (push code to git repo)
npm install express@4.13.3 --save (express server)
create server.js file
node server.js (start server)
git status 
create .gitignore file  (ignore node modules folder)
git push
heroku create 
git push heroku
heroku open
heroku apps:rename newname

socket.io transfer live data btwn servers and clients, connect frontend webapp to backend to live exchange data 
npm install socket.io@1.3.7 --save
require socket and listen to event in server
include socket js and call function in index