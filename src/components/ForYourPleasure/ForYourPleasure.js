import React from 'react';
import HeaderAdd from '../HeaderAdd/.HeaderAdd';
import InfoBlock from '../InfoBlock/InfoBlock';

const ForYourPleasure = () => {
   return (
      <>
         <HeaderAdd
            title="for your pleasure"
            banner={require('../../assets/images/header-add-banner-info.jpg')}
         />
         <main className="main">
            <div className="container">
               {/* <div className="foryoupleasure"></div> */}
               <InfoBlock
                  img={require('../../assets/images/cup-of-coffe.png')}
                  alt={'cup of coffee'}
                  title={'About our goods'}
                  text={
                     <>
                        Extremity sweetness difficult behaviour he of. On
                        disposal of as landlord horrible. <br />
                        Afraid at highly months do things on at. Situation
                        recommend objection do intention so questions.
                        <br />
                        As greatly removed calling pleased improve an. Last ask
                        him cold feel met spot shy want. Children me laughing we
                        prospect answered followed. At it went is song that held
                        help face.
                     </>
                  }
               />
            </div>
         </main>
      </>
   );
};

export default ForYourPleasure;
