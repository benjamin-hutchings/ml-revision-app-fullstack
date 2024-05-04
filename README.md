# ML Revision App
*Please note there is no online demo for this app as it will be replaced with a more advanced application utilising AI assistants and RAG.*

## Overview
The ML Revision App is a full-stack application designed to assist users in revising machine learning concepts. It provides a user-friendly interface for browsing topics and viewing revision cards for concepts within these topics. Users can add, remove, and edit both topics and concepts, allowing for a customisable learning experience.

## Technologies Used
- React
- Tailwind CSS
- Node.js
- SQLite3

## Features
- **CRUD Functionality**: Users can perform CRUD (Create, Read, Update, Delete) operations on both topics and concepts, allowing for easy management and customization of content.
- **Topic Selection**: Users can select topics of interest and view revision cards for concepts within these topics.
- **Revision Cards**: Each concept is presented in a revision card format, providing a concise summary along with the option to show/hide the definition.
- **User Interaction**: Users can interact with the app to add new topics and concepts, edit existing ones, and remove topics or concepts they no longer need.

## Running the App
To run the app locally, follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/benjamin-hutchings/ml-revision-app-fullstack.git
```
2. Backend:
```bash
cd ml-revision-api
npm install
node app.js
```
3. Frontend(recommended in a new terminal):
```bash
cd ml-revision-app
npm install
npm start
```
5. Open your browser and navigate to `http://localhost:3000` to access the ML Revision App.

## Usage
1. **Select Topics**: Browse through the list of topics and select the one you want to revise.
2. **View Revision Cards**: Once a topic is selected, view the revision cards for concepts within that topic.
3. **Add Concepts**: Add new concepts to a topic by providing a name and definition.
4. **Edit Concepts**: Update the name or definition of existing concepts.
5. **Remove Concepts**: Delete concepts that are no longer needed.
6. **Manage Topics**: Add new topics, rename existing topics, or remove topics as necessary.

## Contributors
- [Benjamin Hutchings](https://github.com/benjamin-hutchings/) - Creator