import React from "react";

function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  );

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
}

export default function App() {
  const [name, setName] = useLocalStorageState("name", "");
  const onChangeListener = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" onChange={onChangeListener} value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </>
  );
}
