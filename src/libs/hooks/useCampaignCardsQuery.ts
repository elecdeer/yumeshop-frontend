import { PicAndTextCardListItem } from 'src/components/molecules/PicAndTextCardList';
import { useAspidaQuery } from '@aspida/react-query';
import { useMemo } from 'react';
import assert from 'assert';
import { client } from '../aspida/client';

export const useCampaignCardsQuery = (href: string) => {
  const { data } = useAspidaQuery(client.campaigns);
  assert(data); // suspenseなのでundefinedにはならない
  return useMemo<PicAndTextCardListItem[]>(
    () =>
      data.map((item) => ({
        key: item.id,
        title: item.name,
        thumbnailUrl: item.thumbnail,
        href,
      })),
    [data, href],
  );
};