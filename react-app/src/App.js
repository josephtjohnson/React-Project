import './index.css';
import Animal from './components/Animal';
import { useState } from 'react';

function App() {
    const [breed, setBreed] = useState('Breed unknown');
    const showAnimals = true;
    return (
        <div className="App">
            {showAnimals ? (
                <>
                    <input
                        type='text'
                        onChange={(e) => {
                            console.log(e.target.value)
                            setBreed(e.target.value)
                        }}
                    />
                    <div className="flex flex-wrap space-y-5 justify-center">
                        <Animal
                            name="Layla"
                            breed="Pitbull/Lab mix"
                            img="https://images.pexels.com/photos/800330/pexels-photo-800330.jpeg?auto=compress&cs=tinysrgb&w=400"
                        />
                        <Animal
                            name="Greg"
                            breed={breed}
                            img="https://images.pexels.com/photos/800330/pexels-photo-800330.jpeg?auto=compress&cs=tinysrgb&w=400"
                        />
                        <Animal
                            name="Ashley"
                            breed={breed}
                            img="https://images.pexels.com/photos/800330/pexels-photo-800330.jpeg?auto=compress&cs=tinysrgb&w=400"
                        />
                        <Animal
                            name="Ben"
                            breed={breed}
                            img="https://images.pexels.com/photos/800330/pexels-photo-800330.jpeg?auto=compress&cs=tinysrgb&w=400"
                        />
                        <Animal
                            name="Deb"
                            breed={breed}
                            img="https://images.pexels.com/photos/800330/pexels-photo-800330.jpeg?auto=compress&cs=tinysrgb&w=400"
                        />
                    </div>
                </>
            ) : (
                <p>You cannot see the animals</p>
            )}
        </div>
    );
}

export default App;
