import React, { useState, useEffect } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "./utilities/paginate";
// когда export  недефолтный, то используем деструкторизацию
import PropTypes, { func } from "prop-types";
import GroupList from "./groupList";
import api from "../api";
import searchStatus from "./searchStatus";

const Users = ({ users: allUsers, ...rest }) => {
  // Экспортируем в api - все как users. Здесь в пропсах обозначаем, что users - allUsers, ...rest - остальные массивы
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfession] = useState([]); // ставим пустой массив, так как будет принимать массив с бека (на самом деле можем оставить пустые скобки)
  const [selectedProf, setSelectedProf] = useState();
  const pageSize = 4;

  useEffect(() => {
    api.professions.fetchAll().then((data) =>
      setProfession(
        Object.assign(data, { allProfession: { name: "Все профессии" } })
        // Создаем один объект вместе с data - professions, и вместе с allProfession сами создали объект - Все профессии. И передаем его в состояние.
      )
    );
  }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const filtredUsers =
    selectedProf && selectedProf._id
      ? allUsers.filter((user) => user.profession === selectedProf)
      : allUsers;
  const usersCount = filtredUsers.length;
  // фильтруем до пагинации
  // так как у allProfessions нет ._id, то условие не выполнится и покажутся все пользователи
  const userCrop = paginate(filtredUsers, currentPage, pageSize);

  const handleProfessionSelect = (item) => {
    setSelectedProf(item);
  };

  const clearFilter = () => {
    setSelectedProf();
  };

  return (
    <div className="d-flex">
      <searchStatus length={usersCount} />
      {professions.length === 0 ? null : (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfessionSelect}
            // valueProperty="_id" стоят как defaultProps
            // contentProperty="name"
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Отчистить
          </button>
        </div>
      )}
      {allUsers.length > 0 && (
        <div className="d-flex flex-column">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Провфессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {userCrop.map((user) => (
                <User key={user._id} {...rest} {...user} />
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="d-flex justyfy content-center">
        <Pagination
          itemsCount={usersCount}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
