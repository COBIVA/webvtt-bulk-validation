# Bulk Validtation Tool for WebVTT Transcripts
This small terminal application will loop over .txt files in a specified directory and pass them through the [WebVTT parser and validator package](https://github.com/w3c/webvtt.js/). It assists with identifying invalid WebVTT formatted files over a large number of files istead of manually validating each one using a [web-based validator](https://w3c.github.io/webvtt.js/parser.html).

### Requirements:
- [Node.js](https://nodejs.org/en) installed
- IDE such as [Visual Studio Code](https://code.visualstudio.com/)

### How to use:
1. Download or clone repository
2. Open as a project in your IDE
3. In the terminal from the project directory, run `npm install`
4. Next, edit the `app.js` file and point `DIR_PATH` to the directory of WebVTT files to be validated (line 6)
5. Save and run `node app.js`
6. A list of invalid file names will be returned (if any)
