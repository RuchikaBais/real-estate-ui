import { Link } from "react-router-dom";
import "./profileUpdatePage.scss";

function ProfileUpdatePage() {
  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form>
          <h1>Create Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your name.."
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email.."
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password"
            placeholder="Password" />
          </div>
          <button>Update</button>
          <Link to="/profile"> {'<-'} Back</Link>
        </form>
      </div>
      
      <div className="sideContainer">
        <img src="/bg.png" alt="" className="avatar" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;