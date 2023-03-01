import styles from './style';
import { BillingCard, BusinessCard, MainContent, Navbar, Stats, Testimonials } from './components';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <MainContent />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <BusinessCard />
          <BillingCard />
          <Testimonials />
          Clients
          CTA 
          Footer
        </div>
      </div>
    </div>
  );
}

export default App;
