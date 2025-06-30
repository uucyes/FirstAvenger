import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

const HomeScreen = ({ navigation }) => {  // navigation prop 추가
  const [activeTab, setActiveTab] = useState('disaster');
  const [searchText, setSearchText] = useState('');
  const [pressedCard, setPressedCard] = useState(null);

  // 카드 데이터
  const cardData = {
    disaster: [
      {
        id: 'disaster',
        title: '재난관리',
        description: '자연재해, 사회재난 대응 매뉴얼\n비상연락망 및 대피절차 안내',
        icon: 'warning',
        iconColor: '#ff6b6b',
        iconBg: 'disasterIcon',
      },
      {
        id: 'safety',
        title: '안전관리',
        description: '작업장 안전수칙 및 보호장비\n안전사고 예방 가이드라인',
        icon: 'shield-checkmark',
        iconColor: '#4ecdc4',
        iconBg: 'safetyIcon',
      },
      {
        id: 'facility',
        title: '시설물관리',
        description: '건물 유지보수 및 점검사항\n시설물 안전관리 체크리스트',
        icon: 'business',
        iconColor: '#45b749',
        iconBg: 'facilityIcon',
      },
    ],
    work: [
      {
        id: 'emotional',
        title: '감정노동자 보호',
        description: '고객응대 스트레스 관리\n상담 서비스 및 지원제도',
        icon: 'heart',
        iconColor: '#f39c12',
        iconBg: 'emotionalIcon',
      },
      {
        id: 'ethics',
        title: '윤리경영',
        description: '기업 윤리강령 및 가이드라인\n윤리경영 실천방안',
        icon: 'checkmark-circle',
        iconColor: '#9b59b6',
        iconBg: 'ethicsIcon',
      },
      {
        id: 'humanrights',
        title: '인권경영',
        description: '직장 내 괴롭힘 신고\n인권보호 및 차별금지 정책',
        icon: 'people',
        iconColor: '#3498db',
        iconBg: 'humanrightsIcon',
      },
    ],
  };

  const handleCardPress = (cardId) => {
    setPressedCard(cardId);
    setTimeout(() => setPressedCard(null), 150);
    
    // 네비게이션 처리
    switch(cardId) {
      case 'disaster':
        navigation.navigate('DisasterManagement');
        break;
      case 'safety':
        navigation.navigate('SafetyAccident');
        break;
      case 'facility':
        navigation.navigate('FacilityManagement');
        break;
      case 'emotional':
        navigation.navigate('EmotionalLabor');
        break;
      case 'ethics':
        navigation.navigate('EthicalManagement');
        break;
      case 'humanrights':
        navigation.navigate('HumanRights');
        break;
      default:
        Alert.alert('오류', '해당 페이지를 찾을 수 없습니다.');
    }
  };

  const handleSearch = (text) => {
    setSearchText(text);
    // 실제 검색 로직 구현
  };

  const renderCard = (card) => (
    <TouchableOpacity
      key={card.id}
      style={[
        styles.card,
        pressedCard === card.id && styles.cardPressed,
      ]}
      onPress={() => handleCardPress(card.id)}
      activeOpacity={0.9}
    >
      <View style={[styles.cardIconContainer, styles[card.iconBg]]}>
        <Ionicons
          name={card.icon}
          size={30}
          color={card.iconColor}
          style={[
            styles.cardIcon,
            pressedCard === card.id && styles.cardIconPressed,
          ]}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{card.title}</Text>
        <Text style={styles.cardDescription}>{card.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>안전감사팀 종합 매뉴얼</Text>
        
        {/* 검색창 */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#7f8c8d" />
          <TextInput
            style={styles.searchInput}
            placeholder="빠른 검색..."
            value={searchText}
            onChangeText={handleSearch}
            placeholderTextColor="#bdc3c7"
          />
        </View>
      </View>

      {/* 탭 네비게이션 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'disaster' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setActiveTab('disaster')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'disaster' ? styles.activeTabText : styles.inactiveTabText,
            ]}
          >
            재난/안전관리
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'work' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setActiveTab('work')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'work' ? styles.activeTabText : styles.inactiveTabText,
            ]}
          >
            근무환경/윤리
          </Text>
        </TouchableOpacity>
      </View>

      {/* 카드 리스트 */}
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {cardData[activeTab].map((card) => (
          <View key={card.id} style={styles.cardContainer}>
            {renderCard(card)}
          </View>
        ))}
      </ScrollView>

      {/* 하단 로고 영역 */}
      <View style={styles.footerContainer}>
        <Image 
          source={require('../assets/logo.jpg')}
          style={styles.companyLogo}
          resizeMode="contain"
          onError={(error) => console.log('Image load error:', error)}
        />
      </View>
    </View>
  );
};

export default HomeScreen;