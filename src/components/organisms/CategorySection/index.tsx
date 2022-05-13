import { useCategoryCardsQuery } from 'src/libs/hooks/useCategoryCardsQuery';
import { colors } from 'src/styles/Tokens';
import { PicAndTextCardList } from 'src/components/molecules/PicAndTextCardList';
import {FC} from "react";

export const CategorySection: FC = () => {
  const categoryData = useCategoryCardsQuery('/products');
  return (
    <PicAndTextCardList
      cards={categoryData}
      cardStyle={{ width: '200px', bg: colors.White }}
    />
  );
};
