
const Header: React.FC =()=>{
    return(

        <header>
            <div>
        {/* logo */}
                <div>
                    <img src="" alt="logo" />
                </div>
        
        {/* search bar */}
                <div>
                    <input 
                    type="text"
                    placeholder="Search your destination"
                     />
                </div>
        {/* sign up button */}
                <div>
                    <button>sign Up</button>
                    <button>Sign In</button>
                </div>                 
        {/*  accommodation types*/}
                <nav>
                    <button>Rooms </button> 
                    <button>Mansions </button> 
                    <button>CountrySide </button> 
                </nav>
            </div>
        </header>
    )
}
export default Header;