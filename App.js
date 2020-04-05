import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    // React Native gives you the current value as the input of the setState callback function
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 60,
  },
});
