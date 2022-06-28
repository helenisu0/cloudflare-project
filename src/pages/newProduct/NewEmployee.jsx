import './newEmployee.css'

export default function NewEmployee() {
  return (
    <div className="newEmployee">
      <h1 className="newEmployeeTitle">New Employee</h1>
      <form className="newEmployeeForm">
            <div className="newEmployeeItem">
                <label>UserName</label>
                <input  type="text" placeholder="john"/>
            </div>

            <div className="newEmployeeItem">
                <label>Full Name</label>
                <input  type="text" placeholder="john smith"/>
           </div>

           <div className="newEmployeeItem">
                <label>Email</label>
                <input  type="email" placeholder="john@gmail.com"/>
           </div>

           <div className="newEmployeeItem">
                <label>Password</label>
                <input  type="email" placeholder="john@gmail.com"/>
           </div>

           <div className="newEmployeeItem">
                <label>Phone</label>
                <input  type="text" placeholder="+234 7056 606637"/>
           </div>

           <div className="newEmployeeItem">
                <label>Address</label>
                <input  type="email" placeholder="Lagos, Nigeria"/>
           </div>

           <div className="newEmployeeItem">

                <label>Gender</label>
                <div className="newEmployeeGender">
                <input  type="radio" name="gender" id="male" value="male"/>
                <label for="male">Male</label>
                <input  type="radio" name="gender" id="female" value="female"/>
                <label for="female">Female</label>
                <input  type="radio" name="gender" id="others" value="others"/>
                <label for="others">Others </label>
                </div>
           </div>

           <div className="newEmployeeItem">
            <label>Active</label>
            <select className="newEmployeeSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
           </div>
                <button className="newEmployeeButton">create</button>
      </form>
    </div>
  )
}
