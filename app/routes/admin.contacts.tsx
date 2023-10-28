import { Outlet } from '@remix-run/react';
import AppShell from '~/components/AppShell/AppShell';

export default function Contacts() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
