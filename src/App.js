import React from 'react';
import groups from "./groups.json"



function Group(props)
{
  const [showFriends, setShowFriends] = React.useState(false)

  return(
    <div id = {props.id}>
      <div style={
        {height: "25px",
        width: "25px",
        marginTop: "10px",
        backgroundColor: props.avatar_color,
        border: "1px solid black",
        borderRadius : "50%"}}></div>
      <p>{props.name}</p>
      <p>Статус: {props.closed}</p>
      <p>Кол-во участников: {props.members_count}</p>
      <button onClick={() => setShowFriends(prev => !prev)} style = {
        {
          background: 'none',
          color: 'inherit',
          border: 'none',
          padding: '0',
          font: 'inherit',
          cursor: 'pointer',
          outline: 'inherit',
        }
      }>Кол-во друзей: {props.friends}</button>
      <div>{showFriends && props.frindsNames}</div>
    </div>
  )
}

// function Filters(setItem)
// {
//   const avatarItem = [...new Set(groups.map(val => val.avatar_color)).add("all")]
//   const privateItem = ["closed", "open", "all"]
//   const friendItem = ["is", "none", "all"]

//   function filterHandler(event)
//   {
//     const filerName = event.target.parentElement
//     console.log(event.target.innerText);
//     const newItem = groups.filter((newVal) => {
//       return newVal 
//         	// comparing category for displaying data
//     });
//   setItem(newItem)
// }

//   return(
//     <nav style={{
//       display: 'flex'
//     }}>
//       <ul>Цвет {avatarItem.map(elem => <li onClick={filterHandler}>{elem === undefined ? "undefined" : elem}</li>)}</ul>
//       <ul>Приватность {privateItem.map(elem => <li onClick={filterHandler}>{elem}</li>)}</ul>
//       <ul>Друзья {friendItem.map(elem => <li onClick={filterHandler}>{elem}</li>)}</ul>
//     </nav>
//   )
// }

function App() {
  
  const [item, setItem] = React.useState(groups)

  const groupElem = item.map(elem => {
    return(
      <Group
        key = {elem.id}
        id = {elem.id}
        name = {elem.name}
        avatar_color = {elem.avatar_color}
        closed = {elem.closed ? "закрытая" : "открытая"}
        members_count = {elem.members_count}
        friends = {elem.friends !== undefined ? elem.friends.length : 0}
        frindsNames = {elem.friends !== undefined ? elem.friends.map(friendElem => <p>{friendElem.first_name} {friendElem.last_name}</p>) : <p>Нет друзей</p>}
      />
    )
  })

  return (
    <div className="App">
      {/* <Filters /> */}
      {groupElem}
    </div>
  )
}

export default App;
