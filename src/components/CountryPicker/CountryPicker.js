import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from "./CountryPicker.module.css";
import { getCountries } from "../../api"
const CountryPicker = ({ handleCountrySelect }) => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        const fetchCountries = async () => {
            setCountries(await getCountries())
        }
        fetchCountries()
    }, [])
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={e => handleCountrySelect(e.target.value)}>
                <option value="">Global</option>
                {
                    countries.map(country => (<option value={country.name}>{country.name}</option>))
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;