import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({});

  const setFormState = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const authenticateForm = () => {
    if (
      !signUpForm.username ||
      !signUpForm.firstName ||
      !signUpForm.lastName ||
      !signUpForm.address ||
      !signUpForm.city ||
      !signUpForm.state ||
      !signUpForm.zip ||
      !signUpForm.ageGroup ||
      !signUpForm.ethnicity ||
      !signUpForm.veteran
    ) {
      window.alert("Please complete all fields and try again.");
      // toast("Please complete all fields and try again.");
    }

    // if any information is missing "Please fill out all fields."
    // if firstName, lastName, city have numbers, "Invalid character, please try again."
  };
  return (
    <div className="grid w-full max-w-xl bg-gradient-to-b from-divPurple to-darkPurple px-5 py-10">
      <div className="flex flex-col items-center text-pretendWhite text-5xl">
        ADD STUDENT
      </div>
      <form className="appearance-none">
        <div className="flex mb-4 border-b border-pretendWhite">
          <label>
            <FontAwesomeIcon icon="fa-regular fa-user" />
          </label>
          <input
            className="bg-divPurple border-none placeholder-textPurple"
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setFormState(e)}
            value={signUpForm.username ? signUpForm.username : ""}
          />
        </div>

        <div className="flex justify-between">
          <div className="w-48 mb-6 border-b border-pretendWhite">
            <label
              className="block text-buttonPink text-sm font-bold mb-2"
              for="password"
            >
              First Name
            </label>
            <input
              className="bg-divPurple border-none placeholder-textPurple"
              id="firstName"
              type="text"
              placeholder="Jane"
              name="firstName"
              onChange={(e) => setFormState(e)}
              value={signUpForm.firstName ? signUpForm.firstName : ""}
            />
          </div>
          <div className="mb-6 border-b border-pretendWhite">
            <label
              className="block text-buttonPink text-sm font-bold mb-2"
              for="password"
            >
              Last Name
            </label>
            <input
              className="w-48 bg-divPurple border-none placeholder-textPurple"
              id="lastName"
              type="text"
              placeholder="Doe"
              name="lastName"
              onChange={(e) => setFormState(e)}
              value={signUpForm.lastName ? signUpForm.lastName : ""}
            />
          </div>
        </div>
        <div className="mb-6 border-b border-pretendWhite">
          <label
            className="block text-buttonPink text-sm font-bold mb-2"
            for="password"
          >
            Address
          </label>
          <input
            className="bg-divPurple border-none placeholder-textPurple"
            id="address"
            type="text"
            placeholder="123 Main Street"
            name="address"
            onChange={(e) => setFormState(e)}
            value={signUpForm.address ? signUpForm.address : ""}
          />
        </div>
        <div className="flex justify-between">
          <div className="mb-6 border-b border-pretendWhite">
            <label
              className="block text-buttonPink text-sm font-bold mb-2"
              for="password"
            >
              City
            </label>
            <input
              className="w-24 bg-divPurple border-none placeholder-textPurple"
              id="city"
              type="text"
              placeholder="City"
              name="city"
              onChange={(e) => setFormState(e)}
              value={signUpForm.city ? signUpForm.city : ""}
            />
          </div>
          <div className="mb-6 border-b border-pretendWhite">
            <label
              className="block text-buttonPink text-sm font-bold mb-2"
              for="password"
            >
              State
            </label>
            <select
              className="w-25 bg-divPurple border-none text-textPurple"
              placeholder="State"
              name="state"
              onChange={(e) => setFormState(e)}
              value={signUpForm.state ? signUpForm.state : ""}
            >
              <option value="" disabled selected>
                State
              </option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
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
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="mb-6 border-b border-pretendWhite">
            <label
              className="block text-buttonPink text-sm font-bold mb-2"
              for="password"
            >
              Zip Code
            </label>
            <input
              className="w-12 bg-divPurple border-none placeholder-textPurple"
              id="zip"
              type="text"
              placeholder="12345"
              name="zip"
              onChange={(e) => setFormState(e)}
              value={signUpForm.zip ? signUpForm.zip : ""}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mb-6 border-b border-pretendWhite">
            <label
              className="block text-buttonPink text-sm font-bold mb-2"
              for="password"
            >
              Age
            </label>
            <input
              className="w-12 bg-divPurple border-none placeholder-textPurple"
              id="ageGroup"
              type="text"
              placeholder="30"
              name="ageGroup"
              onChange={(e) => setFormState(e)}
              value={signUpForm.ageGroup ? signUpForm.ageGroup : ""}
            />
          </div>
          <div className="mb-6 border-b border-pretendWhite">
            <label
              className="block text-buttonPink text-sm font-bold mb-2"
              for="password"
            >
              Ethnicity
            </label>
            <select
              className="w-64 bg-divPurple border-none text-textPurple"
              name="ethnicity"
              onChange={(e) => setFormState(e)}
              value={signUpForm.ethnicity ? signUpForm.ethnicity : ""}
            >
              <option value="" disabled selected>
                Ethnicity
              </option>
              <option value="NativeAmerican">
                American Indian or Alaska Native
              </option>
              <option value="Asian">Asian</option>
              <option value="Black">Black or African American</option>
              <option value="Latinx">Hispanic or Latino</option>
              <option value="PacificIslander">
                Native Hawaiian or Other Pacific Islander
              </option>
              <option value="White">White</option>
              <option value="NA">Prefer Not to Answer</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-buttonPink text-sm font-bold mb-2"
            for="password"
          >
            Veteran Status
          </label>
          <label
            className="bg-divPurple border-none text-textPurple"
            onChange={(e) => setFormState(e)}
            value={signUpForm.veteran ? signUpForm.veteran : ""}
          >
            <input type="radio" name="veteran" value={true} /> I am a veteran
          </label>
          <br></br>
          <label
            className="bg-divPurple border-none text-textPurple"
            onChange={(e) => setFormState(e)}
            value={signUpForm.veteran ? signUpForm.veteran : ""}
          >
            <input type="radio" name="veteran" value={false} /> I am not a
            veteran
          </label>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="content-center h-12 px-6 bg-buttonPink text-pretendWhite rounded-full"
            type="button"
            onClick={authenticateForm}
          >
            Add To Database
          </button>
        </div>
      </form>
      <p className="text-center text-labelGrey text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default SignUp;
