import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const apiId = "eaac67f2ff254f01b28f7d0e5e884fda";
const token =
  "007eJxTYOhYeUHt+YdJIaE3Jk2fpDrhTlbidPtGmeCzG/4ptb39wxGnwJCamJhsZp5mlJZmZGqSZmCYZGSRZp5ikGqaamFhkpaSaPdDO6UhkJFhllQ/IyMDBIL4bAwhqcWZeekMDABIkCJK";

export const config = { mode: "rtc", codec: "vp8", apiId: apiId, token: token };

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Tesing"