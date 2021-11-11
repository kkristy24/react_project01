import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src='https://picfiles.alphacoders.com/216/thumb-1920-216599.png'/>
            </header>
            <nav className="nav">
                <div>
                    <div>
                        <a>Profile</a>
                    </div>
                    <div>
                        <a>Messages</a>
                    </div>
                    <div>
                        <a>News</a>
                    </div>
                    <div>
                        <a>Music</a>
                    </div>
                    <div>
                        <a>Settings</a>
                    </div>
                </div>
            </nav>
            <div className="content">
                <div className="mainImg">
                    <img src='https://zabor.bz/zakaz/img/market/fotooboi_voda_img_5.jpg'/>
                </div>
                <div>
                    <img src='https://i.pinimg.com/originals/fa/11/0f/fa110feb86350d897056f54e18c83567.png'/>
                    ava + description
                </div>
                <div>
                    My posts
                </div>
            </div>
        </div>
    );
}

export default App;
