// "stwórz formularz do rejestracji usera"

// Część 1
// formularz ma posiadać 4 inputy o nazwach odpowiednio:
// - email, password, confirm-password oraz agreement
// o typach odpowiednio:
// - email, password, password, checkbox
// komponent RegisterForm ma zawierać 1 metodę do zmiany stanu w do obu komponentów

// Część 2 
// komponent RegisterForm ma zawierać metodę onSubmit, która dokonuje walidacji:
// - email - email
// - password/confirm-password - jest dłuższe niż 8 znaków 
// - inputy na hasła mają taką samą wartość
// - agreement musi mieć wartość true

// Część 3
// jeśli walidacja nie przejdzie, trzeba wyświetlić komunikat błędu "ValidationError"
// jeśli walidacja się powiedzie, trzeba wyświeltić komunikat "User created"
import React from 'react';

class RegisterForm extends React.Component {
	state = {
		email: '',
        password: '',
        confirmPass: '',
		agreement: true,
		imBusy: false,
		imWithError: false,
		isValidated: false
	};

handleChange = (event) => {
    const { type, name, value, checked } = event.target;

    if (type === 'checkbox') {
        this.setState({ [name]: checked });
    } else {
        this.setState({ [name]: value });
    }
};

isFormValid = () => {
    const { email, password, confirmPass, agreement } = this.state;

    const isEmailValid = (email !== '') && (email.includes('@'));
    const isPasswordValid = password.length > 7;
    const isConfirmedValid = (confirmPass.length >7) && (confirmPass === password);
    const isAgreementValid = agreement === true;

    const conditions = [ isEmailValid, isPasswordValid, isConfirmedValid, isAgreementValid ];

    const isConditionsValid = !conditions.includes(false);

    return isConditionsValid;
};

    onFormSubmit = (event) => {
    event.preventDefault();

    if (this.isFormValid()) {
        this.setState({ imBusy: true });

        setTimeout(() => {
            this.setState({
                email: '',
                password: '',
                confirmPass: '',
                agreement: true,
                imBusy: false,
                imWithError: false,
                isValidated: true
            });
        }, 3000);
    } else {
        this.setState({ 
            imWithError: true,
            isValidated: false 
        });
    }
    };

render() {
    const { email, password, confirmPass, agreement, imBusy, imWithError, isValidated } = this.state;

    return (
        <div >
        {imBusy ? (
            <span>Please wait</span>
        ) : (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Type email" 
                    value={email} 
                    onChange={this.handleChange} />
                </div>
                <div>
                    <input
                    type="password"
                    name="password"
                    placeholder="password" 
                    value={password}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                    type="password"
                    name="confirmPass"
                    placeholder="Re-enter password" 
                    value={confirmPass}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="agreement">Agreement:</label>
                    <input
                    type="checkbox"
                    name="agreement"
                    checked={agreement}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
                {isValidated && <span>User created</span>}
                {imWithError && <span>Validation Error</span>}

            </form>
        )}
    </div>
    );
}
}

export default RegisterForm;
