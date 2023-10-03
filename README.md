# Note Taker Application

## Description

The Note Taker application aims to provide small business owners a seamless way to write and save notes. This helps in organizing thoughts and keeping track of tasks to be completed.

## Screenshot

![Note Taker Screenshot](./assets/screenshot.png)

## User Story

**As a** small business owner,  
**I want** to be able to write and save notes,  
**So that** I can organize my thoughts and keep track of tasks I need to complete.

## Acceptance Criteria

- **Given** a note-taking application
    - **When** I open the Note Taker
        - **Then** I am presented with a landing page with a link to a notes page.
    - **When** I click on the link to the notes page
        - **Then** I am presented with a page with existing notes listed in the left-hand column and empty fields to enter a new note title and the note’s text in the right-hand column.
    - **When** I enter a new note title and the note's text
        - **Then** a Save icon appears in the navigation at the top of the page.
    - **When** I click on the Save icon
        - **Then** the new note I have entered is saved and appears in the left-hand column with the other existing notes.
    - **When** I click on an existing note in the list in the left-hand column
        - **Then** that note appears in the right-hand column.
    - **When** I click on the Write icon in the navigation at the top of the page
        - **Then** I am presented with empty fields to enter a new note title and the note’s text in the right-hand column.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use `npm start` to run the application.

## Usage

Navigate to the landing page and click on the link to access the notes page. Use the interface to create, view, and save notes.

## Dependencies

- Node.js
- Express

## License

MIT

## Contributing

Please submit issues and pull requests for anything you might see worthwhile.

## Support

For support, please create an issue on the GitHub project page.

For further queries, contact the developer at [email@example.com](mailto:email@example.com).