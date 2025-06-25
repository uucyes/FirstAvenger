import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function DisasterManagemenetScreen({ navigation }) {
  const quickLinks = [
    {
      title: '비상연락망',
      icon: '📞',
      route: 'EmergencyContacts',
      color: '#EF4444',
    },
    {
      title: '시설별 대피도',
      icon: '🏃‍♂',
      route: 'EvacuationMap',
      color: '#F97316',
    },
    {
      title: '훈련 시나리오',
      icon: '🎯',
      route: 'TrainingScenario',
      color: '#3B82F6',
    },
    {
      title: '관련법령',
      icon: '📚',
      route: 'RelatedLaws',
      color: '#10B981',
    },
  ];

  const mainMenu = [
    {
      id: 1,
      title: '재난 유형 분류',
      description: '자연재해, 사회재난, 안전사고 등 분류',
      icon: '🌪',
      route: 'DisasterTypes',
      color: '#2563EB',
    },
    {
      id: 2,
      title: '재난 대응 체계',
      description: '중앙-지방-현장 단계별 대응 체계',
      icon: '🏛',
      route: 'ResponseSystem',
      color: '#F59E0B',
    },
    {
      id: 3,
      title: '재난 상황 발생 시 대응방안',
      description: '초기 대응부터 응급처치까지',
      icon: '🚨',
      route: 'EmergencyResponse',
      color: '#EF4444',
    },
    {
      id: 4,
      title: '복구 및 사후관리',
      description: '피해 복구와 재발 방지 대책',
      icon: '🔧',
      route: 'Recovery',
      color: '#10B981',
    },
  ];

  const MenuCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: item.color }]}
      onPress={() => navigation.navigate(item.route)}
      activeOpacity={0.85}
    >
      <View style={styles.cardContent}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>{item.icon}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descText}>{item.description}</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );

  const QuickButton = ({ item }) => (
    <TouchableOpacity
      style={[styles.quickButton, { backgroundColor: item.color + '20' }]}
      onPress={() => navigation.navigate(item.route)}
      activeOpacity={0.8}
    >
      <Text style={[styles.quickIcon, { color: item.color }]}>{item.icon}</Text>
      <Text style={[styles.quickText, { color: item.color }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* 헤더 */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>재난 유형별 대응 매뉴얼</Text>
          <Text style={styles.headerSubtitle}>상황에 맞는 신속한 대응이 생명을 구합니다</Text>
        </View>

        {/* 퀵버튼 */}
        <View style={styles.quickRow}>
          {quickLinks.map((item, index) => (
            <QuickButton key={index} item={item} />
          ))}
        </View>

        {/* 메인 메뉴 카드 */}
        {mainMenu.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scroll: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 28,
    marginTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
  },
  quickButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 16,
    marginHorizontal: 3,
    alignItems: 'center',
  },
  quickIcon: {
    fontSize: 20,
    marginBottom: 6,
  },
  quickText: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    marginBottom: 14,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
  },
  iconWrapper: {
    backgroundColor: '#f1f5f9',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  textWrapper: {
    flex: 1,
  },
  titleText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  descText: {
    fontSize: 13,
    color: '#6b7280',
  },
  arrow: {
    fontSize: 20,
    color: '#9ca3af',
  },
});