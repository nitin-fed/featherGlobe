

const validations = {
  username: {
    rule: () => {
      return /^[0-9a-zA-Z\b]+$/;
    },
    formatter(fieldName) {
      return `Special characters and spaces not allowed.`;
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
    rule: () => /^.{6,}$/,
    formatter(fieldName) {
      return `Min 6 characters`;
    },
  },
  max: {
    rule: () => /^.{6,24}$/,
    formatter(fieldName) {
      return `Max 24 characters allowed`;
    },
  },
  required: {
    rule: () => /\S/,
    formatter(fieldName) {
      return `${fieldName} is required.`;
    },
  },
};

export default validations;
