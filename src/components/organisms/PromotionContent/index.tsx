import { FC } from 'react';
import { usePromotionCardsQuery } from 'src/libs/hooks/usePromotionCardsQuery';
import { ImageCarousel } from 'src/components/molecules/ImageCarousel';

export const PromotionContent: FC = () => {
  const promotionData = usePromotionCardsQuery();
  return <ImageCarousel items={promotionData} />;
};
