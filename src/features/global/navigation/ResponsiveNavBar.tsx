import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, Divider, ScrollArea } from '@mantine/core';

import { userTabs, adminTabs } from './utils/links';

import { SlLogout } from "react-icons/sl";
import { IconType } from 'react-icons';

import { useRouter } from 'next/router';

import LittleColorScheme from 'components/littleColorScheme/LittleColorScheme';

interface Props {
    page: string;
}

const useStyles = createStyles((theme) => ({
    link: {
        width: 40,
        height: 40,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],

        '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

interface NavbarLinkProps {
    icon: IconType;
    label: string;
    active?: boolean;
    onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" transitionDuration={300} withinPortal>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                <Icon size={20} />
            </UnstyledButton>
        </Tooltip>
    );
}

const ResponsiveNavBar: React.FC<Props> = ({page}) => {
    const router = useRouter();
    const userNav = userTabs.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={link.label === page}
            onClick={() => router.push(link.link)}
        />
    ));

    const adminNav = adminTabs.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={link.label === page}
            onClick={() => router.push(link.link)}
        />
    ));

    return (
        <Navbar width={{ base: 80 }} p="md">
        <Center>
            <h1>W</h1>
        </Center>
        <Navbar.Section grow mt={"md"} component={ScrollArea} pb={10}>
            <Stack spacing={5} align="center">
                {userNav}
                <Divider mt={5} mb={5} />
                {adminNav}
            </Stack>
        </Navbar.Section>
        <Navbar.Section>
            <Stack justify="center" spacing={10}>
                <Divider />
                <Center mt={10}>
                    <LittleColorScheme />
                </Center>
                <NavbarLink icon={SlLogout} label="Logout" />
            </Stack>
        </Navbar.Section>
        </Navbar>
    );
}

export default ResponsiveNavBar;