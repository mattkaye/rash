import '../scss/components/pagehero.scss';
import { Button } from './Button';

export const PageHero = (props) => {
  return (
    <div className="page-hero">
      <h1>Permanent Waves</h1>
      <h2>40th Anniversary Edition</h2>
      <p>
        Permanent Waves 40th Anniversary and exclusive Permanent Waves
        merchandise items are available now at Rush Backstage Club.
      </p>
      <Button text="order now" url="https://www.rushbackstage.com/" />
    </div>
  );
};
