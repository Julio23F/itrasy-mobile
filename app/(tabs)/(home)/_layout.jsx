// import { backgroundColor } from "@/features/constants/color";
import { Slot, Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="searchFriends" />
        </Stack>
    );
}