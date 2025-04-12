import './TopBar.css';
import TopBarButton from './TopBarButton';

export function TopBar() {
    const topBarButtons = ['ucsc.info', 'news', 'peak', 'menu', 'courses'];
    return (
        <header className="app-bar">
            <nav className="nav-bar__nav">
                {topBarButtons.map((item) => (
                    <TopBarButton key={item}>{item}</TopBarButton>
                ))}
            </nav>
        </header>
    );
}

// export function TopBar() {
//   return (
//     <AppShell
//       header={{ height: 50 }}
//     >
//       <AppShell.Header>
//         {/* <Group h="100%" px="md" justify="space-between"> */}
//         <Group w="100%" px="md">

//             <TopBarButton>ucsc.info</TopBarButton>
//             <TopBarButton>news</TopBarButton>
//             <TopBarButton>peak</TopBarButton>
//             <TopBarButton>menu</TopBarButton>
//             <TopBarButton>courses</TopBarButton>

//           <Box>
//             <ThemeToggle />
//           </Box>
//         </Group>
//       </AppShell.Header>
//     </AppShell>
//   );
// }

