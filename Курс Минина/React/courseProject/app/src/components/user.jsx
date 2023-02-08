import React from "react";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onToggleBookMark,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((qual) => (
          <Qality key={qual._id} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>BookMark</td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default User;
