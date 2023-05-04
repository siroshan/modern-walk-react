# modern-walk-react

## 1.1.1

### Patch Changes

- 2e9d977: - Disabled submit button and displays loading message while loading in sign in and sign up page
  - Centered logo in navigation bar
  - Limited the amount of products displayed in flash sale to four

## 1.1.0

### Minor Changes

- 7ad473c: - Implemented sign in and sign up functionalities.
  - Installed [react-hook-form](https://react-hook-form.com) for form features (sign in and sign up form).
  - Installed [react-query](https://tanstack.com/query/v3/) for handling http requests.
  - Added input field validations.
  - Navigation bar updated with sign in link and profile menu when user is signed in.
  - Used cookies to store user id to handle Authentication functionalities and routing.
  - Seperated axios requests functionalities from pages to service classes.
  - Implemented singleton pattern for service classes.
  - Added Skeleton loading UI for product cards.

## 1.0.0

### Major Changes

- 238744a: Converted the application to Typescript
