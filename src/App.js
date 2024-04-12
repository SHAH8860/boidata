import "./App.css";

function App() {
  return (
    <div className="container navbar-dark bg-dark">
      <div className="row">
        <div className="col-8">
          <div className="text">
            <div className="personal m-5">
              <h1 className="mb-3">PERSONAL DETAIL</h1>
              <h3>
                <span className="detail-label">Name</span>
                <span className="dot">:  Vikash Kumar</span>
              </h3>
              <h3>
                <span className="detail-label">Date Of Birth</span>
                <span className="dot">:  20/01/1996</span>
              </h3>
              <h3>
                <span className="detail-label">Place Of Birth</span>
                <span className="dot">:  Sitamarhi Bihar</span>
              </h3>
              <h3>
                <span className="detail-label">Complexion</span>
                <span className="dot">:  Medium</span>
              </h3>
              <h3>
                <span className="detail-label">Height</span>
                <span className="dot">:  5 feet 5 inches</span>
              </h3>
              <h3>
                <span className="detail-label">Work</span>
                <span className="dot">:  Axis Bank LTD</span>
              </h3>
              <h3>
                <span className="detail-label">Education</span>
                <span className="dot">:  Senior Secondary</span>
              </h3>
              <h3>
                <span className="detail-label">Religion</span>
                <span className="dot">:  Hindu</span>
              </h3>
              <h3>
                <span className="detail-label">Caste</span>
                <span className="dot">:  Teli</span>
              </h3>
            </div>
            <div className="personal m-5">
              <h1 className="mb-3">FAMILY DETAILS</h1>
              <h3>
                <span className="detail-label">Father Name</span>
                <span className="dot">:  Shree Vindeshwar Shah</span>
              </h3>
              <h3>
                <span className="detail-label">Father Occupation</span>
                <span className="dot">:  Farmer</span>
              </h3>
            </div>
            <div className="personal m-5">
              <h1 className="mb-3">Contact Detail</h1>
              <h3>
                <span className="detail-label">Contact Person</span>
                <span className="dot">:  Vikash Kumar</span>
              </h3>
              <h3>
                <span className="detail-label">Contact Number</span>
                <span className="dot">:  Vikash Kumar</span>
              </h3>
              <h3>
                <span className="detail-label">Email Id</span>
                <span className="dot">:  shah.vikash07@gmail.com</span>
              </h3>
              <h3>
                <span className="detail-label">Residential Address</span>
                <span className="dot">
                  :Flatno-49 B20 Pocket1 Manokamna
                </span>
                <br />
                <span className="detail-label"></span>
                <span className="dot">Appartment Sec-34 Rohini</span>
              </h3>
              <h3>
                <span className="detail-label">Permanent Address</span>
                <span className="dot">
                  :  Sandwara Chowk,Bajpatti 
                </span>
                <br />
                <span className="detail-label"></span>
                <span className="dot">  Sitamarhi,Bihar</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="cardimg">
            <img src="bio.jpg" className="rounded" alt="Loading..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
