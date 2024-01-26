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
            <div className="social-buttons">
                <SocialButton icon="fa-facebook" />
                <SocialButton icon="fa-linkedin" />
                <SocialButton icon="fa-instagram" />
            </div>
            <div className="social-buttons right">
                <SocialButtonRight icon="fa-github" />
                <SocialButtonRight icon="fa-twitter" />
            </div>
        </>
    );
}

function SocialButton({ icon }) {
    return (
        <button>
            <i className={`fa-brands ${icon}`}></i>
        </button>
    );
}

function SocialButtonRight({ icon }) {
    return (
        <button>
            <i class={`fa-brands ${icon}`}></i>
        </button>
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
                Hi, my name is <b>Riyanda Cavin Sinambela</b> and you can call
                me Kevin.
            </p>
            <p>I am a software engineer and cyber security enthusiast.</p>
        </div>
    );
}

function Highlight() {
    return (
        <div className="buttons">
            <HighlightText icon="fa-school" text="ITS" />
            <HighlightText icon="fa-book-open" text="Computer Science" />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
