import React, { useState } from 'react';
import UserForms from './UserForm';
import CardList from './CardList';


const ListMain = function(props){
    
    const { id } = props.match.params;
    console.log(id);
    const [cards, setCards] = useState([{
        id: '1',
        name: 'Ghan Lohar',
        avatar_url: "https://avatars1.githubusercontent.com/u/5575651?v=4",
        company: 'Cognizant'
      },{
        id: '2',
        name: 'Ben Alpert',
        avatar_url: "https://avatars2.githubusercontent.com/u/1448984?v=4",
        company: 'facebook'
      }]);

    const AddUserToCards = (data) => {
        setCards([
            ...cards,
            {
                ...data
            }
        ]);
    };
    return (
        <div>
            <h1>{id}</h1>
            <UserForms onSubmit={AddUserToCards}/>
            <CardList cards={cards}/>
        </div>
    )
}

export default ListMain;
