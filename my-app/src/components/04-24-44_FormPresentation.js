import React from 'react';

function FormPresentation({ data, handleChange }) {
  return (
    <div>
      <header className="page-title">
        <h1>Form Practice</h1>
      </header>

      <section className="page-content">
        <div className="form">
          <form>
            <div className="form__group form__group--first-name">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form__group form__group--last-name">
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form__group form__group--age">
              <input
                type="number"
                name="age"
                id="age"
                placeholder="Age"
                value={data.age}
                onChange={handleChange}
              />
            </div>

            <div className="form__group form__group--gender">
              Gender:{' '}
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="genderMale"
                  value="Male"
                  checked={data.gender === 'Male'}
                  onChange={handleChange}
                />{' '}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="genderFemale"
                  value="Female"
                  checked={data.gender === 'Female'}
                  onChange={handleChange}
                />{' '}
                Female
              </label>
            </div>

            <div className="form__group form__group--annual-plan">
              Annual plan:{' '}
              <select
                name="annualPlan"
                id="annualPlan"
                value={data.annualPlan}
                onChange={handleChange}
              >
                <option value="">Choose your annual plan</option>
                <option value="20">$20 / year</option>
                <option value="50">$50 / year</option>
                <option value="100">$100 / year</option>
              </select>
            </div>

            <div className="form__group form__group--extra-packages">
              {/* Array of checkboxes */}
              Extra packages:
              <label>
                <input
                  type="checkbox"
                  name="extraPackages"
                  value="Midnight Supreme"
                  checked={data.extraPackages.includes('Midnight Supreme')}
                  onChange={handleChange}
                />
                Midnight Supreme
              </label>
              <label>
                <input
                  type="checkbox"
                  name="extraPackages"
                  value="10% Discount"
                  checked={data.extraPackages.includes('10% Discount')}
                  onChange={handleChange}
                />
                10% Discount
              </label>
              <label>
                <input
                  type="checkbox"
                  name="extraPackages"
                  value="Vacation Ticket"
                  checked={data.extraPackages.includes('Vacation Ticket')}
                  onChange={handleChange}
                />
                Vacation Ticket
              </label>
            </div>

            <button type="submit" className="form__submit">
              Submit
            </button>
          </form>
        </div>

        <div className="result">
          <header className="result__header">
            <h2>Entered Information</h2>
          </header>

          <section className="result__content">
            <div className="result__name">
              <p>
                Full name{' '}
                <span className="result__text">
                  : {data.firstName} {data.lastName}
                </span>
              </p>
            </div>

            <div className="result__age">
              <p>
                Age <span className="result__text">: {data.age}</span>
              </p>
            </div>

            <div className="result__gender">
              <p>
                Gender <span className="result__text">: {data.gender}</span>
              </p>
            </div>

            <div className="result__annual-plan">
              <p>
                Annual plan{' '}
                <span className="result__text">
                  : {data.annualPlan && `$${data.annualPlan} / year`}
                </span>
              </p>
            </div>

            <div className="result__extra-packages">
              <p>
                Extra packages{' '}
                <span className="result__text">
                  : {data.extraPackages.join(', ')}
                </span>
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default FormPresentation;
