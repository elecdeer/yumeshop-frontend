import { FC, Suspense } from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { colors } from 'src/styles/Tokens';
import { PromotionContent } from 'src/components/organisms/PromotionContent';
import { CampaignContent } from 'src/components/organisms/CampaignContent';
import { InformationContent } from 'src/components/organisms/InformationContent';
import { CategoryContent } from 'src/components/organisms/CategoryContent';

export const TopPage: FC = () => (
  <Box bg={colors.YumeWhiteGreen}>
    <Suspense fallback={<p>Loading...</p>}>
      <PromotionContent />
    </Suspense>

    <Container maxW="1024px" paddingY={20}>
      <Stack spacing={20}>
        <Stack spacing={4}>
          <Heading>キャンペーン</Heading>
          <Suspense fallback={<p>Loading...</p>}>
            <CampaignContent />
          </Suspense>
        </Stack>
        <Stack spacing={4}>
          <Heading>お知らせ</Heading>
          <Suspense fallback={<p>Loading...</p>}>
            <InformationContent />
          </Suspense>
        </Stack>
        <Stack spacing={4}>
          <Heading>カテゴリ</Heading>
          <Suspense fallback={<p>Loading...</p>}>
            <CategoryContent />
          </Suspense>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
