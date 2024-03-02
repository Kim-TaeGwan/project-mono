import { ReactNode } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LayoutWrap = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Header = styled.div``;

const HeaderContentWrap = styled.div`
  height: 48px;
  background-color: ${({ theme }) => theme.colors.gray['1000']};
`;

const HeaderContentBottomWrap = styled(HeaderContentWrap)`
  height: 40px;
  margin-top: 2px;
`;

const HeaderContent = styled.div`
  max-width: 1100px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Image)``;

const LogoTitle = styled.span`
  color: ${({ theme }) => theme.colors.yellow['750']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const MenuWrap = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Menu = styled.li``;

const MenuPath = styled(Link)<{ active: string }>`
  color: ${({ theme, active }) =>
    active === 'active' ? theme.colors.gray['350'] : theme.colors.gray['450']};

  &:hover {
    color: ${({ theme }) => theme.colors.gray['350']};
  }
`;

const Childrenwrap = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex: 1;
`;

interface ILayoutProps {
  children: ReactNode;
}

const MenuList = [
  {
    title: '홈',
    path: '/',
  },
  {
    title: '챔피언 분석',
    path: '/champions',
  },
];

export default function Layout({ children }: ILayoutProps) {
  const router = useRouter();

  const { pathname } = router;

  return (
    <LayoutWrap>
      <Header>
        <HeaderContentWrap>
          <HeaderContent>
            <LogoWrap>
              <Logo
                alt={'lol-logo'}
                height={40}
                src={'/assets/images/league.png'}
                width={38}
              />
              <LogoTitle>League of Legends</LogoTitle>
            </LogoWrap>
          </HeaderContent>
        </HeaderContentWrap>
        <HeaderContentBottomWrap>
          <HeaderContent>
            <MenuWrap>
              {MenuList.map((nav, index) => (
                <Menu key={index}>
                  <MenuPath
                    active={pathname === nav.path ? 'active' : 'false'}
                    href={nav.path}
                  >
                    {nav.title}
                  </MenuPath>
                </Menu>
              ))}
            </MenuWrap>
          </HeaderContent>
        </HeaderContentBottomWrap>
      </Header>
      <Childrenwrap>{children}</Childrenwrap>
    </LayoutWrap>
  );
}
