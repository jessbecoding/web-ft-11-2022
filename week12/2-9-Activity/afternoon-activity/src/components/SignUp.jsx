import React, { useState } from "react";

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({});

  const setFormState = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    // username needs to be at least 6 characters long and less than 14
    if (signUpForm?.username?.length <= 6 || signUpForm.username.length >= 14) {
      window.alert("Username needs to be between 6 and 14 characters long.");
    }
    // password has special character, at least three numbers, at least 6 characters
    if (signUpForm?.password.length < 6) {
      window.alert("Your password needs to be at least 6 characters.");
    }

    // email: @ symbol
    if (!signUpForm?.email?.includes("@")) {
      window.alert("Invalid email format.");
    }
  };
  return (
    <div className="gridw-full max-w-xl bg-divPurple px-5 py-10">
      <div className="text-pretendWhite text-5xl">ADD STUDENT</div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username<i class="fa-solid fa-user"></i>
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

        <div className="flex">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Last Name
            </label>
            <input
              className="bg-divPurple border-none placeholder-textPurple"
              id="lastName"
              type="text"
              placeholder="Doe"
              name="lastName"
              onChange={(e) => setFormState(e)}
              value={signUpForm.lastName ? signUpForm.lastName : ""}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
        <div className="flex">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              City
            </label>
            <input
              className="bg-divPurple border-none placeholder-textPurple"
              id="city"
              type="text"
              placeholder="Phoenix"
              name="city"
              onChange={(e) => setFormState(e)}
              value={signUpForm.city ? signUpForm.city : ""}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              State
            </label>
            <select
              className="w-25 bg-divPurple border-none text-textPurple"
              onChange={(e) => setFormState(e)}
              value={signUpForm.state ? signUpForm.state : ""}
            >
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
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
        <div className="flex">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Age
            </label>
            <input
              className="bg-divPurple border-none placeholder-textPurple"
              id="ageGroup"
              type="text"
              placeholder="30"
              name="ageGroup"
              onChange={(e) => setFormState(e)}
              value={signUpForm.ageGroup ? signUpForm.ageGroup : ""}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Ethnicity
            </label>
            <select
              className="bg-divPurple border-none text-textPurple"
              onChange={(e) => setFormState(e)}
              value={signUpForm.state ? signUpForm.state : ""}
            >
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
            className="block text-gray-700 text-sm font-bold mb-2"
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
        <div className="flex-col items-center justify-between">
          <button
            className="content-center h-12 px-6 bg-buttonPink text-pretendWhite rounded-full"
            type="button"
            onClick={submitForm}
          >
            Add To Database
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default SignUp;
