import React, { useState, useEffect } from "react";

import "./index.css";
import EditProfile from "./editProfile/EditProfile";
import OtherPages from "./otherPages/OtherPages";
import SavedRooms from "./savedRooms/SavedRooms";
import RequestedContacts from "./requestedContacts/RequestedContacts";

function ProfileManagement(props) {
  const [view, setView] = useState("");


  return (
    <div>
      <div className="sidebar" style={{ color: "#FFFFFF !important" }}>
        <button href="" onClick={() => setView("")}>
          Edit Profile
        </button>
        <button href="" onClick={() => setView("reset_password")}>
          Change Password
        </button>
        <button href="" onClick={() => setView("requested_contacts")}>
          My Properties
        </button>
        <button href="" onClick={() => setView("saved_rooms")}>
          Saved Rooms
        </button>
        <button href="" onClick={() => setView("requested_contacts")}>
          Requested Contacts
        </button>
      </div>
      <div className="container">
        {view === "" ? (
          <EditProfile />
        ) : view === "reset_password" ? (
          <OtherPages
          />
        ) : view === "saved_rooms" ? (
          <SavedRooms />
        ) : (
          <RequestedContacts />
          // <OtherPages message={{title: 'Sorry!', body: 'Currently, you do not have any contact request approved!'}}/>
        )}
      </div>
    </div>
  );
}

export default ProfileManagement;
