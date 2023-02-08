import React from "react";
import { useState } from "react";
import API from "../API";

const TinderTable = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const RenderPhrase = (usersCount) => {
    const lastSymbol = Number(usersCount.toString().slice(-1));
    if (lastSymbol === 1) return "Человек";
    if ([2, 3, 4].indexOf(lastSymbol) >= 0) return "Человека";
    if (usersCount > 4 && usersCount < 20) return "Человек";
  };

  const wantMeet = `${users.length} ${RenderPhrase(
    users.length
  )} тусанёт с тобой сегодня`;
  const noOneWantMeet = "Никто с тобой не тусанёт";

  return (
    <>
      <span
        className={`badge ${users.length > 0 ? "bg-primary" : "bg-danger"}`}
      >
        {users.length > 0 ? wantMeet : noOneWantMeet}
      </span>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>
                    {user.qualities.map((quality) => {
                      return (
                        <span
                          key={quality._id}
                          className={"badge m-1 bg-" + quality.color}
                        >
                          {quality.name}
                        </span>
                      );
                    })}
                  </td>
                  <td>
                    <span>{user.profession.name}</span>
                  </td>
                  <td>
                    <span>{user.completedMeetings}</span>
                  </td>
                  <td>
                    <span>{user.rate}</span>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TinderTable;
