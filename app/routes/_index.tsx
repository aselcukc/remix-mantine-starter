import type { MetaFunction } from '@remix-run/node';
import { Welcome } from '~/components/Welcome/Welcome';
import { ColorSchemeToggle } from '~/components/ColorSchemeToggle/ColorSchemeToggle';
import { Link } from '@remix-run/react';
import { Flex } from '@mantine/core';

export const meta: MetaFunction = () => {
  return [
    { title: 'Mantine Remix App' },
    { name: 'description', content: 'Welcome to Mantine!' },
  ];
};

export default function Index() {
  return (
    <div>
      <Welcome />
      <ColorSchemeToggle />
      <Flex justify="center" mt="20">
        <Link to="/admin/dashboard">Dashboard</Link>
      </Flex>
    </div>
  );
}
