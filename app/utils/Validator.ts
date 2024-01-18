export type InputType = 'email' | 'password' | 'name' | 'confirmPassword';
class Validator {
  static renderErrorMessage(inputType: InputType) {
    switch (inputType) {
      case 'email':
        return 'Invalid email format';
      case 'password':
        return 'Invalid password format';
      case 'name':
        return 'Invalid name format';
      case 'confirmPassword':
        return 'passwords are not match';
      default:
        throw new Error('Invalid input type');
    }
  }
  static emptyValueChecker(value: string) {
    return value?.length <= 0 || value === undefined;
  }
  static isAuthInputValid(
    pattern: string,
    value: string,
    inputType: InputType
  ): { isValid: boolean; errorMessage: string } {
    const regex = new RegExp(pattern);
    let errorMessage = this.renderErrorMessage(inputType);
    if (this.emptyValueChecker(value))
      return { isValid: true, errorMessage: '' };

    return { isValid: regex.test(value), errorMessage };
  }
}

export default Validator;
