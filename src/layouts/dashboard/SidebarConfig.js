import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'home',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Schedules',
    path: '/dashboard/schedules',
    icon: getIcon(peopleFill)
  },
  {
    title: 'jobs',
    path: '/dashboard/jobs',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'history',
    path: '/dashboard/history',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'customers',
    path: '/dashboard/customers',
    icon: getIcon(fileTextFill)
  }
];

export default sidebarConfig;
