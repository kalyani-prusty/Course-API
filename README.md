 Course Management API
 =======================


Overview:-
=========

This is a simple Course Management API built using Node.js and Express. It allows users to manage a list of courses, including adding, updating, retrieving, and deleting courses. The data is stored in a JSON file, making it easy to read and write without a database.

Technology Stack:-
================

Node.js: JavaScript runtime for server-side development.
Express: Web framework for building APIs.
File System (fs): Built-in Node.js module to handle file operations.
JSON: Lightweight data format used to store course information.


Functionality:-
==============
This API has the following functionalities:

Add Course: Users can add a new course by providing a title, description, and duration.
Get All Courses: Users can retrieve a list of all available courses.
Get Course by ID: Users can fetch details of a specific course using its ID.
Update Course: Users can update an existing course’s information.
Delete Course: Users can remove a course from the list.

How It Works:-
=============

The API has several routes to handle different requests:

GET /api/v1/courses:-
--------------------
Retrieves all courses from the JSON file.
Returns a JSON array of courses.

POST /api/v1/addCourse:-
-----------------------
Adds a new course to the list.
Requires a JSON body with title, description, and duration.
Checks for duplicate titles before adding.

GET /api/v1/course/:id:-
-----------------------
Fetches a specific course by its ID.
Returns course details if found or a "Course not found" message if not.

PUT /api/v1/updateCourse/:id:-
-----------------------------
Updates the details of an existing course.
Requires a JSON body with updated title, description, or duration.
DELETE /api/v1/deleteCourse/:id:-
--------------------------------
Deletes a course based on its ID.
Returns a success message or a "Course not found" message.

Getting Started:-
=================

Clone the repository to your local machine.
Install dependencies by running npm install in the project directory.
Start the server with the command node index.js.
Use tools like Postman or CURL to test the API routes.

Example JSON Structure:-
=======================

The courses are stored in a file named courses.json. Here’s an example of what the data looks like:
[
  {
    "id": 1,
    "title": "java",
    "description": "it is a full-stack java course",
    "duration": "6 weeks"
  },
  {
    "id": 2,
    "title": "python",
    "description": "it is a comprehensive python programming course",
    "duration": "5 weeks"
  }
]