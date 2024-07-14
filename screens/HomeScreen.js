// screens/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋</Text>
        <Text style={styles.username}>Christie Doe</Text>
        <Image
          source={{ uri: 'https://example.com/your-profile-picture.jpg' }} // Thay thế bằng URL hình ảnh của bạn
          style={styles.profilePic}
        />
      </View>
      <View style={styles.insights}>
        <Text style={styles.insightsTitle}>Your Insights</Text>
        <View style={styles.insightGrid}>
          <InsightBox title="Scan new" value="Scanned 483" icon={<MaterialIcons name="scanner" size={24} color="white" />} />
          <InsightBox title="Counterfeits" value="Counterfeited 32" icon={<AntDesign name="warning" size={24} color="white" />} />
          <InsightBox title="Success" value="Checkouts 8" icon={<AntDesign name="checkcircle" size={24} color="white" />} />
          <InsightBox title="Directory" value="History 26" icon={<FontAwesome5 name="history" size={24} color="white" />} />
        </View>
      </View>
      <View style={styles.exploreMore}>
        <Text style={styles.exploreMoreText}>Explore More</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </View>
  );
}

const InsightBox = ({ title, value, icon }) => (
  <View style={styles.insightBox}>
    <View style={styles.insightIcon}>{icon}</View>
    <Text style={styles.insightTitle}>{title}</Text>
    <Text style={styles.insightValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insights: {
    marginTop: 30,
  },
  insightsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  insightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  insightBox: {
    width: '48%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  insightIcon: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 25,
    marginBottom: 10,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  insightValue: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
  exploreMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  exploreMoreText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
