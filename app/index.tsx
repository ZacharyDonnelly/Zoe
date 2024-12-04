import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const HomeScreen = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href="/(root)/chat" />;

  return <Redirect href="/(auth)/welcome" />;
};

export default HomeScreen;