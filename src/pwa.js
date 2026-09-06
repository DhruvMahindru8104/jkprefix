import { registerSW } from "virtual:pwa-register";

registerSW({
  onNeedRefresh() {
    console.log("New version available");
  },

  onOfflineReady() {
    console.log("JKPrefix is ready to work offline");
  },
});