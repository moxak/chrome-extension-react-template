import {
  Anchor,
  Badge,
  Box,
  Container,
  Divider,
  Group,
  MantineProvider,
  Text,
  Title,
} from "@mantine/core";
import { commonValue, targetUrls } from "../CommonValue";

export const App: React.FC = () => {

  return (
    <MantineProvider withGlobalStyles={false} withNormalizeCSS={true}>
      <Container size={600}>
        <header>
          <Group>
            <img 
              src={AppIcon} 
              alt={commonValue.appName} 
              style={{ width: '48px', height: '48px' }}
            />
            <Title order={2}>{commonValue.appName}</Title>
            <Badge fz="sm" color='orange.5'>Alt + M</Badge>
          </Group>
          <Box fz="sm">
            <Text>{commonValue.appDescription}</Text>
          </Box>
        </header>
        <Divider my="sm" />
        {/* <App /> */}
        <Divider my="sm" />
        <footer>
          <Group position="center">
            <Anchor
              href={commonValue.appGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Anchor>
          </Group>
        </footer>
      </Container>
    </MantineProvider>
  );
};
