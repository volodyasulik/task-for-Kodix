import DollarIcon from '../../../../assets/icons/dollar.icon.svg';
import FastIcon from '../../../../assets/icons/fast.icon.svg';
import DataIcon from '../../../../assets/icons/ownData.icon.svg';
import StarIcon from '../../../../assets/icons/star.icon.svg';
import {
  PresentationContainer,
  TextContainer,
} from './styled/sideBarPresentation.component';

const sideBarPresentationData = [
  {
    image: DollarIcon,
    label: 'Absolutely FREE',
    desc: 'No hidden charges, No credit<br/> card required',
  },
  {
    image: FastIcon,
    label: 'Fast & Easy',
    desc: 'Get access instantly,<br/> no downloads required',
  },
  {
    image: DataIcon,
    label: 'Your Own Data',
    desc: 'Enjoy the Free Trial with<br/> your company data',
  },
  {
    image: StarIcon,
    label: 'Unlimited Features',
    desc: "Access all features of the<br/>world's #1 business software!",
  },
];

const SideBarPresentationUnit: React.FC<{
  image: string | undefined;
  label: string;
  desc: string;
}> = ({ image, label, desc }) => {
  return (
    <PresentationContainer>
      <div>
        <img src={image} alt={`${label} Icon`} />
      </div>

      <TextContainer>
        <h3>{label}</h3>
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      </TextContainer>
    </PresentationContainer>
  );
};

const SideBarPresentation = () => {
  return (
    <div>
      {sideBarPresentationData.map(({ image, label, desc }) => {
        return (
          <SideBarPresentationUnit image={image} label={label} desc={desc} />
        );
      })}
    </div>
  );
};

export default SideBarPresentation;
