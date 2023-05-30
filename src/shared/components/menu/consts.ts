export interface NavLink {
    path: string[];
    text: string;
    iconClass: string;
}

export const NAV_LINKS = [
    {
        path: ['/home'],
        text: 'Home',
        iconClass: 'pi-home',
    },
    {
        path: ['/inventory'],
        text: 'Inventory',
        iconClass: 'pi-desktop',
    },
    {
        path: ['/reports'],
        text: 'Reports',
        iconClass: 'pi-file',
    },
    {
        path: ['/billing'],
        text: 'Billing',
        iconClass: 'pi-money-bill',
    },
    {
        path: ['/profile'],
        text: 'Profile',
        iconClass: 'pi-user',
    },
]
