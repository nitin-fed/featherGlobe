/** @format */

import React, { createContext, Component } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import validations from "./validations";
import { useNavigate } from "react-router-dom";

/**
 * TODO : Reset state on RESET annd CANCEL button
 */

export const FormCtx = createContext({
  fields: {},
  errors: {},
});

const primaryButtonStyle =
  "disabled:opacity-50 ml-3 rounded-lg py-2 px-5 bg-lime-500 text-black hover:bg-lime-800 hover:text-white";

const warningButtonStyle =
  "rounded-lg py-2 px-5 bg-red-500 text-black hover:bg-red-800 hover:text-white";

const userCollectionRef = collection(db, "user");

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      disabledSubmit: false,
    };
  }

  render() {
    const { fields, errors } = this.state;

    const formCtx = {
      fields,
      errors,
      addField: (data) => {
        this.addField(data);
      },
      setFields: this.setFields,
      validateField: this.validateField,
      validatePassword: this.validatePassword,
    };

    return (
      <form action='' onSubmit={this.handleSubmit}>
        <FormCtx.Provider value={formCtx}>
          {this.props.children}

          <div className='float-right'>
            <button
              onClick={(e) => this.handleCancel(e)}
              className={warningButtonStyle}>
              Cancel
            </button>
            <button
              onClick={(e) => this.handleReset(e)}
              className={primaryButtonStyle}>
              Reset
            </button>
            <button
              className={primaryButtonStyle}
              disabled={this.state.disabledSubmit}>
              {this.props.isEditTrue ? "Update" : "Sign  Up"}
            </button>
          </div>
        </FormCtx.Provider>
      </form>
    );
  }

  resetForm(event) {
    event.preventDefault();
  }

  setFields = (event, { id }) => {
    event.persist();

    const { fields } = this.state;
    const field = fields[id];

    this.addField({
      field: {
        ...field,
        value: event.currentTarget.value,
      },
    });
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.handleReset(e);
  };

  handleReset = (e) => {
    e && e.preventDefault();

    Object.entries(this.state.fields).forEach(([element]) => {
      this.setState((prevState) => ({
        ...prevState,
        fields: {
          ...prevState.fields,
          [element]: {
            ...prevState.fields[element],
            value: "",
          },
        },
        errors: {
          ...prevState.errors,
          [element]: "",
        },
      }));
    });
  };

  createUser = async () => {
    await addDoc(userCollectionRef, this.state["fields"]);
  };

  updateUser = async () => {
    const userDoc = doc(db, "user", this.props.id);
    await updateDoc(userDoc, {
      lastName: { value: this.state.fields["lastName"].value },
      firstName: { value: this.state.fields["firstName"].value },
      phone: { value: this.state.fields["phone"].value },
    });
    this.handleReset();
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.handleReset(e);
    if (this.props.isEditTrue) {
      this.updateUser();
      //history("/users");
    } else {
      this.createUser();
    }
  };

  addField = ({ field }) => {
    const { id } = field;

    field = {
      value: "",
      ...field,
    };

    if (id) {
      this.setState((prevState) => {
        return {
          ...prevState,
          fields: {
            ...prevState.fields,
            [id]: field,
          },
        };
      });

      return;
    }

    throw new Error(`please add 'id' field to the input: ${field}`);
  };

  validatePassword = (val) => {};

  validateField = (id, validateConfirmPassword = false) => {
    let error = "";
    const {
      value: fieldValue,
      validate,
      displayName,
      customRules = {},
    } = this.state.fields[id];

    if (validateConfirmPassword) {
      const _passwordValue = this.state.fields["password"].value;
      const _confirmPassword = fieldValue;
      if (_passwordValue !== _confirmPassword) {
        error = "Password does not match";
      } else if (_passwordValue === _confirmPassword) {
        error = "";
      }
      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          ["confirmPassword"]: error,
        },
      }));
    }

    const rules = validate ? validate.split("|") : "";

    if (rules.length) {
      for (const rule in rules) {
        const ruleName = rules[rule];
        const validation = validations[ruleName] || customRules[ruleName];

        const isRuleSatisfied =
          ruleName !== "required" && !fieldValue
            ? true
            : validation.rule().test(fieldValue.toString());

        if (!isRuleSatisfied) {
          error = validation.formatter.apply(null, [displayName || id]);
        }

        if (error !== "") {
          break;
        }
      }

      this.setState((prevState) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [id]: error,
        },
      }));
    }
  };
}
