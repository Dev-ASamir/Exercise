import { ERRORS } from '../common';

export const validateForm = ({ Name, Email, Password }) => {
    console.log("in valid")
    if (Name.length <= 0) {
        return { status: "0", message: ERRORS.emptyName };
    }
    else if (Email.length <= 0) {
        return { status: "0", message: ERRORS.emptyEmail };
    }
    else if (Password.length <= 0) {
        return { status: "0", message: ERRORS.emptyPassword };
    } else {
        return { status: "1" };
    }
}

export const validateLoginForm = ({ Login_Email, Login_Password }) => {
    console.log("in valid")
    if (Login_Email.length <= 0) {
        return { status: "0", message: ERRORS.emptyEmail };
    }
    else if (Login_Password.length <= 0) {
        return { status: "0", message: ERRORS.emptyPassword};
    } else {
        return { status: "1" };
    }
}