import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SafetyAccidentScreen({ navigation }) {
  const quickLinks = [
    {
      title: '관련법령',
      icon: '📋',
      route: 'SafetyLaws',
      color: '#4ADE80',
      bgGradient: ['#064E3B', '#065F46']
    },
    {
      title: '긴급 연락망',
      icon: '🚨',
      route: 'EmergencyContacts',
      color: '#F87171',
      bgGradient: ['#7F1D1D', '#991B1B']
    },
    {
      title: '보고체계',
      icon: '📊',
      route: 'ReportingSystem',
      color: '#60A5FA',
      bgGradient: ['#1E3A8A', '#1E40AF']
    },
  ];

  const mainMenu = [
    {
      id: 1,
      title: '위험요소 식별 및 분류',
      description: '작업장 내 위험요소 파악 및 체계적 분류',
      icon: '🔍',
      route: 'RiskIdentification',
      color: '#4ADE80',
      bgColor: '#0F172A',
      borderColor: '#4ADE80'
    },
    {
      id: 2,
      title: '사고 유형별 대응방안',
      description: '각종 안전사고 유형별 신속 대응 지침',
      icon: '⚡',
      route: 'AccidentResponse',
      color: '#FBBF24',
      bgColor: '#1E1B4B',
      borderColor: '#FBBF24'
    },
    {
      id: 3,
      title: '사고 대응 체계',
      description: '사고 발생 시 단계별 대응 프로세스',
      icon: '🛡',
      route: 'ResponseSystem',
      color: '#A78BFA',
      bgColor: '#1F2937',
      borderColor: '#A78BFA'
    },
    {
      id: 4,
      title: '사후 조치',
      description: '사고 후 재발방지 및 개선사항 관리',
      icon: '🔧',
      route: 'PostAccidentCare',
      color: '#34D399',
      bgColor: '#0F172A',
      borderColor: '#34D399'
    },
  ];

  const MenuCard = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card, 
        { 
          backgroundColor: item.bgColor,
          borderLeftColor: item.borderColor,
          shadowColor: item.color,
        }
      ]}
      onPress={() => navigation.navigate(item.route)}
      activeOpacity={0.85}
    >
      <View style={styles.cardContent}>
        <View style={[styles.iconWrapper, { backgroundColor: item.color + '20' }]}>
          <Text style={styles.icon}>{item.icon}</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descText}>{item.description}</Text>
        </View>
        <View style={[styles.arrowWrapper, { backgroundColor: item.color + '15' }]}>
          <Text style={[styles.arrow, { color: item.color }]}>→</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const QuickButton = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.quickButton, 
        { 
          backgroundColor: item.color + '15',
          borderColor: item.color + '30',
        }
      ]}
      onPress={() => navigation.navigate(item.route)}
      activeOpacity={0.8}
    >
      <View style={[styles.quickIconContainer, { backgroundColor: item.color + '20' }]}>
        <Text style={[styles.quickIcon, { color: item.color }]}>{item.icon}</Text>
      </View>
      <Text style={[styles.quickText, { color: item.color }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Pattern */}
      <View style={styles.backgroundPattern}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />
        <View style={styles.circle4} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* 헤더 */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>안전관리 매뉴얼</Text>
          <Text style={styles.headerSubtitle}>Safety Management Manual</Text>
          <View style={styles.titleUnderline} />
        </View>

        {/* 퀵버튼 */}
        <View style={styles.quickSection}>
          <View style={styles.quickRow}>
            {quickLinks.map((item, index) => (
              <QuickButton key={index} item={item} />
            ))}
          </View>
        </View>

        {/* 메인 메뉴 카드 */}
        <View style={styles.mainSection}>
          {mainMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
  },
  
  // Background Pattern
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle1: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(74, 222, 128, 0.03)',
  },
  circle2: {
    position: 'absolute',
    top: height * 0.25,
    left: -100,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(96, 165, 250, 0.03)',
  },
  circle3: {
    position: 'absolute',
    top: height * 0.6,
    right: -60,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(251, 191, 36, 0.03)',
  },
  circle4: {
    position: 'absolute',
    bottom: -70,
    left: -50,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(167, 139, 250, 0.03)',
  },

  scroll: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 80,
    paddingBottom: 20,
    justifyContent: 'center',
  },

  // Header
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: -1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  headerSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 12,
  },
  titleUnderline: {
    width: 60,
    height: 3,
    backgroundColor: '#4ADE80',
    borderRadius: 2,
    shadowColor: '#4ADE80',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },

  // Section Titles
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
    letterSpacing: -0.5,
  },

  // Quick Section
  quickSection: {
    marginBottom: 30,
  },
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  quickButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderWidth: 1,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  quickIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  quickIcon: {
    fontSize: 18,
  },
  quickText: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: -0.2,
  },

  // Main Section
  mainSection: {
    flex: 1,
    marginBottom: 24,
  },
  card: {
    borderRadius: 14,
    marginBottom: 20,
    borderLeftWidth: 4,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconWrapper: {
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  icon: {
    fontSize: 20,
  },
  textWrapper: {
    flex: 1,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 3,
    letterSpacing: -0.3,
  },
  descText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 16,
    letterSpacing: -0.1,
  },
  arrowWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 16,
    fontWeight: '600',
  },

  // Footer
  footer: {
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 80,
  },
  footerText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  footerSubtext: {
    fontSize: 10,
    color: 'rgba(255, 255, 255, 0.3)',
    fontWeight: '500',
    letterSpacing: 1,
  },
});