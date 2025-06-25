import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function EmotionalLaborScreen({ navigation }) {
  const menuItems = [
    {
      id: 1,
      title: '감정노동 개념 및 범위',
      description: '감정노동의 정의와 종사자 범위',
      icon: '📚',
      route: 'ConceptScope',
      color: '#4A90E2'
    },
    {
      id: 2,
      title: '민원 응대 매뉴얼',
      description: '안전한 민원 처리 방법',
      icon: '📋',
      route: 'ComplaintManual',
      color: '#F5A623'
    },
    {
      id: 3,
      title: '유형별 응대방법',
      description: '상황별 맞춤형 대응 전략',
      icon: '🎯',
      route: 'ResponseTypes',
      color: '#BD10E0'
    },
    {
      id: 4,
      title: '보호대책 및 지원',
      description: '제도적 보호장치와 지원 서비스',
      icon: '🤝',
      route: 'SupportMeasures',
      color: '#50E3C2'
    }
  ];

  const MenuItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.menuItem, { borderLeftColor: item.color }]}
      onPress={() => navigation.navigate(item.route)}
      activeOpacity={0.8}
    >
      <View style={styles.menuContent}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>{item.icon}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.menuTitle}>{item.title}</Text>
          <Text style={styles.menuDescription}>{item.description}</Text>
        </View>
        <View style={styles.arrow}>
          <Text style={styles.arrowText}>›</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.mainTitle}>감정노동자 보호 매뉴얼</Text>
            </View>
          </View>

          {/* Quick Links - 타이틀 바로 아래로 이동 */}
          <View style={styles.quickLinksSection}>
            <View style={styles.quickLinksGrid}>
              <TouchableOpacity 
                style={styles.quickLink}
                onPress={() => navigation.navigate('SelfCheck')}
              >
                <Text style={styles.quickLinkIcon}>✅</Text>
                <Text style={styles.quickLinkText}>자가진단</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.quickLink}
                onPress={() => navigation.navigate('ReportIncident')}
              >
                <Text style={styles.quickLinkIcon}>📝</Text>
                <Text style={styles.quickLinkText}>사건신고</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.quickLink}
                onPress={() => navigation.navigate('Counseling')}
              >
                <Text style={styles.quickLinkIcon}>💬</Text>
                <Text style={styles.quickLinkText}>상담전화</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Menu Items - 퀵링크 아래로 이동 */}
          <View style={styles.menuSection}>
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              본 매뉴얼은 근로기준법 및 산업안전보건법에 근거하여 제작되었습니다.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  background: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 12,
    overflow: 'hidden',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  quickLinksSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  quickLinksGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickLink: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  quickLinkIcon: {
    fontSize: 20,
    marginBottom: 6,
  },
  quickLinkText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
    textAlign: 'center',
  },
  menuSection: {
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 16,
  },
  menuItem: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  menuDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  arrow: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 20,
    color: '#94a3b8',
    fontWeight: '300',
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 18,
  },
});