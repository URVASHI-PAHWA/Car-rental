import React from 'react';
import Template from './Template'
import urvashi from '../images/urvashi.jpg'
import jay from '../images/jay.png'
import Footer from './Footer'
import AboutCard from './AboutCard'
const About = () => {
    return (
        <>
            <Template title='About' />
            <main>
                <h1 className='mt-9 p-9 fw-bolder' id='h1'>Car At Rent</h1>
                <p id='p'>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
                ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
                mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les
                années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion
                dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
                <p id='p'>
                    Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une
                    oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney
                    College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et
                    en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient
                    en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron.
                    Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum,
                    "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32. </p><br />
                <h1 className='mt-9 p-9 fw-bolder' id='h1'>Our Team</h1><br />
                <div className='container' >
                    <div className='row'>
                        <div className='col-lg-6 col-xs-12' style={{fontFamily: "'Patua One', cursive",
                        fontSize: '15px',letterSpacing: '0.2rem',cursor: 'pointer'}}>
                            <AboutCard src={jay} title='Jay Goyal' text1='I am a SEM-4 CSE student.'
                            text2="Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                            quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen"
                            src1='https://www.linkedin.com/in/jaygoyal96/' src1Name='See my profile' />
                        </div>
                        <div className='col-lg-6 col-xs-12' style={{fontFamily: "'Patua One', cursive",
                        fontSize: '15px',letterSpacing: '0.2rem',cursor: 'pointer'}}>
                            <AboutCard src={urvashi} title='Urvashi' text1='I am a SEM-4 CSE student.'
                            text2="Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                            quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen"
                            src1='https://www.linkedin.com/in/urvashi-pahwa-a4bb711b3' src1Name='See my profile' />
                        </div> 
                    </div>
                </div>
                <br /><br />
            </main>
            <Footer />
        </>
    )
}

export default About;

