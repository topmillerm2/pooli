import React, { Component } from 'react';

export default class SignUpField extends Component {
  state = {
    dateInput: 'text'
  };

  render() {
    const {
      input,
      label,
      type,
      placeholder,
      meta: { error, touched }
    } = this.props;
    if (input.name === 'state') {
      return (
        <div>
          <label>{label}</label>
          {renderDropdown(input)}
          <div className="alert">{touched && error}</div>
        </div>
      );
    } else if (input.name === 'dob') {
      return (
        <div>
          <input
            className="form-input"
            {...input}
            type={this.state.dateInput}
            placeholder={placeholder}
            onFocus={() => this.setState({ dateInput: 'date' })}
            onBlur={() => this.setState({ dateInput: 'text' })}
            ref={input => (this.input = input)}
          />
          <div className="alert">{touched && error}</div>
        </div>
      );
    } else {
      return (
        <div>
          <input
            className="form-input"
            {...input}
            type={type}
            placeholder={placeholder}
            ref={input => (this.input = input)}
          />
          <div className="alert">{touched && error}</div>
        </div>
      );
    }
  }
}

const renderDropdown = input => {
  return (
    <select
      {...input}
      className="form-input select"
      ref={input => (this.input = input)}
    >
      <option value="">State</option>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AS">American Samoa</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="AE">Armed Forces Africa/Canada/Europe/Middle East</option>
      <option value="AA">Armed Forces Americas</option>
      <option value="AP">Armed Forces Pacific</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="DC">District Of Columbia</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="GU">Guam</option>
      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MP">Northern Mariana Islands</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="PR">Puerto Rico</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VI">U.S. Virgin Islands</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
    </select>
  );
};
