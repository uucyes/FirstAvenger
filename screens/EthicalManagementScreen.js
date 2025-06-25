import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';

export default function EthicalManagementScreen({ navigation }) {

  const quickLinks = [
    {
      title: '법령자료',
      icon: '📚',
      route: 'LegalDocsQuick',
      color: 'rgba(118, 240, 224, 0.8)',
    },
    {
      title: '중요 Q&A',
      icon: '💡',
      route: 'ImportantQAQuick',
      color: 'rgba(211, 211, 8, 0.9)', // 변경: 밝은 노란색
    },
    {
      title: '신고센터', // 기존 '클린신고' 버튼의 역할을 퀵 링크로 통합
      icon: '📣',
      route: 'AbuseReportCenterQuick',
      color: 'rgba(255, 102, 102, 0.9)', // 변경: 밝은 빨간색
    },
  ];

  const mainMenu = [
    {
      id: 1,
      title: '윤리헌장',
      description: '공사의 핵심 가치와 윤리 원칙',
      icon: '📋',
      route: 'EthicsCharter',
      color: '#BD8EFF', // 변경: 보라색
    },
    {
      id: 2,
      title: '임직원행동강령',
      description: '직원이 준수해야 할 행동 기준',
      icon: '👥',
      route: 'WorkplaceEthics',
      color: '#6EE7B7', // 변경: 연한 초록색
    },
    {
      id: 3,
      title: '부패방지방침',
      description: '투명하고 공정한 업무 수행',
      icon: '🔒',
      route: 'AntiCorruption',
      color: '#5EEAD4', // 변경: 청록색
    },
    {
      id: 4,
      title: '공익신고자보호제도',
      description: '신고자 권익 보호 및 지원',
      icon: '🛡',
      route: 'WhistleblowerProtection',
      color: '#FACC15', // 변경: 금색
    },
    {
      id: 5,
      title: '공직자 이해충돌방지',
      description: '공정한 직무수행과 이해충돌 방지',
      icon: '⚖',
      route: 'ConflictOfInterest',
      color: '#FB7185', // 핑크색
    }
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
      <Text style={[styles.quickIcon, { color: '#FFFFFF' }]}>{item.icon}</Text>
      <Text style={[styles.quickText, { color: '#FFFFFF' }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>윤리경영 매뉴얼</Text>
          <Text style={styles.headerSubtitle}>투명하고 신뢰받는 공기업 실현</Text>
        </View>

        <View style={styles.quickRow}>
          {quickLinks.map((item, index) => (
            <QuickButton key={index} item={item} />
          ))}
        </View>

        {mainMenu.map((item, index) => (
          <MenuCard key={item.id} item={item} index={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // 다크 백그라운드 유지
  },
  scroll: {
    padding: 24,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 4,
    marginTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF', // 화이트 텍스트 (다크 테마)
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 14, 
    color: '#94A3B8', // 라이트 그레이 (다크 테마)
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
    paddingVertical: 10,
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
  card: { // HumanRightsMainScreen의 card 스타일 적용 (이름 변경)
    backgroundColor: 'rgba(255, 255, 255, 0.08)', // 어두운 반투명 배경
    borderRadius: 14,
    marginBottom: 10,
    borderLeftWidth: 5,
    shadowColor: '#fff', // 그림자 색상 어둡게
    shadowOpacity: 0.05, // 그림자 진하게
    shadowOffset: { width: 0, height: 1 }, // 그림자 오프셋 조정
    shadowRadius: 6, // 그림자 블러 조정
    elevation: 2, // 안드로이드 그림자
  },
  cardContent: { // HumanRightsMainScreen의 cardContent 스타일 적용
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconWrapper: { // HumanRightsMainScreen의 iconWrapper 스타일 적용 (색상은 테마)
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // 아이콘 배경도 어두운 테마에 맞게 조정
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: { // HumanRightsMainScreen의 icon 스타일 적용
    fontSize: 24,
  },
  textWrapper: { // HumanRightsMainScreen의 textWrapper 스타일 적용
    flex: 1,
  },
  titleText: { // HumanRightsMainScreen의 titleText 스타일 적용 (색상은 테마)
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  descText: { // HumanRightsMainScreen의 descText 스타일 적용 (색상은 테마)
    fontSize: 13,
    color: '#CBD5E1',
  },
  arrow: { // HumanRightsMainScreen의 arrow 스타일 적용 (색상은 테마)
    fontSize: 20,
    color: '#CBD5E1',
    fontWeight: '300',
  },
});