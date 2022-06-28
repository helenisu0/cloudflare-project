import "./employee.css";
import { CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function Employee() {
  return (
    <div className="employee">
      
        <div className="employeeTitleContainer">
            <h1 className="employeeTitle">Edit User</h1>
           <Link to="/newEmployee">
           <button className="employeeAddButton">Create</button>
           </Link>
        </div>
        <div className="employeeContainer">
          <div className="employeeShow">
            <div className="employeeShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="employeeShowImg"
              />
              <div className="employeeShowTopTitle">
                <span className="EmployeeShowUserName">Anna Becker</span>
                <span className="EmployeeShowUserTitle">Software Engineer</span>
               
              </div>
            </div>
            <div className="employeeShowBottom">
              <span className="employeeShowTitle">Account Details</span>
                <div className="employeeShowInfo">
                <PermIdentity className="employeeShowIcon"/>
                <span className="employeeShowInfoTitle">AnnaBec99</span>
                </div>
                <span className="employeeShowTitle">Contact Details</span>

                <div className="employeeShowInfo">
              <CalendarToday className="employeeShowIcon"/>
              <span className="employeeShowInfoTitle">10.12.1999</span>
              </div>

              <div className="employeeShowInfo">
              <PhoneAndroid className="employeeShowIcon"/>
              <span className="employeeShowInfoTitle">+1 123 456 67</span>
              </div>

              <div className="employeeShowInfo">
              <MailOutline className="employeeShowIcon"/>
              <span className="employeeShowInfoTitle">annabeck99@gmail.com</span>
              </div>

              <div className="employeeShowInfo">
              <LocationSearching className="employeeShowIcon"/>
              <span className="employeeShowInfoTitle">New York | USA</span>
              </div>

            </div>
          </div>
          <div className="employeeUpdate">
            <span className="employeeUpdateTitle">Edit</span>
            <form className="employeeUpdateForm">
              <div className="employeeUpdateLeft">
                  <div className="employeeUpdateItem">
                    <label>Username</label>
                    <input 
                    type="text" 
                    placeholder="annabeck99"
                    className="employeeUpdateInput"
                    />
                  </div>

                  <div className="employeeUpdateItem">
                    <label>Full Name</label>
                    <input 
                    type="text" 
                    placeholder="Anna Becker"
                    className="employeeUpdateInput"
                    />
                  </div>

                  <div className="employeeUpdateItem">
                    <label>Email</label>
                    <input 
                    type="text" 
                    placeholder="annabeck99@gmail.com"
                    className="employeeUpdateInput"
                    />
                  </div>

                  <div className="employeeUpdateItem">
                    <label>Phone</label>
                    <input 
                    type="text" 
                    placeholder="+1 123 456 67"
                    className="employeeUpdateInput"
                    />
                  </div>

                  <div className="employeeUpdateItem">
                    <label>Address</label>
                    <input 
                    type="text" 
                    placeholder="New York | USA"
                    className="employeeUpdateInput"
                    />
                  </div>

              </div>
              <div className="employeeUpdateRight">
                <div className="employeeUpdateUpload"> 
                <img
                  className="employeeUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                <Publish className="employeeUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="employeeUpdateButton">Update</button>
              </div>
            </form>

          
          </div>
        </div>

      
      
    </div>
  )
}

