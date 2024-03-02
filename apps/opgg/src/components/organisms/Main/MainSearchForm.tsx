import styled from '@emotion/styled';
import Image from 'next/image';

import Search from '@/components/organisms/Main/SearchForm';

const MainSearchFormWrap = styled.div`
  margin: 0 auto;
`;
const MainLogo = styled(Image)`
  margin: 56px 0 46px;
`;

export default function MainSearchForm() {
  return (
    <MainSearchFormWrap>
      <MainLogo
        alt={'main-logo'}
        height={224}
        src={'/assets/images/league-big-logo.png'}
        width={526}
      />

      <Search />
    </MainSearchFormWrap>
  );
}
