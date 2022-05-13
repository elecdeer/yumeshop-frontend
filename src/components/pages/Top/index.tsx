import { FC, Suspense } from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { colors } from 'src/styles/Tokens';
import { PromotionSection } from 'src/components/organisms/PromotionSection';
import { CampaignSection } from 'src/components/organisms/CampaignSection';
import { InformationSection } from 'src/components/organisms/InformationSection';
import { CategorySection } from 'src/components/organisms/CategorySection';

export const TopPage: FC = () => (
  <Box bg={colors.YumeWhiteGreen}>
    <Suspense fallback={<p>Loading...</p>}>
      <PromotionSection />
    </Suspense>

    <Container maxW="1024px" paddingY={20}>
      <Stack spacing={20}>
        <Stack spacing={4}>
          <Heading>キャンペーン</Heading>
          <Suspense fallback={<p>Loading...</p>}>
            <CampaignSection />
          </Suspense>
        </Stack>
        <Stack spacing={4}>
          <Heading>お知らせ</Heading>
          <Suspense fallback={<p>Loading...</p>}>
            <InformationSection />
          </Suspense>
        </Stack>
        <Stack spacing={4}>
          <Heading>カテゴリ</Heading>
          <Suspense fallback={<p>Loading...</p>}>
            <CategorySection />
          </Suspense>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
