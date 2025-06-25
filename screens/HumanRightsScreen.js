import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function HumanRightsScreen({ navigation }) {
  const quickLinks = [
    {
      title: '법령자료',
      icon: '📚',
      route: 'LegalDocs',
      color: '#3B82F6',
    },
    {
      title: '중요 Q&A',
      icon: '💡',
      route: 'ImportantQA',
      color: '#F97316',
    },
    {
      title: '신고센터',
      icon: '📣',
      route: 'AbuseReportCenter',
      color: '#EF4444',
    },
  ];

  const mainMenu = [
    {
      id: 1,
      title: '인권경영 선언문',
      description: '조직의 인권존중 원칙과 의지 표명',
      icon: '📝',
      route: 'Declaration',
      color: '#2563EB',
    },
    {
      id: 2,
      title: '직장 내 괴롭힘 기준',
      description: '직장 내 괴롭힘의 유형과 대응 기준',
      icon: '🚫',
      route: 'WorkplaceBullying',
      color: '#F59E0B',
    },
    {
      id: 3,
      title: '인권보호 처리지침',
      description: '인권 침해 발생 시 내부 처리 기준',
      icon: '🛡',
      route: 'RightsGuidelines',
      color: '#7C3AED',
    },
    {
      id: 4,
      title: '인권침해 구제절차',
      description: '신고, 조사, 구제까지의 절차 안내',
      icon: '⚖',
      route: 'ReliefProcedure',
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
        <Text style={styles.arrow}></Text>
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
          <Text style={styles.headerTitle}>인권경영 매뉴얼</Text>
          <Text style={styles.headerSubtitle}>인권존중은 공공기관의 기본 의무입니다.</Text>
        </View>

        {/* 퀵버튼 먼저 */}
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
    marginBottom: 24,
    marginTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 6,
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
    paddingVertical: 14,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  quickIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  quickText: {
    fontSize: 12,
    fontWeight: '600',
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
