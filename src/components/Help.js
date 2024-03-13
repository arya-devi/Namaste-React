import UserClass from "./UserClass";

const Help = () => {
  return (
    <div className="user-details">
      <h2>User Details</h2>
      <UserClass
        name={"Aryadevi"}
        location={"Kerala"}
        email={"dewisdevelops@gmail.com"}
      />
    </div>
  );
};
export default Help;
