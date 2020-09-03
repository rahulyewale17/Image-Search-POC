import Axios, { AxiosPromise, AxiosRequestConfig } from "axios";

const VOICE_URL =
  "frebase function hosted URL";
const IMAGE_URL =
  "firebase function hosted URL";

const voiceImageTranscibeService = {
  getVoiceTranscribeText(audioBytes, channelCount): AxiosPromise<any> {
    let requestOptions: AxiosRequestConfig = Object.assign({
      data: { audioBytes, channelCount },
      url: VOICE_URL,
      method: "post"
    });
    return Axios(requestOptions);
  },
  getImageTranscibetext(imageBytes): AxiosPromise<any> {
    let requestOptions: AxiosRequestConfig = Object.assign({
      data: { imageBytes },
      url: IMAGE_URL,
      method: "post"
    });
    return Axios(requestOptions);
  }
};

export default voiceImageTranscibeService;
