import { useState } from "react";

type UserType = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<UserType | null>(null);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setUser({
              name: "Tobe",
              email: "tobe@tobe.com",
            });
          }}
        >
          Login
        </button>
        <div>Your username is {user?.name}</div>
        <div>Your username is {user?.email}</div>
      </div>
    </div>
  );
};

export default User;
