import { Link } from "react-router-dom"
import Tables from "../../components/Tables"

function Employees() {
    return(
        <main>
            <div id="employee-div" class="container">
                <h1>Current Employees</h1>
                <Tables/>
                <Link to="/">Home</Link>
            </div>
        </main>
    )
}

export default Employees