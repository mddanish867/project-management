import Login from "./components/authentication/Login"
import Register from "./components/authentication/Register"
import Newdashboard from "./components/dashboard/newdashboard"
import EnterprisePage from "./components/features/EnterprisePage"
import FeaturesPage from "./components/features/Features"
import LearnMorePage from "./components/features/LearnMorePage"
import PricingPage from "./components/features/PricingPage"
import RequestDemoPage from "./components/features/RequestDemoPage"
import SolutionsPage from "./components/features/SolutionsPage"
import LandingPage from "./components/home/LandingPage"
import AddProject from "./components/pages/AddProject"
import BugTracking from "./components/pages/BugTracking"
import DeleteProject from "./components/pages/DeleteProject"
import ModifyProject from "./components/pages/ModifyProject"
import ProgressTrack from "./components/pages/ProgressTrack"
import Repository from "./components/pages/Repository"
import TeamMembers from "./components/pages/TeamMembers"
import UserStoryTracking from "./components/pages/UserStoryTracking"
import AccountSettings from "./components/user/AccountSettings"
import UserProfile from "./components/user/UserProfile"

function App() {

  return (
    <>    
      

      <LandingPage/>

      {/* <Newdashboard/> */}
      <AddProject/>
    <BugTracking/>
    <DeleteProject/>
    <ModifyProject/>
    <ProgressTrack/>
    <Repository/>
    <TeamMembers/>
    <UserStoryTracking/>
    <AccountSettings/>
    <UserProfile/>
      <Register/>
<Login/>
<LearnMorePage/>
<RequestDemoPage/>
<PricingPage/>
<FeaturesPage/>
   <SolutionsPage/>
<EnterprisePage/>
    </>
  )
}

export default App
