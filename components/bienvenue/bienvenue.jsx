import React from 'react';
import './bienvenue.css';

const Bienvenue = () => {
    return (<div className="conteneurBienvenue">
        <div className="header">
            <h1>Bienvenue sur les traces de ta chasse au trésor !</h1>
        </div>
        <div className="corps">
            <p>Ici tu vas devoir découvrir et débloquer laccés à chaque étape, en te remémorant des moments passés ensemble, il n&apos;y aura pas d&pos;indices, le seul indice, c&apos;est ta mémoire...</p>
            <button>Commencer la chasse au trésor !</button>
        </div>
    </div>
    )
}

export default Bienvenue;