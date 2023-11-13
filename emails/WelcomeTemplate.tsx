import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello World</Text>
          <Link href="https://ylcharan.netlify.app/">ylcharan.com</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
