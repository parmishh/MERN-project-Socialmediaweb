
#Team Members
    - Paramjit Singh
    - Ardhi Dattatreya Varma
    - Pratik Ranjan Sau

# Problem Statement 
 -**D3h01** - Platform for sharing and flexing code screenshots / snippets where users can like and comment on posts. Users have to post code snippets that they wrote and liked and other users can see who all have posted their snippets. The snippets should be in text form(can be copied) and not screenshots/photos with syntax highlighting.
        - Share snippets option and page for each snippet
        - Give reactions and suggest edits to the shared snippets

# Features :- 
 -  New User Sign Up
 -  Can Share Code snippets or screenshots
 -  Edit Code
 -  Reply and Suggest Edits for the code snippet
 -  Can directly message a user for more information
 -  Can Video Call a user
 -  Can view code snippets of the user's followers
![link](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/296/755/datas/original.PNG)

# Our Approach And Implementation 

## User Authorisation -
- Implemented jwt tokens.
- Current user is stored in the redux store and the data of the user is stored in the database.

![link](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/296/756/datas/original.PNG)

## Post 
- New post creation
- One can like or provide emojis and the state is stored in redux. Also updated in the database simultaneously.
- Comment option is provided
- Code is highlighted using prism.js npm package which supports 100+ languages.
- Code can be edited and shared from the post directly
![link](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/296/753/datas/original.PNG)

## Direct Messaging 
-  Implemented using socket.io
- Provides online status of the users and emojis can be sent as well
![link](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/296/757/datas/original.PNG)

##WebRTC Implementation 
-  Implemented VideoCalling
![link](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/296/758/datas/original.PNG)

#DataBase Models for satisfaction
**UserModel**
![link](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/296/751/datas/original.PNG)

**ChatsModel**
![link](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/296/752/datas/original.PNG)

**PostModel**
![link](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/296/752/datas/original.PNG)

#Challenges Faced 
- We took it upon ourselves to use MongoDB as an option in this project. Many new concepts and mistakes were made and corrected. 
- Many bugs appeared during this project and sleepless nights were spent inorder to deliver this project.
- We wanted to more features but were bound by time.Still we have tried to add as many features as we can.
- Integrating backend and frontend was a challenge for us . Recreating scenarios in Postman API is easy but passing down the props in complex nested structure is a pain in the forehead.
