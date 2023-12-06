# CPSC481
The final project for CPSC 481, provided by the University of Calgary in Fall 2023
Group members:
- Umar Ahmed, mian.ahmed@ucalgary.ca
- Arij Ashar, muhammadarij.ashar@ucalgary.ca
- Ryan Chrumka, ryan.chrumka@ucalgary.ca
- Braedon Haensel, braedon.haensel@ucalgary.ca
- Josh Vanderstoop, joshua.vanderstoop@ucalgary.ca 

Please note that the image used for the interactive map background was found on the Calgary Stampede website at "https://www.calgarystampede.com/map" and may be subject to copyright.

## How to use:

### Main Page (Landing Page)
Welcome to MyStampede, where you can navigate the Stampede with ease and comfort! Start by registering for an account or signing in to access personalized features.
- **Virtual Queue**: Skip the physical wait in lines by joining a virtual queue for events. Upon joining, you get a unique QR code to verify your position in the queue, and can leave the queue at any time.
- **Interactive Map**: Find the locations of your scheudled events using the interactive map of the Stampede.
- **Day Planner**: Access all of your scheduled events in one place. Add, remove and view events on your personalized day planner.
- **Register/Login**: Create an account and login to save your day planner schedule.

### Register/Login
**Register Page**
- By registering an account, the next time you logout, your day planner schedule will be saved to your account and the planner will be reset. If you log back in, that same schedule that was saved will re-appear.

- To register click on the register button on the landing page. This will take you to the register page
- Fill in all the required fields and click the register button. You can click the cancel button to back out
- If all fields are valid, then you will be taken back to the home page and a "sign out" button will appear instead. Click this to logout if needed.
- If all fields are not valid, an error alert will be displayed on your screen telling you which field is incorrect/not filled.

**Login Page**
- If you have signed out and try to log back in using the login page, your saved day planner will be loaded.

- To login click on the login button on the landing page. This will take you to the login page.
- Fill in all the required fields and click the login button. You can click the cancel button to back out
- If all fields are valid you will be logged in and taken back to the home page, a "sign out" button will appear instead. Click this to logout if needed.
- If all fields are not valid, an error alert will be displayed on your screen telling you which field is incorrect/not filled.
**Forgot Password/Reset Email**
- If you have forgotton your password or your email, go to the login page and click the forgot password or reset email button.
- For forgot password, you will be prompted to enter your email and a new password. If everything is correct, a confirmation email will be sent to you. **Note: since we have no backend we can't actually send confirmation emails to users, therefore the functionality is a stub**
- For forgot email, the feature was not implemented for similar reasons to forgot password, so an alert will be displayed when this is clicked

### Day Planner
All of the user's scheduled events will show up here.
- Click the **Add Event** button to pull up a window where you can search for and add events based on dates. Use the arrows to increment or decrement the date and hit **Go**. Choose from a list of concerts and rodeo events in the results tab and click **ADD** to add the event to your schedule.
- Click the **Join A Queue** button to join a virtual queue for an event. The button takes you to the _attractions_ page where you can choose an attraction and join the queue virtually at a convenient timeslot. Click **View Schedule** to see the event on your day planner or **Leave Queue** to remove youself from the virtual queue.
- To remove an event from your planner, simply click on the event and click the **Remove** button. To remove all the events together, click the **Clear Schedule** button and "Yes" on the confirmation popup.
- To access the QR code for a virtual queue, click on the queue from your planner and click "View Slot" on the popup.
- You can filter the events that are displayed on the planner using the checkboxes on the side panel. Simply check the box for the type of event you want to display on the planner, or check the "ALL" box to display all types of events.
- You can view the locations of your events on an interactive map for each day. Click on the map icon beside the date, which will redirect you to the map page and outline the location, along with the title, of each event you have scheduled for that day.

### Interactive Map
The interactive map is a map of the Stampede that can be scrolled up/down, can be zoomed in/out, and has dynamic elements on it to showcase to the user where various stampede concerts, attractions, etc. are. 
- There is a sidebar which has various categories such as concerts, rides, exhibitions, rodeos. Clicking on a category opens a dropdown menu where you can select various events in the category. To select an event, simply click on the checkbox beside its name and an arrow will appear showing you it is "checked".
- Checked events will show up on the interactive map as an orange highlight box that is clickable and will redirect you to the attractions page for the event. You can then join a queue for the event from the attractions page and view that on the day planner and the map (instructions for this are under the day planner heading). 
- **Note: Due to time constraints, only functionality for the following is implemented: Trick Riding, Nashville North, Show home tour, The Zipper. The other events will show a popup stating that the attraction page for them is not implemented**.
- There is a "Show All" and "Hide All" button that will add all events to the map or remove all events from the map
- You can zoom in and out on the map to see more/less by clicking the "+" or "-" buttons on the top left of the map
- You can hide the sidebar so you can see the map more clearly by clicking the "Hide Sidebar" button on the top left of the map


### Virtual Queue
This is where you can join virtual queues for various attractions. **Note: Due to time constraints, only functionality for the following is implemented: Trick Riding, Nashville North, Show home tour, The Zipper.**
- Use the search bar to find attractions.
- Click on one of the above attractions, choose a date and timeslot and join the virtual queue. You can save the unique QR code or send it your phone and show it to the ride operator when its your turn.
- View the attraction in your schedule using the **View Schedule** button or leave the queue using the **Leave Queue** button.
