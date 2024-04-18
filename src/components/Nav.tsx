import '../assets/css/nav.css'

interface Props{ 
    onsearch: (e : React.ChangeEvent<HTMLInputElement> ) => void
}


function Nav( {onsearch}: Props ) {
    return ( 
    <header className="nav__container">

        <h1 className="nav__tittle">Muscle Trainer</h1>

        <input type='text'  placeholder="Search muscle" onChange={onsearch} className="search__input"/>


    </header> 
    );
}

export default Nav;