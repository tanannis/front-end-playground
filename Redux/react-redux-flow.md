# React-Redux flow


## Steps / Flow:

1. User makes an action, `updateCampusData` on the React app

2. `updateCampusData`  then gets dispatched to a Redux thunk function, `fetchUpdatedCampus` (matching user action to a thunk function)

3. Thunk function CRUDs the data and dispatch an Action creator that returns an Action type

5. Reducer detects the Action type -> Switch case: which action to return which state 

6. Updated state will be saved in Props


## Redux Action file
- Initializing Action types
- Initializing and Exporting Action creator functions
- Initializing and Exporting Thunks to CRUD data from api endpoints AND dispatch to Action creator functions


## Redux Reducer file
- initial state object
- Initializing and Exporting Reducer functions for each cases using a `Switch Case`




