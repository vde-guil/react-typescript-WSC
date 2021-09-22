import React, { useReducer } from "react";
import { ReactComponent as PlusIcon } from "./icons/add-circle.svg";
import { ReactComponent as MinusIcon } from "./icons/minus-circle.svg";

import "./App.css";
import Wilder from "./components/Wilder/Wilder";
import AddWilder from "./components/AddWilder";

import appReducer, {AppState} from './reducer/appReducer';
import useFetchWilders from './hooks/useFetchWilders';

import { ShowButton } from './elements/elements';

const initialState: AppState = {
  showAddForm: false,
  successMessage: '',
  justAdded: false,
  wilders: [],
};

function App() : JSX.Element {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useFetchWilders(dispatch);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className='form-row'>
					<ShowButton
						onClick={() => {
							dispatch({ type: "TOGGLE_SHOW_ADD_FORM" });
						}}
					>
						{state.showAddForm ? <MinusIcon /> : <PlusIcon />}
						Add a Wilder
					</ShowButton>
					{state.showAddForm && <AddWilder />}
				</section>
        <section className="card-row">
          {state.wilders.map((wilder) => (
            <Wilder key={wilder._id} _id={wilder._id} name={wilder.name} skills={wilder.skills} /> 
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
