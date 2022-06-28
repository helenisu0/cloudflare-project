import './chart.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function Chart() {
  return (
    <div className ="chart">
      <div className="chartItem">
        <span className="chartTitle">Employee </span>
        <div className="chartContainer">
          <span className="chartContainerItem">3000</span>
          <span className="charContainerItemRate">
             </span>
        </div>
        <span className="chartSub">Total Staff</span>
      </div>


      <div className="chartItem">
          <span className="chartTitle"> Attendance </span>
            <div className="chartContainer">
              <span className="chartContainerItem">7,895</span>
              <span className="charContainerItemRate">-1.5
                 <ArrowDownward className="chartIcon negative"/> </span>
            </div>
            <span className="chartSub">Compared to last month</span>
      </div>


      <div className="chartItem">
      <span className="chartTitle"> Approved Leave </span>
            <div className="chartContainer">
              <span className="chartContainerItem">895</span>
              <span className="charContainerItemRate">-1.5
                 <ArrowUpward className="chartIcon" /> </span>
            </div>
            <span className="chartSub">Compared to last month</span>
      </div>
       <div className="chartItem">
       <span className="chartTitle"> Rejected Leave </span>
            <div className="chartContainer">
              <span className="chartContainerItem">195</span>
              <span className="charContainerItemRate">-0.2
                 <ArrowDownward className="chartIcon negative"/> </span>
            </div>
            <span className="chartSub">Compared to last month</span>
      </div>
    </div>
  )
}
