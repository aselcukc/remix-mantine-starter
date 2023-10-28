import { Outlet } from '@remix-run/react';
import AppShell from '~/components/AppShell/AppShell';

export default function Settings() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
