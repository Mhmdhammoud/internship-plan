# Expense Tracker API

This is a simple expense tracker API built with Express and MongoDB. It allows you to create, read, update and delete expenses. Expenses are connected to the user

## Expense

An expense has the following properties:

- `_id` (ObjectId): The unique identifier of the expense
- `description` (String): The description of the expense
- `amount` (Number): The amount of the expense
- `createdAt` (Date): The date when the expense was created
- `updatedAt` (Date): The date when the expense was last updated
- `user` (ObjectId): The unique identifier of the user that created the expense

## User

A user has the following properties:

- `_id` (ObjectId): The unique identifier of the user
- `name` (String): The name of the user
- `email` (String): The email of the user
- `password` (String): The password of the user
- `phoneNumber` (String): The phone number of the user
- `createdAt` (Date): The date when the user was created
- `updatedAt` (Date): The date when the user was last updated
