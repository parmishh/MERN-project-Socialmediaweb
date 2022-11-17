


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

**WebRTC Implementation** 
-  Implemented VideoCalling
![link](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/296/758/datas/original.PNG)




