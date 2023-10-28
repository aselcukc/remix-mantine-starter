import { Outlet } from '@remix-run/react';
import AppShell from '~/components/AppShell/AppShell';

export default function Products() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
