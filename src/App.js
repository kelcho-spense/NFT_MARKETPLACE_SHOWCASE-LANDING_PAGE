import { Download,Features,SectionWrapper } from "./components";
import assets from './assets';
import styles from "./styles/Global";
const App = () => {
  return (
    <>
        
        <SectionWrapper 
          title="Your Own store of Nifty NFTs.Start selling & Growing"
          description="Buy, Store,collect NFTS,exchange & earn crypto.Join 25+ million people using ProNef marketplace"
          showBtn
          mockupImg={assets.homeHero}
          banner="banner"
        />
        <SectionWrapper 
          title="Smart User Interface Marketplace"
          description="Experience a buttery UI of ProfNef NFT Marketplace.Smooth constant colors of Fluent UI design."          
          mockupImg={assets.homeCards}
          reverse
        />
        <Features />
        <SectionWrapper 
          title="Deployment"
          description="ProNef is built using Expo which runs natively on all users' device.You can easily get your app into people's hands"
          mockupImg={assets.feature}
          reverse
        />
        <SectionWrapper 
          title="Creative way to showcase the store"
          description="the app contains two screens.The first screen lists all NFTs while the second screen shows the details of a specific NFT"          
          mockupImg={assets.mockup}
          banner="banner02"
        />
        <Download />
        <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
          <p className={`${styles.pText} ${styles.whiteText}`} >Made by love by {""}
             <span className="bold">Kelcho Spense</span>
          </p>
        </div>
    </>
  );
}

export default App;
