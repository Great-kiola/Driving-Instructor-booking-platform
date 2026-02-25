# Driving-Instructor-booking-platform


## What my website does:
My website serves as a channel to connect driving instructors with learners, it also
has a personalized dashboard which instructors can leave feedback for instructors.

## The motivation for my application:
My motivation came when i wanted to get my license and the process to get an instructor was a long one and there was no cllear communication between me and the instructors, and they have no schedule they follow, so it felt like throwing money away.

so i set out to create something better.


## Running the program locally
To run the webservice locally, you have to create two terminals,
One would house the backend files and the other would be for the frontend

cd, into the backend and run the program:
</br>
-- Instructions
</br>

cd backend
</br>
`npm run dev`

**Note** - MongoDb database might not connect as it needs to have access to the database
since the ip-address youre using is not registered, you wont have access to it.

do the same for the frontend

-- Instructions
</br>
cd frontend
</br>
cd instructor-booking
`npm run dev`


## Dependencies
Frontend: react, tailwind, google fonts, axios, moment, react-hot-toast, react-icons, react-router-dom, recharts 
Backend: express, jsonwebtoken, mongoose, multer, bcryptjs, cors, dotenv, exceljs 