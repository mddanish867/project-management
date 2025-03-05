import Login from "./components/authentication/Login"
import Register from "./components/authentication/Register"
import Newdashboard from "./components/dashboard/newdashboard"
import Dashboard from "./components/dashboard/Dashboard"
import EnterprisePage from "./components/features/EnterprisePage"
import FeaturesPage from "./components/features/Features"
import LearnMorePage from "./components/features/LearnMorePage"
import PricingPage from "./components/features/PricingPage"
import RequestDemoPage from "./components/features/RequestDemoPage"
import SolutionsPage from "./components/features/SolutionsPage"
import LandingPage from "./components/home/LandingPage"
import Layout from "./components/home/layout"
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
import ForgotPassword from "./components/authentication/ForgotPassword"
import ResetPassword from "./components/authentication/ResetPassword"
import LoginOTP from "./components/authentication/LoginOTP"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>    
      <Router>
        <Routes>
          <Route element={<Layout/>}> 
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/features" element={<FeaturesPage/>}/>
          <Route path="/request-demo" element={<RequestDemoPage/>}/>
          <Route path="/solutions" element={<SolutionsPage/>}/>
          <Route path="/enterprise" element={<EnterprisePage/>}/>
          <Route path="/learn-more" element={<LearnMorePage/>}/>

          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/login-otp" element={<LoginOTP/>}/>
          <Route path="/newdashboard" element={<Newdashboard/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>

        </Routes>
      </Router>

      <PricingPage/> 


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


    </>
  )
}

export default App
