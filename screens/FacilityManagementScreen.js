import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

export default function FacilityManagementScreen({ navigation }) {
  const teams = [
    {
      id: 1,
      name: '본사',
      color: '#FF6B6B',
      route: 'Headquarters',
      icon: 'business'
    },
    {
      id: 2,
      name: '체육센터',
      color: '#4ECDC4',
      route: 'SportsCenter',
      icon: 'fitness-center'
    },
    {
      id: 3,
      name: '체육공원',
      color: '#667eea',
      route: 'SportssPark',
      icon: 'park'
    },
    {
      id: 4,
      name: '공영주차장',
      color: '#f093fb',
      route: 'PublicParking',
      icon: 'local-parking'
    },
    {
      id: 5,
      name: '차고지',
      color: '#38d9a9',
      route: 'Garage',
      icon: 'garage'
    },
    {
      id: 6,
      name: '바라산휴양림',
      color: '#ff8787',
      route: 'BarasanRecreation',
      icon: 'nature'
    },
    {
      id: 7,
      name: '조류생태과학관',
      color: '#43e97b',
      route: 'BirdEcologyCenter',
      icon: 'science'
    },
    {
      id: 8,
      name: '왕송호수캠핑장',
      color: '#845ef7',
      route: 'WangsongLakeCamping',
      icon: 'outdoor-grill'
    },
    {
      id: 9,
      name: '스카이레일',
      color: '#fa709a',
      route: 'SkyRail',
      icon: 'train'
    }
  ];

  const quickButtons = [
    {
      id: 1,
      name: '관련 법령',
      color: '#FF8A65',
      route: 'RelatedLaws',
      icon: 'gavel'
    },
    {
      id: 2,
      name: '시설물 현황',
      color: '#81C784',
      route: 'FacilityStatus',
      icon: 'domain'
    },
    {
      id: 3,
      name: '체크리스트',
      color: '#64B5F6',
      route: 'Checklist',
      icon: 'checklist'
    }
  ];

  const handleTeamPress = (route) => {
    navigation.navigate('Fireinspection');
  };

  const handleQuickButtonPress = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.title}>시설물 관리 매뉴얼</Text>
        <Text style={styles.subtitle}>팀별 관리 방안 및 점검 내용</Text>
      </View>

      {/* 퀵 버튼 */}
      <View style={styles.quickButtonContainer}>
        {quickButtons.map((button) => (
          <TouchableOpacity
            key={button.id}
            style={[styles.quickButton, { backgroundColor: button.color }]}
            onPress={() => handleQuickButtonPress(button.route)}
            activeOpacity={0.7}
          >
            <Icon name={button.icon} size={24} color="#fff" style={styles.quickButtonIcon} />
            <Text style={styles.quickButtonText}>{button.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 팀 그리드 */}
      <View style={styles.gridContainer}>
        {teams.map((team, index) => (
          <View key={team.id} style={styles.teamItem}>
            <TouchableOpacity
              style={[styles.circleButton, { backgroundColor: team.color }]}
              onPress={() => handleTeamPress(team.route)}
              activeOpacity={0.7}
            >
              <Icon name={team.icon} size={30} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.teamName} numberOfLines={1} ellipsizeMode="tail">{team.name}</Text>
          </View>
        ))}
      </View>

      {/* 하단 정보 */}
      <View style={styles.bottomSection}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8faff',
    paddingHorizontal: 25,
    paddingTop: 80,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2c3e50',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    fontWeight: '500',
    textAlign: 'center',
  },
  quickButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 35,
    paddingHorizontal: 5,
  },
  quickButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    minHeight: 70,
  },
  quickButtonIcon: {
    marginBottom: 4,
  },
  quickButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
    paddingHorizontal: 10,
  },
  teamItem: {
    alignItems: 'center',
    marginBottom: 35,
    width: (width - 90) / 3, // 3열로 배치
  },
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  teamName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#34495e',
    textAlign: 'center',
    numberOfLines: 1,
    paddingHorizontal: 2,
  },
  bottomSection: {
    alignItems: 'center',
    paddingVertical: 25,
    marginTop: 20,
  },
});