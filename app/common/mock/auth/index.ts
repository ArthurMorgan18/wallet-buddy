export const authText = {
  pageDescriptionText: {
    heading: 'Welcome to BUDGET BUDDY',
    subHeading: 'Please login to continue',
  },
};

export const loginInputs = [
  {
    type: 'email',
    name: 'email',
    placeholder: 'Enter Email',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Enter Password',
    pattern:
      '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
  },
];

export const signUpInputs = [
  {
    type: 'text',
    name: 'firstName',
    placeholder: 'Enter First Name',
    pattern: "^[A-Za-z]+(?:['-][A-Za-z]+)?$",
  },
  {
    type: 'text',
    name: 'lastName',
    placeholder: 'Enter Last Name',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'Enter Email',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Enter Password',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
  },
  {
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
  },
];
