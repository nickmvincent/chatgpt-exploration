Barebones extension to save ChatGPT transcripts:

To run as Temporary Add-on:
- download SaveMyChat folder
- go to `about:debugging#/runtime/this-firefox'
- Load Temporary Add-on
- Select `manifest.json` (or other file)



The extension adds a single button to the ChatGPT interface, "Save Conversation" (it also shows a blue border around the window, just as an easy way to confirm it loaded). Click the button to send a json file with each message in the current conversation to your browser Downloads location, titled based on the current date.

e.g. `chatgpt_2022-12-05.json`