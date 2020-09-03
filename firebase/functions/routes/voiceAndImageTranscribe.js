var Client = require('node-rest-client').Client;
const express = require('express');
const router = express.Router();

let client = new Client();


router.post('/image-recognition', async (req, res) => {
  const imageURL = "https://vision.googleapis.com/v1/images:annotate";
  const { imageBytes } = req.body;

  if (!imageBytes) {
    return res.status(422).send({ error: 'Please provide image in base64 format' });
  }

  let dataObj = {
    requests: [{
      features: [
        {
          maxResults: 1,
          type: "OBJECT_LOCALIZATION"
        },
        {
          maxResults: 1,
          type: "LABEL_DETECTION"
        }
      ],
      image: {
        content: imageBytes
      },
      imageContext: {
        cropHintsParams: {
          aspectRatios: [
            0.8,
            1,
            1.2
          ]
        }
      }
    }]
  }

  transcribeData(dataObj, imageURL, res);

});

/*
  Method to call the Google Api and get the result
*/
const transcribeData = (dataObj, URL, res) => {
  let args = {
    data: dataObj,
    parameters: { key: process.env.GOOGLE_SPEECH_VISION_API_KEY },
    headers: { "Content-Type": "application/json" }
  };

  let request = client.post(URL, args, (data, response) => {
    const transcribeText = JSON.stringify(data);
    return res.status(200).send(transcribeText);;
  });

  request.on('error', (err) => {
    return res.status(500).send({ error: err.message });
  })
}

module.exports = router;