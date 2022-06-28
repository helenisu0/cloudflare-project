import Chart from '../../components/featuredInfo/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Report from '../../components/report/Report'
import './Home.css'
import {userdata} from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetSm/WidgetLg'
export default function Home() {
  return (
    <div className="home">
      <div className="greeting">
        <h1>Hello Admin,</h1>
        <h6>Welcome back</h6>
      </div>
  
        <Chart />
        <Report data={userdata} title="Employee Performance" grid dataKey="Active User"/>
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>

        </div>
    </div>
  )
}
