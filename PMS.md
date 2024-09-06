# Project Management System

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Features](#features)
- [Schemas](#schemas)
- [Class Diagrams](#class-diagrams)
  - [Project](#project)
  - [Task](#task)
  - [Comment](#comment)
- [Timeline](#timeline)

## Introduction

Project Management System is a web application that allows the user to manage their projects. The user can create, update, delete, and view projects. The user can also add, update, delete, and view tasks for each project. The user can also add, update, delete, and view comments for each task.

## Technologies

- NodeJs
- ExpressJs
- MongoDB
- Mongoose

## Features

- User can create a project
- User can update a project
- User can delete a project
- User can view all projects
- User can view a project
- User can add a task to a project
- User can update a task
- User can delete a task
- User can view all tasks
- User can view a task
- User can add a comment to a task
- User can update a comment
- User can delete a comment
- User can view all comments
- User can view a comment

## Schemas

### Project

- Title
- Description
- Start Date
- End Date
- Status (In Progress, Completed, Cancelled)
  **You are allowed to add more fields to the schema based on your requirements**

### Task

- Title
- Description
- Start Date
- End Date
- Status (In Progress, Completed, Cancelled)
- Project ID
- Assigned To
  **You are allowed to add more fields to the schema based on your requirements**

### Comment

- Description
- Task ID
- User ID
  **You are allowed to add more fields to the schema based on your requirements**

## Class Diagrams

### Project

| Field       | Type   | Description                                                   |
| ----------- | ------ | ------------------------------------------------------------- |
| Title       | String | The title of the project                                      |
| Description | String | A brief description of the project                            |
| Start Date  | Date   | The start date of the project                                 |
| End Date    | Date   | The end date of the project                                   |
| Status      | Enum   | The status of the project (In Progress, Completed, Cancelled) |

### Task

| Field       | Type   | Description                                                |
| ----------- | ------ | ---------------------------------------------------------- |
| Title       | String | The title of the task                                      |
| Description | String | A brief description of the task                            |
| Start Date  | Date   | The start date of the task                                 |
| End Date    | Date   | The end date of the task                                   |
| Status      | Enum   | The status of the task (In Progress, Completed, Cancelled) |
| Project ID  | String | The ID of the associated project                           |
| Assigned To | String | The ID of the user assigned to the task                    |

### Comment

| Field       | Type   | Description                             |
| ----------- | ------ | --------------------------------------- |
| Description | String | The content of the comment              |
| Task ID     | String | The ID of the associated task           |
| User ID     | String | The ID of the user who made the comment |

## Timeline

- Phase I: 2 Weeks (Basic CRUD operations)
- Phase II: 2 Weeks (Advanced features)
