import { FC } from 'react';
import { useCampaignCardsQuery } from 'src/libs/hooks/useCampaignCardsQuery';
import { colors } from 'src/styles/Tokens';
import { PicAndTextCardList } from 'src/components/molecules/PicAndTextCardList';

export const CampaignContent: FC = () => {
  const campaignData = useCampaignCardsQuery('/products');
  return (
    <PicAndTextCardList
      cards={campaignData}
      cardStyle={{ width: '200px', bg: colors.White }}
    />
  );
};
