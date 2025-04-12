import { AppShell, Group, Box } from "@mantine/core";
import TopBarButton from "./TopBarButton";
import ThemeToggle from "../../ThemeChanger";

export function TopBar() {
  return (
    <AppShell
      header={{ height: 50 }}
    >
      <AppShell.Header>
        {/* <Group h="100%" px="md" justify="space-between"> */}
        <Group w="100%" px="md">

            <TopBarButton>ucsc.info</TopBarButton>
            <TopBarButton>news</TopBarButton>
            <TopBarButton>peak</TopBarButton>
            <TopBarButton>menu</TopBarButton>
            <TopBarButton>courses</TopBarButton>

          <Box>
            <ThemeToggle />
          </Box>
        </Group>
      </AppShell.Header>
    </AppShell>
  );
}


// import { AppShell, Group } from "@mantine/core";
// import TopBarButton from "./TopBarButton";

// export function TopBar() {
//     return (
//         <AppShell
//             header={{height: 50}}>
//             <AppShell.Header>
//                 <Group h="100%" px="md">
//                     {/* this code below is gonna be changed to a button*/}
//                     <TopBarButton>ucsc.info</TopBarButton>
//                     <TopBarButton>news</TopBarButton>
//                     <TopBarButton>peak</TopBarButton>
//                     <TopBarButton>menu</TopBarButton>
//                     <TopBarButton>courses</TopBarButton>
//                 </Group>
//             </AppShell.Header>
//         </AppShell>
//     );
// }
