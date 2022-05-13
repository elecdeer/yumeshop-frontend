import { FC } from 'react';
import { usePromotionCardsQuery } from 'src/libs/hooks/usePromotionCardsQuery';
import { ImageCarousel } from 'src/components/molecules/ImageCarousel';

export const PromotionSection: FC = () => {
  const promotionData = usePromotionCardsQuery();
  return <ImageCarousel items={promotionData} />;
};
