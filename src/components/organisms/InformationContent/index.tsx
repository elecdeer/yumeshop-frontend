import { FC } from 'react';
import { colors } from 'src/styles/Tokens';
import { NewsCardList } from 'src/components/molecules/NewsCardList';
import { useInformationCardsQuery } from 'src/libs/hooks/useInformationCardsQuery';

export const InformationContent: FC = () => {
  const informationData = useInformationCardsQuery();
  return (
    <NewsCardList cards={informationData} cardStyle={{ bg: colors.White }} />
  );
};
