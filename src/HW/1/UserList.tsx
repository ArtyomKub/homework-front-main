type AddressType = {
  street: any; // ПОДПРАВЛЯЕМ any
  city: any; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
  users: Array<UserType>; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ... DONE
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          <li key={ЭЛЕМЕНТ МАССИВА.id} id={`hw01-user-${ЭЛЕМЕНТ МАССИВА.id}`}>
            <strong>{ЭЛЕМЕНТ МАССИВА.name}</strong> (Age: {ЭЛЕМЕНТ МАССИВА.age})<strong> Address:</strong>
            {ЭЛЕМЕНТ МАССИВА.address.street}, {ЭЛЕМЕНТ МАССИВА.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
