import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
}) => {
  // console.log("items", Object.keys(items));
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className={
            "list-group-item" + (items[item] === selectedItem ? " active" : "")
          }
          onClick={() => onItemSelect(items[item])}
          role="button"
        >
          {items[item][contentProperty]}
        </li>
      ))}
    </ul>
  );
};

// Вместо key={items[item]._id} назначаем динамические свойства. Чтобы в будущем была возможность переиспользовать компонент, у которых например не _id. , а id.
GroupList.defaultProps = {
  // пропсы по умолчанию
  valueProperty: "_id",
  contentProperty: "name",
};
GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
};

export default GroupList;
