import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Flex } from '@mantine/core';

import Navbar from '../Navbar/Navbar';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 40 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Flex visibleFrom="sm">Logo</Flex>
      </AppShell.Header>

      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
