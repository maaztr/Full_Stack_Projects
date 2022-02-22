import React, { useState, useEffect } from "react";

export const FullName = () => {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  const fullname = (e) => {
    console.log(e.target.id);
    setFullName({ ...fullName, [e.target.id]: e.target.value });
  };
  return (
    <>
      {/*       <div>
        <button primary onClick={() => childToParent(data)}>
          Click Child
        </button>
      </div> */}
      <div className="firstlastNames">
        <div>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={fullname}
            value={fullName.firstName}
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            onChange={fullname}
            value={fullName.lastName}
          />
        </div>
      </div>
      <div>
        <h3 id="updateName">
          {fullName.lastName !== "" && fullName.firstName !== ""
            ? `Salams ${fullName.firstName} ${fullName.lastName}! Thank you for
            joining us.`
            : null}
        </h3>
      </div>
    </>
  );
};
