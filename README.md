# Image-Search-POC


**It provides the capability to search HCL Commerce Catalog using image search on React Stores.**


There are two ways image search can be done.

1.	By uploading an image-  used javascript input tag to accept only image file file.

2.	By opening the web cam and capturing the image- used the react-webcam for capturing the live image 


**React-Webcam** - for capturing the live image.
 
**Google Vision API** - Used to get label from an image.


**Note**

The library **react-webcam** used for taking pictures doesn't support in IOS chrome as this library uses HTML5 Media API “getUserMedia”  which is not supported by chrome in IOS.

## UI
**Steps to include the Image search in your project:**
1. 1.	You need to install the react web cam in your project as a dependency.

   `npm install react-webcam –save`
   
    Once installation is done. Verify the entry  in your package.json file.

2. In your Search Bar Widget,import the search-type.tsx and used it as component

    ` import { SearchTypes } from "../Search-types/search-types";`

    `  <SearchTypes showSpeechToText={true} setSearchBoxVal={setInput} />`

3. We have created the firebase API to call the google speech API.The call to the firebase API is placed in the **voiceImageTranscribeService**
   Host the Node Code on the firebase and use the Firebase hosted URL for the API in voiceImageTranscribeService.ts
   `const VOICE_URL = "Your Firebase API URL"`
   
4. Once All steps are done, Voice search will start working.

## Node(Backend)
  On the Firebase side, Google Vision API is used for gettings labels from image
   
  For Google Speech API to Work,follow these steps

  -Need to create the project on "https://console.cloud.google.com/"
  
  -Enable Billing
  
  -Enable Google Vision API
  
  -setup autentication 
  
  -create service account
  
  -User service key in firebase .env file
  
  Once you get the Google Key,add it in .env file placed inside **firebase/functions** folder
  
  
  **Reference**
  
  For more details,refer the ImplementationGuide_ImageRecognitionSearch.docx file
 
  

