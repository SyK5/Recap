export const userInitialState = {
    user: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    },
    isLoggedIn: false,
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER':
            return console.log(action.payload, '--------', state);
    }
}