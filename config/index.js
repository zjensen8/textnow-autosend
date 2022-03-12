module.exports = {
  username: process.env.TEXTNOW_USERNAME || "",
  password: process.env.TEXTNOW_PASSWORD || "",
  recipient: process.env.TEXTNOW_RECIPIENT || "(628) 269-5288",
  message: process.env.TEXTNOW_MESSAGE || "This's the autotext from TN to GV!",
  cookies_str: process.env.TEXTNOW_COOKIES || ""
};
