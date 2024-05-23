import './App.css'
import LeapYear from './components/LeapYear/LeapYear'
import PeopleTable from './components/PeopleTable/PeopleTable';
import Welcome from './components/Welcome/Welcome'

import peopleData from './data/people.json';

function App() {

  return (
    <div>
      {/* <Welcome firstname='Zaza' lastname='Vanderquack' /> */}
      {/* <Welcome firstname='Balthazar' lastname='Picsou' /> */}

      {/* <LeapYear year={2000}/>
      <LeapYear year={1998}/>
      <LeapYear year={2004}/>
      <LeapYear year={2100}/> */}

      <PeopleTable title='Exemple !' data={peopleData} />

    </div>
  )
}

export default App
