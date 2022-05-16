/** @format */

const validations = {
  required: {
    rule: () => /\S/,
    formatter(fieldName) {
      return `${fieldName} is required.`;
    },
  },
  numeric: {
    rule: () => /^\d+$/,
    formatter(fieldName) {
      return `${fieldName} should contain only numbers.`;
    },
  },
  email: {
    rule: () =>
      /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i,
    formatter(fieldName) {
      return `Invalid email address`;
    },
  },
  min: {
    rule: () => /^.{4,}$/,
    formatter(fieldName) {
      return `Min 4 characters`;
    },
  },
  max: {
    rule: () => /^.{4,10}$/,
    formatter(fieldName) {
      return `Max 10 characters allowed`;
    },
  },
};

export default validations;
