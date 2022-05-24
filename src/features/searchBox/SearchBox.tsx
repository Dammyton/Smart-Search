import React, { useState, useEffect } from "react";
import styles from "./SearchBox.module.css";
import { getCountries } from "./countrySlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

const SearchBox = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countrySlice.data);

  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState<String>();
  const [selectedCity, setSelectedCity] = useState<String>();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateError, setStateError] = useState(false);
  const [cityError, setCityError] = useState(false);

  const getAllCountries = () => {
    dispatch(getCountries());
  };

  useEffect(() => {
    // GET ALL COUNTRIES
    getAllCountries();
  }, []);

  const resetState = () => {
    setSelectedState("");
    setSelectedCity("");
    setCityError(false);
    setCityError(false);
    setCities([]);
    setStates([]);
  };

  const selectCountry = (selected: any) => {
    setSelectedCountry(selected);
    resetState();

    if (selected) {
      // GET THE STATES FOR THE SELECTED COUNTRY
      let str = selected.toString();
      let country = countries.find((e: any) => e.name === str);

      if (country?.states.length <= 0) {
        setStateError(true);
      } else {
        setStateError(false);
        setStates(country?.states);
      }
    }
  };

  const selectState = (selected: any) => {
    setSelectedState(selected);

    if (selected) {
      // GET THE CITIES FOR THE SELECTED STATE
      let str = selected.toString();
      let state: any = states.find((e: any) => e.name === str);
      if (state?.cities.length <= 0) {
        setCityError(true);
      } else {
        setCityError(false);
        setCities(state?.cities);
      }
    }
  };

  return (
    <>
      <div className={`${styles.start} mb-5`}>
        <div className="text-center mb-3">
          <h3>Let's Get Started</h3>
          <hr className={styles.border} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-2">
              <label htmlFor="country">Select Country</label>
              <div className="form-group">
                <select
                  className="form-control custom-select"
                  onChange={(e: any) => selectCountry(e.target.value)}
                >
                  <option defaultValue={"selected"}>Select Country</option>
                  {countries?.map((country: any) => {
                    return (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <label htmlFor="state">Select State</label>
              <div className="form-group">
                <select
                  className="form-control custom-select"
                  onChange={(e: any) => selectState(e.target.value)}
                >
                  <option defaultValue={"selected"}>Select State</option>
                  {states?.map((state: any) => {
                    return (
                      <option key={state.id} value={state.name}>
                        {state.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {stateError && (
                <div className="alert alert-warning" role="alert">
                  This Country Has No States!
                </div>
              )}
            </div>
            <div className="col-md-4 mt-2">
              <label htmlFor="city">Select City</label>
              <div className="form-group">
                <select
                  className="form-control custom-select"
                  onChange={(e: any) => setSelectedCity(e.target.value)}
                >
                  <option defaultValue={"selected"}>Select City</option>
                  {cities?.map((city: any) => {
                    return (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {cityError && (
                <div className="alert alert-warning" role="alert">
                  This State Doesn't Have Any City!
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 text-center">
            {selectedCountry && (
              <h4 className="selected_value">
                Selected Country:
                <span>{selectedCountry}</span>
              </h4>
            )}
            {selectedState && (
              <h4 className="selected_value">
                Selected State:
                <span>{selectedState}</span>
              </h4>
            )}
            {selectedCity && (
              <h4 className="selected_value">
                Selected City:
                <span>{selectedCity}</span>
              </h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
