import { VFC } from 'react';
import { NewsCard, NewsCardProps } from 'src/components/molecules/NewsCard';
import { BoxProps, Stack } from '@chakra-ui/react';

export interface NewsCardListItem extends NewsCardProps {
  key: string;
}

interface NewsCardListProps {
  cards: (NewsCardListItem & BoxProps)[];
}

export const NewsCardList: VFC<NewsCardListProps> = ({ cards }) => (
  <Stack>
    {cards.map((card) => (
      <NewsCard {...card} />
    ))}
  </Stack>
);
