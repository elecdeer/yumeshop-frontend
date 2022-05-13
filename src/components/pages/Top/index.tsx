import { FC, Suspense } from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { useCampaignCardsQuery } from 'src/libs/hooks/useCampaignCardsQuery';
import { useInformationCardsQuery } from 'src/libs/hooks/useInformationCardsQuery';
import { useCategoryCardsQuery } from 'src/libs/hooks/useCategoryCardsQuery';
import { PicAndTextCardList } from 'src/components/molecules/PicAndTextCardList';
import { NewsCardList } from 'src/components/molecules/NewsCardList';
import { colors } from 'src/styles/Tokens';
import { PromotionSection } from 'src/components/organisms/PromotionSection';

export const TopPage: FC = () => {
  const campaignData = useCampaignCardsQuery('/products');
  const informationData = useInformationCardsQuery();
  const categoryData = useCategoryCardsQuery('/products');

  return (
    <Box bg={colors.YumeWhiteGreen}>
      <Suspense fallback={<p>Loading...</p>}>
        <PromotionSection />
      </Suspense>

      <Container maxW="1024px" paddingY={20}>
        <Stack spacing={20}>
          <Stack spacing={4}>
            <Heading>キャンペーン</Heading>
            <Suspense fallback={<p>Loading...</p>}>
              <PicAndTextCardList
                cards={campaignData}
                cardStyle={{ width: '200px', bg: colors.White }}
              />
            </Suspense>
          </Stack>
          <Stack spacing={4}>
            <Heading>お知らせ</Heading>
            <Suspense fallback={<p>Loading...</p>}>
              <NewsCardList
                cards={informationData}
                cardStyle={{ bg: colors.White }}
              />
            </Suspense>
          </Stack>
          <Stack spacing={4}>
            <Heading>カテゴリ</Heading>
            <Suspense fallback={<p>Loading...</p>}>
              <PicAndTextCardList
                cards={categoryData}
                cardStyle={{ width: '200px', bg: colors.White }}
              />
            </Suspense>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
