import { Link } from "react-router-dom";
import React, { useState, useRef} from "react";
import DatePicker from "react-datepicker";
import { states } from "../../data/states";
import { departments } from "../../data/departments";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch } from "react-redux";
import { pushEmployee } from "../../redux/Reducer/slice";
import Modal from "../../components/Modal/Modal.jsx";

function Home() {
    const dispatch = useDispatch();

    const [isShowing, setIsShowing] = useState(false);

    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const streetInput = useRef();
    const cityInput = useRef();
    const zipInput = useRef();

    const [birthDate, setBirthDate] = useState(null);
    const [startDate, setStartDate] = useState(null);

    const statesOptions = states
    const [state, setState] = useState(states[0]);

    const departmentsOptions = departments
    const [department, setDepartment] = useState(departments[0]);


    const onEditState = (value) => {
        setState(value);
    }

    const onEditDepartment = (value) => {
        setDepartment(value)
    }

    const handleSubmit = (e) => {

        const employee = {
            id : Date.now(),
            firstName : firstNameInput.current.value,
            lastName : lastNameInput.current.value,
            birthDate : JSON.stringify(birthDate).substring(1,11),
            startDate : JSON.stringify(startDate).substring(1,11),
            street : streetInput.current.value,
            city : cityInput.current.value,
            zip : zipInput.current.value,
            state : state.value,
            department : department.value,
        }
        console.log(employee)
        let employeeArray = Object.values(employee);

        if (!employeeArray.some(element => element === '' || element === "ull")) {
        dispatch(pushEmployee(employee))
        setIsShowing(true);
        }
    }

    return(
        <main>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/employees-list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input ref={firstNameInput} id="first-name" required="required"/>

                    <label htmlFor="last-name">Last Name</label>
                    <input ref={lastNameInput} id="last-name" required="required"/>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker selected={birthDate} onChange={(date:Date) => setBirthDate(date)} id="date-of-birth" required="required" />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} id="start-date" required="required" />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input ref={streetInput} id="street" required="required" />

                        <label htmlFor="city">City</label>
                        <input ref={cityInput} id="city" required="required" />

                        <label htmlFor="state">State</label>
                        <Dropdown
                            options={statesOptions}
                            onChange={onEditState}
                            value={state}
                        />
                        <label htmlFor="zip-code">Zip Code</label>
                        <input ref={zipInput} id="zip-code" required="required"/>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                        <Dropdown
                            options={departmentsOptions}
                            onChange={onEditDepartment}
                            value={department}
                        />
                </form>

                <Modal isShowing={isShowing} close={() => setIsShowing(false)}/>

                <button onClick={handleSubmit} >Save</button>
            </div>
        </main>
    )
}

export default Home