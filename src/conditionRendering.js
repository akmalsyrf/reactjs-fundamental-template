import React, { useState } from "react";

//Create Component PrivatePage
function PrivatePage(props) {
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={props.logout}>Logout</button>
    </>
  );
}

//Create Component GuestPage
function GuestPage(props) {
  return (
    <>
      <h1>You're not login</h1>
      <button onClick={props.login}>Login</button>
    </>
  );
}

function ConditionRenderin() {
  //init State
  const [isLogin, setIsLogin] = useState(false);
  return (
    // Code Inside div
    <div>{isLogin ? <PrivatePage logout={() => setIsLogin(false)} /> : <GuestPage login={() => setIsLogin(true)} />}</div>
  );
}

export default ConditionRenderin;
