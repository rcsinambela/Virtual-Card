import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div className="card">
            <div className="top">
                <Header />
                <Identity />
            </div>
            <div className="bottom">
                <Biodata />
                <Highlight />
            </div>
        </div>
    );
}

function Header() {
    return (
        <>
            <SocialButton />
            <SocialButtonRight />
        </>
    );
}

function SocialButton() {
    return (
        <div className="social-buttons">
            <button>
                <i className="fa-brands fa-facebook"></i>
            </button>
            <button>
                <i class="fa-brands fa-linkedin"></i>
            </button>
            <button>
                <i class="fa-brands fa-instagram"></i>
            </button>
        </div>
    );
}

function SocialButtonRight() {
    return (
        <div className="social-buttons right">
            <button>
                <i class="fa-brands fa-github"></i>
            </button>
            <button>
                <i class="fa-brands fa-x-twitter"></i>
            </button>
        </div>
    );
}

function Identity() {
    return (
        <div className="text">
            <div className="name-wrapper">
                <div className="name">Riyanda Sinambela</div>
            </div>
            <div className="title">Software Engineer</div>
        </div>
    );
}

function Biodata() {
    return (
        <div className="desc">
            <p>
                Hi, my name is Riyanda Cavin Sinambela and you can call me Kevin
            </p>
        </div>
    );
}

function Highlight() {
    return (
        <div className="buttons">
            <button>
                <i class="fa-solid fa-school"></i>
                &nbsp; ITS
            </button>
            <button>
                <i class="fa-solid fa-book-open"></i>
                &nbsp; Computer Science
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
