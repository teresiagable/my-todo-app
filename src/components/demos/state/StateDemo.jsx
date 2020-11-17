import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import * as constants from './stateConstants';

export default function StateDemo() {
  const [store, setStoreState] = useState();

  const handleClick = () => {
    //lägg till två kunder vid knapptryck
    const newCustomers = [
      {
        customerId: 2,
        customerName: 'Malmöbolaget',
        city: 'Malmö',
      },
      {
        customerId: 3,
        customerName: 'Kalmarbolaget',
        city: 'Kalmar',
      },
    ];
    setStoreState({
      ...store, //använd förra statet och uppdatera bara cust-arrayen
      cust: [...store.cust, ...newCustomers],
    });
  };

  const handleClickPart = () => {
    //lägg till två kunder vid knapptryck

    const existingParticipants = store.participants;

    const newP = [
      {
        participantName: 'Tomas',
        participantId: 1,
        email: 'tomas@tomas.se',
        allergies: {
          allergyId: 3,
        },
      },
      {
        participantName: 'Jonathan',
        participantId: 2,
        email: 'jonathan@jonathan.se',
        allergies: {
          allergyId: '',
        },
      },
    ];

    setStoreState({
      ...store, //använd förra statet och uppdatera bara participants-arrayen
      participants: [...store.participants, ...newP],
    });
  };

  // lägg in en cust när sidan laddas och en tom participant
  useEffect(() => {
    setStoreState({
      cust: [
        {
          customerId: 1,
          customerName: 'Växjöbolaget',
          city: 'Växjö',
        },
      ],
      participants: [],
    });

    console.log(store);
  }, []);

  return (
    <>
      <div className='bg-light'>
        <ReactJson src={constants.INITIALSTATE_CUSTOMER} />
      </div>
      <hr></hr>
      {}
      <div className='bg-light'>
        <ReactJson src={store} />
      </div>

      <button onClick={handleClick}>Add 2 customers</button>
      <button onClick={handleClickPart}>Add 2 participants</button>
    </>
  );
}
// setCustomerState({
//   ...customers,
//   {()=>newCustomers.map((c, index) => {
//     return c[index];
//   }),
// });
//const [menu, setMenuState] = useState([constants.INITIALSTATE_MENU]);
